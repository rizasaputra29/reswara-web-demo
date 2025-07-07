'use client';

import { useState, useEffect } from 'react';

// Content Store for managing dynamic content
export interface HeroContent {
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
}

export interface CompanySettings {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  email: string;
  address: string;
  whatsapp: string;
}

// Content Store Class with Real-time Updates
class ContentStore {
  private heroContent: HeroContent;
  private teamMembers: TeamMember[];
  private companySettings: CompanySettings;
  private listeners: Set<() => void> = new Set();

  constructor() {
    // Initialize with default content
    this.heroContent = this.loadHeroContent();
    this.teamMembers = this.loadTeamMembers();
    this.companySettings = this.loadCompanySettings();

    // Listen for storage changes from other tabs/windows
    if (typeof window !== 'undefined') {
      window.addEventListener('storage', this.handleStorageChange.bind(this));
      
      // Poll for changes every 2 seconds to sync with admin changes
      setInterval(() => {
        this.syncWithStorage();
      }, 2000);
    }
  }

  private handleStorageChange(e: StorageEvent) {
    if (e.key === 'heroContent' || e.key === 'teamMembers' || e.key === 'companySettings') {
      this.syncWithStorage();
    }
  }

  private syncWithStorage() {
    const newHeroContent = this.loadHeroContent();
    const newTeamMembers = this.loadTeamMembers();
    const newCompanySettings = this.loadCompanySettings();

    let hasChanges = false;

    if (JSON.stringify(this.heroContent) !== JSON.stringify(newHeroContent)) {
      this.heroContent = newHeroContent;
      hasChanges = true;
    }

    if (JSON.stringify(this.teamMembers) !== JSON.stringify(newTeamMembers)) {
      this.teamMembers = newTeamMembers;
      hasChanges = true;
    }

    if (JSON.stringify(this.companySettings) !== JSON.stringify(newCompanySettings)) {
      this.companySettings = newCompanySettings;
      hasChanges = true;
    }

    if (hasChanges) {
      this.notifyListeners();
    }
  }

  // Hero Content Management
  getHeroContent(): HeroContent {
    return this.heroContent;
  }

  updateHeroContent(content: Partial<HeroContent>): void {
    this.heroContent = { ...this.heroContent, ...content };
    this.saveHeroContent();
    this.notifyListeners();
    this.broadcastChange('heroContent');
  }

