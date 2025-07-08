'use client';

import { useState, useEffect } from 'react';

// Content Store for managing dynamic content with database integration
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
  website?: string;
  linkedin?: string;
  instagram?: string;
  facebook?: string;
}

// API functions for database operations
const api = {
  // Hero Content
  async getHeroContent(): Promise<HeroContent> {
    try {
      const response = await fetch('/api/admin/hero-content');
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.error('Error fetching hero content:', error);
    }
    
    // Fallback to default
    return {
      title: 'Transform Your Space with Professional Excellence',
      description: 'Leading landscape development and building consulting services. Creating sustainable, beautiful, and functional environments for over 15 years.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
    };
  },

  async updateHeroContent(content: Partial<HeroContent>): Promise<HeroContent> {
    const response = await fetch('/api/admin/hero-content', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(content),
    });
    if (!response.ok) throw new Error('Failed to update hero content');
    return response.json();
  },

  // Team Members
  async getTeamMembers(): Promise<TeamMember[]> {
    try {
      const response = await fetch('/api/admin/team-members');
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.error('Error fetching team members:', error);
    }
    
    // Fallback to default
    return [
      {
        id: 'director',
        name: 'Ir. Ahmad Reswara',
        position: 'Director & Lead Architect',
        image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
        bio: 'Dengan pengalaman lebih dari 15 tahun dalam industri arsitektur dan lanskap, memimpin tim dalam menciptakan solusi desain yang inovatif dan berkelanjutan.',
        expertise: ['Arsitektur', 'Desain Lanskap', 'Manajemen Proyek', 'Sustainable Design']
      }
    ];
  },

  async addTeamMember(member: Omit<TeamMember, 'id'>): Promise<TeamMember> {
    const response = await fetch('/api/admin/team-members', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(member),
    });
    if (!response.ok) throw new Error('Failed to add team member');
    return response.json();
  },

  async updateTeamMember(id: string, updates: Partial<TeamMember>): Promise<TeamMember> {
    const response = await fetch(`/api/admin/team-members/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates),
    });
    if (!response.ok) throw new Error('Failed to update team member');
    return response.json();
  },

  async deleteTeamMember(id: string): Promise<void> {
    const response = await fetch(`/api/admin/team-members/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete team member');
  },

  // Company Settings
  async getCompanySettings(): Promise<CompanySettings> {
    try {
      const response = await fetch('/api/admin/company-settings');
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.error('Error fetching company settings:', error);
    }
    
    // Fallback to default
    return {
      name: 'CV Reswara Praptama',
      tagline: 'Transforming Spaces, Creating Sustainable Futures',
      description: 'Perusahaan konsultan terkemuka yang mengkhususkan diri dalam pengembangan lingkungan dan bangunan lanskap.',
      phone: '+62 21 1234 5678',
      email: 'info@reswarapraptama.com',
      address: 'Jl. Sudirman No. 123, Jakarta Pusat 10110',
      whatsapp: '+62 812 3456 7890'
    };
  },

  async updateCompanySettings(settings: Partial<CompanySettings>): Promise<CompanySettings> {
    const response = await fetch('/api/admin/company-settings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(settings),
    });
    if (!response.ok) throw new Error('Failed to update company settings');
    return response.json();
  },
};

// Content Store Class with Database Integration
class ContentStore {
  private heroContent: HeroContent | null = null;
  private teamMembers: TeamMember[] = [];
  private companySettings: CompanySettings | null = null;
  private listeners: Set<() => void> = new Set();
  private initialized = false;

  async initialize() {
    if (this.initialized) return;
    
    try {
      const [hero, team, settings] = await Promise.all([
        api.getHeroContent(),
        api.getTeamMembers(),
        api.getCompanySettings(),
      ]);
      
      this.heroContent = hero;
      this.teamMembers = team;
      this.companySettings = settings;
      this.initialized = true;
      this.notifyListeners();
    } catch (error) {
      console.error('Error initializing content store:', error);
    }
  }

