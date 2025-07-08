'use client';

import { useState, useEffect } from 'react';

// Content Store for managing dynamic content with API integration
export interface HeroContent {
  id?: string;
  title: string;
  description: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  bio: string;
  expertise: string[];
  order?: number;
}

export interface CompanySettings {
  id?: string;
  name: string;
  tagline: string;
  description: string;
  phone: string;
  email: string;
  address: string;
  whatsapp: string;
}

// Content Store Class with API Integration
class ContentStore {
  private heroContent: HeroContent | null = null;
  private teamMembers: TeamMember[] = [];
  private companySettings: CompanySettings | null = null;
  private listeners: Set<() => void> = new Set();

  constructor() {
    // Constructor now only initializes the store without API calls
  }

  async loadFromAPI() {
    try {
      // Load hero content
      const heroResponse = await fetch('/api/hero');
      if (heroResponse.ok) {
        const newHeroContent = await heroResponse.json();
        if (JSON.stringify(this.heroContent) !== JSON.stringify(newHeroContent)) {
          this.heroContent = newHeroContent;
          this.notifyListeners();
        }
      }

      // Load team members
      const teamResponse = await fetch('/api/team');
      if (teamResponse.ok) {
        const newTeamMembers = await teamResponse.json();
        if (JSON.stringify(this.teamMembers) !== JSON.stringify(newTeamMembers)) {
          this.teamMembers = newTeamMembers;
          this.notifyListeners();
        }
      }

      // Load company settings
      const companyResponse = await fetch('/api/company');
      if (companyResponse.ok) {
        const newCompanySettings = await companyResponse.json();
        if (JSON.stringify(this.companySettings) !== JSON.stringify(newCompanySettings)) {
          this.companySettings = newCompanySettings;
          this.notifyListeners();
        }
      }
    } catch (error) {
      console.error('Error loading content from API:', error);
    }
  }

  // Hero Content Management
  getHeroContent(): HeroContent | null {
    return this.heroContent;
  }

  async updateHeroContent(content: Partial<HeroContent>): Promise<void> {
    try {
      const response = await fetch('/api/hero', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content)
      });
      
      if (response.ok) {
        const updatedContent = await response.json();
        this.heroContent = updatedContent;
        this.notifyListeners();
      }
    } catch (error) {
      console.error('Error updating hero content:', error);
      throw error;
    }
  }

  // Team Members Management
  getTeamMembers(): TeamMember[] {
    return this.teamMembers;
  }

  async addTeamMember(member: Omit<TeamMember, 'id'>): Promise<void> {
    try {
      const response = await fetch('/api/team', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(member)
      });
      
      if (response.ok) {
        await this.loadFromAPI();
      }
    } catch (error) {
      console.error('Error adding team member:', error);
      throw error;
    }
  }

  async updateTeamMember(id: string, updates: Partial<TeamMember>): Promise<void> {
    try {
      const response = await fetch(`/api/team/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates)
      });
      
      if (response.ok) {
        await this.loadFromAPI();
      }
    } catch (error) {
      console.error('Error updating team member:', error);
      throw error;
    }
  }

  async deleteTeamMember(id: string): Promise<void> {
    try {
      const response = await fetch(`/api/team/${id}`, {
        method: 'DELETE'
      });
      
      if (response.ok) {
        await this.loadFromAPI();
      }
    } catch (error) {
      console.error('Error deleting team member:', error);
      throw error;
    }
  }

  // Company Settings Management
  getCompanySettings(): CompanySettings | null {
    return this.companySettings;
  }

  async updateCompanySettings(settings: Partial<CompanySettings>): Promise<void> {
    try {
      const response = await fetch('/api/company', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings)
      });
      
      if (response.ok) {
        const updatedSettings = await response.json();
        this.companySettings = updatedSettings;
        this.notifyListeners();
      }
    } catch (error) {
      console.error('Error updating company settings:', error);
      throw error;
    }
  }

  // Listener Management for Real-time Updates
  subscribe(listener: () => void): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notifyListeners(): void {
    this.listeners.forEach(listener => {
      try {
        listener();
      } catch (error) {
        console.error('Error in content store listener:', error);
      }
    });
  }
}

// Create singleton instance
export const contentStore = new ContentStore();

// React Hook for using content store with real-time updates
export function useContentStore() {
  const [updateTrigger, setUpdateTrigger] = useState(0);

  useEffect(() => {
    const unsubscribe = contentStore.subscribe(() => {
      setUpdateTrigger(prev => prev + 1);
    });
    
    // Initialize with API data on client side only
    contentStore.loadFromAPI();
    
    // Poll for changes every 3 seconds
    const interval = setInterval(() => {
      contentStore.loadFromAPI();
    }, 3000);
    
    return () => {
      unsubscribe();
      clearInterval(interval);
    };
  }, []);

  return {
    heroContent: contentStore.getHeroContent(),
    teamMembers: contentStore.getTeamMembers(),
    companySettings: contentStore.getCompanySettings(),
    updateHeroContent: (content: Partial<HeroContent>) => contentStore.updateHeroContent(content),
    addTeamMember: (member: Omit<TeamMember, 'id'>) => contentStore.addTeamMember(member),
    updateTeamMember: (id: string, updates: Partial<TeamMember>) => contentStore.updateTeamMember(id, updates),
    deleteTeamMember: (id: string) => contentStore.deleteTeamMember(id),
    updateCompanySettings: (settings: Partial<CompanySettings>) => contentStore.updateCompanySettings(settings)
  };
}