  private loadHeroContent(): HeroContent {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('heroContent');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error('Error parsing hero content:', e);
        }
      }
    }
    return {
      title: 'Transform Your Space with Professional Excellence',
      description: 'Leading landscape development and building consulting services. Creating sustainable, beautiful, and functional environments for over 15 years.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
    };
  }

  private saveHeroContent(): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('heroContent', JSON.stringify(this.heroContent));
    }
  }

  // Team Members Management
  getTeamMembers(): TeamMember[] {
    return this.teamMembers;
  }

  addTeamMember(member: Omit<TeamMember, 'id'>): void {
    const newMember = {
      ...member,
      id: Date.now().toString()
    };
    this.teamMembers = [...this.teamMembers, newMember];
    this.saveTeamMembers();
    this.notifyListeners();
    this.broadcastChange('teamMembers');
  }

  updateTeamMember(id: string, updates: Partial<TeamMember>): void {
    this.teamMembers = this.teamMembers.map(member =>
      member.id === id ? { ...member, ...updates } : member
    );
    this.saveTeamMembers();
    this.notifyListeners();
    this.broadcastChange('teamMembers');
  }

  deleteTeamMember(id: string): void {
    this.teamMembers = this.teamMembers.filter(member => member.id !== id);
    this.saveTeamMembers();
    this.notifyListeners();
    this.broadcastChange('teamMembers');
  }

  private loadTeamMembers(): TeamMember[] {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('teamMembers');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error('Error parsing team members:', e);
        }
      }
    }
    return [
      {
        id: 'director',
        name: 'Ir. Ahmad Reswara',
        position: 'Director & Lead Architect',
        image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
        bio: 'Dengan pengalaman lebih dari 15 tahun dalam industri arsitektur dan lanskap, memimpin tim dalam menciptakan solusi desain yang inovatif dan berkelanjutan.',
        expertise: ['Arsitektur', 'Desain Lanskap', 'Manajemen Proyek', 'Sustainable Design']
      },
      {
        id: 'landscape-lead',
        name: 'Dr. Sari Praptama',
        position: 'Lead Landscape Designer',
        image: 'https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=400',
        bio: 'Spesialis dalam desain lanskap berkelanjutan dengan fokus pada konservasi lingkungan dan estetika yang harmonis.',
        expertise: ['Landscape Design', 'Environmental Conservation', 'Botanical Planning', 'Sustainable Landscaping']
      },
      {
        id: 'structural-engineer',
        name: 'Ir. Budi Santoso',
        position: 'Structural Engineer',
        image: 'https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=400',
        bio: 'Ahli struktur bangunan dengan pengalaman dalam berbagai proyek konstruksi skala besar dan kompleks.',
        expertise: ['Structural Engineering', 'Building Analysis', 'Construction Planning', 'Safety Assessment']
      },
      {
        id: 'environmental-consultant',
        name: 'Dr. Maya Kusuma',
        position: 'Environmental Consultant',
        image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=400',
        bio: 'Konsultan lingkungan berpengalaman dalam menangani berbagai aspek perizinan dan dampak lingkungan.',
        expertise: ['Environmental Impact Assessment', 'Permit Management', 'Sustainability Planning', 'Regulatory Compliance']
      }
    ];
  }

  private saveTeamMembers(): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('teamMembers', JSON.stringify(this.teamMembers));
    }
  }

  // Company Settings Management
  getCompanySettings(): CompanySettings {
    return this.companySettings;
  }

  updateCompanySettings(settings: Partial<CompanySettings>): void {
    this.companySettings = { ...this.companySettings, ...settings };
    this.saveCompanySettings();
    this.notifyListeners();
    this.broadcastChange('companySettings');
  }

  private loadCompanySettings(): CompanySettings {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('companySettings');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error('Error parsing company settings:', e);
        }
      }
    }
    return {
      name: 'CV Reswara Praptama',
      tagline: 'Transforming Spaces, Creating Sustainable Futures',
      description: 'Perusahaan konsultan terkemuka yang mengkhususkan diri dalam pengembangan lingkungan dan bangunan lanskap.',
      phone: '+62 21 1234 5678',
      email: 'info@reswarapraptama.com',
      address: 'Jl. Sudirman No. 123, Jakarta Pusat 10110',
      whatsapp: '+62 812 3456 7890'
    };
  }

  private saveCompanySettings(): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('companySettings', JSON.stringify(this.companySettings));
    }
  }

  // Real-time Broadcasting
  private broadcastChange(type: string): void {
    if (typeof window !== 'undefined') {
      // Trigger storage event for other tabs
      window.dispatchEvent(new StorageEvent('storage', {
        key: type,
        newValue: JSON.stringify(this[type as keyof this]),
        storageArea: localStorage
      }));
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

  // Bulk Operations
  exportContent(): string {
    return JSON.stringify({
      heroContent: this.heroContent,
      teamMembers: this.teamMembers,
      companySettings: this.companySettings,
      exportDate: new Date().toISOString()
    }, null, 2);
  }

  importContent(jsonContent: string): void {
    try {
      const data = JSON.parse(jsonContent);
      if (data.heroContent) {
        this.heroContent = data.heroContent;
        this.saveHeroContent();
      }
      if (data.teamMembers) {
        this.teamMembers = data.teamMembers;
        this.saveTeamMembers();
      }
      if (data.companySettings) {
        this.companySettings = data.companySettings;
        this.saveCompanySettings();
      }
      this.notifyListeners();
    } catch (error) {
      throw new Error('Invalid content format');
    }
  }

  resetToDefaults(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('heroContent');
      localStorage.removeItem('teamMembers');
      localStorage.removeItem('companySettings');
    }
    this.heroContent = this.loadHeroContent();
    this.teamMembers = this.loadTeamMembers();
    this.companySettings = this.loadCompanySettings();
    this.notifyListeners();
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
    return unsubscribe;
  }, []);

  return {
    heroContent: contentStore.getHeroContent(),
    teamMembers: contentStore.getTeamMembers(),
    companySettings: contentStore.getCompanySettings(),
    updateHeroContent: (content: Partial<HeroContent>) => contentStore.updateHeroContent(content),
    addTeamMember: (member: Omit<TeamMember, 'id'>) => contentStore.addTeamMember(member),
    updateTeamMember: (id: string, updates: Partial<TeamMember>) => contentStore.updateTeamMember(id, updates),
    deleteTeamMember: (id: string) => contentStore.deleteTeamMember(id),
    updateCompanySettings: (settings: Partial<CompanySettings>) => contentStore.updateCompanySettings(settings),
    exportContent: () => contentStore.exportContent(),
    importContent: (content: string) => contentStore.importContent(content),
    resetToDefaults: () => contentStore.resetToDefaults()
  };
}