  // Hero Content Management
  getHeroContent(): HeroContent {
    return this.heroContent || {
      title: 'Transform Your Space with Professional Excellence',
      description: 'Leading landscape development and building consulting services.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
    };
  }

  async updateHeroContent(content: Partial<HeroContent>): Promise<void> {
    try {
      const updated = await api.updateHeroContent(content);
      this.heroContent = updated;
      this.notifyListeners();
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
      const newMember = await api.addTeamMember(member);
      this.teamMembers = [...this.teamMembers, newMember];
      this.notifyListeners();
    } catch (error) {
      console.error('Error adding team member:', error);
      throw error;
    }
  }

  async updateTeamMember(id: string, updates: Partial<TeamMember>): Promise<void> {
    try {
      const updated = await api.updateTeamMember(id, updates);
      this.teamMembers = this.teamMembers.map(member =>
        member.id === id ? updated : member
      );
      this.notifyListeners();
    } catch (error) {
      console.error('Error updating team member:', error);
      throw error;
    }
  }

  async deleteTeamMember(id: string): Promise<void> {
    try {
      await api.deleteTeamMember(id);
      this.teamMembers = this.teamMembers.filter(member => member.id !== id);
      this.notifyListeners();
    } catch (error) {
      console.error('Error deleting team member:', error);
      throw error;
    }
  }

  // Company Settings Management
  getCompanySettings(): CompanySettings {
    return this.companySettings || {
      name: 'CV Reswara Praptama',
      tagline: 'Transforming Spaces, Creating Sustainable Futures',
      description: 'Perusahaan konsultan terkemuka.',
      phone: '+62 21 1234 5678',
      email: 'info@reswarapraptama.com',
      address: 'Jl. Sudirman No. 123, Jakarta Pusat 10110',
      whatsapp: '+62 812 3456 7890'
    };
  }

  async updateCompanySettings(settings: Partial<CompanySettings>): Promise<void> {
    try {
      const updated = await api.updateCompanySettings(settings);
      this.companySettings = updated;
      this.notifyListeners();
    } catch (error) {
      console.error('Error updating company settings:', error);
      throw error;
    }
  }

  // Listener Management
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

  // Bulk Operations
  exportContent(): string {
    return JSON.stringify({
      heroContent: this.heroContent,
      teamMembers: this.teamMembers,
      companySettings: this.companySettings,
      exportDate: new Date().toISOString()
    }, null, 2);
  }

  async resetToDefaults(): Promise<void> {
    // This would reset to default values in the database
    // Implementation depends on your requirements
  }
}

// Create singleton instance
export const contentStore = new ContentStore();

// React Hook for using content store
export function useContentStore() {
  const [updateTrigger, setUpdateTrigger] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initialize = async () => {
      await contentStore.initialize();
      setIsLoading(false);
    };
    
    initialize();
    
    const unsubscribe = contentStore.subscribe(() => {
      setUpdateTrigger(prev => prev + 1);
    });
    
    return unsubscribe;
  }, []);

  return {
    isLoading,
    heroContent: contentStore.getHeroContent(),
    teamMembers: contentStore.getTeamMembers(),
    companySettings: contentStore.getCompanySettings(),
    updateHeroContent: (content: Partial<HeroContent>) => contentStore.updateHeroContent(content),
    addTeamMember: (member: Omit<TeamMember, 'id'>) => contentStore.addTeamMember(member),
    updateTeamMember: (id: string, updates: Partial<TeamMember>) => contentStore.updateTeamMember(id, updates),
    deleteTeamMember: (id: string) => contentStore.deleteTeamMember(id),
    updateCompanySettings: (settings: Partial<CompanySettings>) => contentStore.updateCompanySettings(settings),
    exportContent: () => contentStore.exportContent(),
    resetToDefaults: () => contentStore.resetToDefaults()
  };
}