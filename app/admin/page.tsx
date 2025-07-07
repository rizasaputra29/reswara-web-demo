'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  Eye, 
  Settings, 
  Image, 
  LogOut, 
  BarChart3,
  TrendingUp,
  Calendar,
  Globe,
  Plus,
  Edit,
  Trash2,
  Save,
  Upload,
  Download,
  RefreshCw
} from 'lucide-react';
import { getVisitorCount } from '@/lib/data';
import { useContentStore } from '@/lib/contentStore';

const AdminDashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [visitorCount, setVisitorCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [editingMember, setEditingMember] = useState(null);
  const [newMember, setNewMember] = useState({
    name: '',
    position: '',
    image: '',
    bio: '',
    expertise: []
  });
  const [contacts, setContacts] = useState([]);
  const [isSaving, setIsSaving] = useState(false);
  const router = useRouter();

  // Use the content store for real-time updates
  const {
    heroContent,
    teamMembers,
    companySettings,
    updateHeroContent,
    addTeamMember,
    updateTeamMember,
    deleteTeamMember,
    updateCompanySettings,
    exportContent,
    importContent,
    resetToDefaults
  } = useContentStore();

  // Local state for editing
  const [heroForm, setHeroForm] = useState(heroContent);
  const [settingsForm, setSettingsForm] = useState(companySettings);

  useEffect(() => {
    const loggedIn = localStorage.getItem('admin_logged_in') === 'true';
    if (!loggedIn) {
      router.push('/admin/login');
    } else {
      setIsLoggedIn(true);
      setVisitorCount(getVisitorCount());
      loadDashboardData();
    }
    setLoading(false);
  }, [router]);

  // Update forms when content changes
  useEffect(() => {
    setHeroForm(heroContent);
  }, [heroContent]);

  useEffect(() => {
    setSettingsForm(companySettings);
  }, [companySettings]);

  const loadDashboardData = async () => {
    try {
      // Simulate loading contacts (in real app, this would be from API)
      setContacts([
        {
          _id: '1',
          name: 'John Doe',
          email: 'john@example.com',
          message: 'Interested in landscape design services',
          status: 'new',
          createdAt: new Date().toISOString()
        },
        {
          _id: '2',
          name: 'Jane Smith',
          email: 'jane@example.com',
          message: 'Need consultation for building permits',
          status: 'contacted',
          createdAt: new Date().toISOString()
        }
      ]);
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_logged_in');
    router.push('/admin/login');
  };

  const saveHeroContent = async () => {
    setIsSaving(true);
    try {
      updateHeroContent(heroForm);
      alert('Hero content updated successfully! Changes are now live on the website.');
    } catch (error) {
      alert('Error saving hero content');
    } finally {
      setIsSaving(false);
    }
  };

  const saveCompanySettings = async () => {
    setIsSaving(true);
    try {
      updateCompanySettings(settingsForm);
      alert('Company settings updated successfully! Changes are now live on the website.');
    } catch (error) {
      alert('Error saving company settings');
    } finally {
      setIsSaving(false);
    }
  };

  const handleAddTeamMember = () => {
    if (newMember.name && newMember.position) {
      const member = {
        ...newMember,
        expertise: typeof newMember.expertise === 'string' 
          ? newMember.expertise.split(',').map(s => s.trim()).filter(s => s !== '')
          : newMember.expertise
      };
      addTeamMember(member);
      setNewMember({ name: '', position: '', image: '', bio: '', expertise: [] });
      alert('Team member added successfully! Changes are now live on the website.');
    }
  };

  const handleUpdateTeamMember = (id, updatedMember) => {
    updateTeamMember(id, updatedMember);
    setEditingMember(null);
    alert('Team member updated successfully! Changes are now live on the website.');
  };

  const handleDeleteTeamMember = (id) => {
    if (confirm('Are you sure you want to delete this team member?')) {
      deleteTeamMember(id);
      alert('Team member deleted successfully! Changes are now live on the website.');
    }
  };

  const handleExportContent = () => {
    const content = exportContent();
    const blob = new Blob([content], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `reswara-content-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleImportContent = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          importContent(e.target.result);
          alert('Content imported successfully! Changes are now live on the website.');
        } catch (error) {
          alert('Error importing content: ' + error.message);
        }
      };
      reader.readAsText(file);
    }
  };

  const handleResetContent = () => {
    if (confirm('Are you sure you want to reset all content to defaults? This cannot be undone.')) {
      resetToDefaults();
      alert('Content reset to defaults! Changes are now live on the website.');
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (!isLoggedIn) {
    return null;
  }

  const stats = [
    {
      title: 'Total Visitors',
      value: visitorCount.toString(),
      icon: Eye,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Team Members',
      value: teamMembers.length.toString(),
      icon: Users,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-100'
    },
    {
      title: 'Contact Inquiries',
      value: contacts.length.toString(),
      icon: Calendar,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      title: 'Live Updates',
      value: 'Active',
      icon: Globe,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="container-responsive">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Settings className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-slate-900">Admin Dashboard</h1>
                <p className="text-sm text-slate-600">CV Reswara Praptama - Live CMS</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-green-100 text-green-700 border-green-200">
                🟢 Live Updates Active
              </Badge>
              <Button onClick={handleLogout} variant="outline" className="flex items-center space-x-2">
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container-responsive py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="card-primary">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="hero">Hero Content</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
            <TabsTrigger value="backup">Backup</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="card-primary">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5" />
                    <span>Content Management</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Hero Content</span>
                      <Badge className="bg-green-100 text-green-700">Live</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Team Members</span>
                      <span className="font-semibold">{teamMembers.length} Active</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Company Settings</span>
                      <Badge className="bg-green-100 text-green-700">Synced</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-primary">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5" />
                    <span>Recent Activity</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-sm text-slate-600">Content updates are live</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-slate-600">Real-time sync active</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-slate-600">Dashboard connected</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="hero" className="space-y-6">
            <Card className="card-primary">
              <CardHeader>
                <CardTitle>Hero Section Content</CardTitle>
                <CardDescription>
                  Changes here will immediately update the homepage hero section
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Hero Title</label>
                      <Input 
                        value={heroForm.title}
                        onChange={(e) => setHeroForm({...heroForm, title: e.target.value})}
                        placeholder="Enter hero title" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Hero Description</label>
                      <Textarea 
                        value={heroForm.description}
                        onChange={(e) => setHeroForm({...heroForm, description: e.target.value})}
                        placeholder="Enter hero description" 
                        rows={4} 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Hero Image URL</label>
                      <Input 
                        value={heroForm.image}
                        onChange={(e) => setHeroForm({...heroForm, image: e.target.value})}
                        placeholder="Enter image URL" 
                      />
                    </div>
                    <Button 
                      onClick={saveHeroContent} 
                      className="btn-primary w-full"
                      disabled={isSaving}
                    >
                      <Save className="w-4 h-4 mr-2" />
                      {isSaving ? 'Saving...' : 'Save & Update Live Site'}
                    </Button>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Live Preview</label>
                    <div className="border rounded-lg p-4 bg-slate-50">
                      <img 
                        src={heroForm.image} 
                        alt="Hero preview" 
                        className="w-full h-32 object-cover rounded-lg mb-4"
                        onError={(e) => {
                          e.target.src = 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800';
                        }}
                      />
                      <h3 className="text-lg font-bold mb-2">{heroForm.title}</h3>
                      <p className="text-sm text-slate-600">{heroForm.description}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="team" className="space-y-6">
            <Card className="card-primary">
              <CardHeader>
                <CardTitle>Team Management</CardTitle>
                <CardDescription>
                  Add, edit, or remove team members. Changes update the About page immediately.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Add New Team Member */}
                <div className="mb-8 p-4 border rounded-lg bg-slate-50">
                  <h3 className="text-lg font-semibold mb-4">Add New Team Member</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Name"
                      value={newMember.name}
                      onChange={(e) => setNewMember({...newMember, name: e.target.value})}
                    />
                    <Input
                      placeholder="Position"
                      value={newMember.position}
                      onChange={(e) => setNewMember({...newMember, position: e.target.value})}
                    />
                    <Input
                      placeholder="Image URL"
                      value={newMember.image}
                      onChange={(e) => setNewMember({...newMember, image: e.target.value})}
                    />
                    <Input
                      placeholder="Expertise (comma separated)"
                      value={Array.isArray(newMember.expertise) ? newMember.expertise.join(', ') : newMember.expertise}
                      onChange={(e) => setNewMember({...newMember, expertise: e.target.value.split(',').map(s => s.trim())})}
                    />
                  </div>
                  <Textarea
                    placeholder="Bio"
                    value={newMember.bio}
                    onChange={(e) => setNewMember({...newMember, bio: e.target.value})}
                    className="mt-4"
                    rows={3}
                  />
                  <Button onClick={handleAddTeamMember} className="mt-4 btn-primary">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Team Member
                  </Button>
                </div>

                {/* Team Members List */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Current Team Members</h3>
                  {teamMembers.map((member) => (
                    <div key={member.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-16 h-16 rounded-full object-cover"
                        onError={(e) => {
                          e.target.src = 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400';
                        }}
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold">{member.name}</h3>
                        <p className="text-sm text-slate-600">{member.position}</p>
                        <p className="text-xs text-slate-500">{member.expertise.join(', ')}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => setEditingMember(member)}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="destructive"
                          onClick={() => handleDeleteTeamMember(member.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card className="card-primary">
              <CardHeader>
                <CardTitle>Company Settings</CardTitle>
                <CardDescription>
                  Update company information displayed across the website
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Company Name</label>
                    <Input 
                      value={settingsForm.name}
                      onChange={(e) => setSettingsForm({...settingsForm, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Tagline</label>
                    <Input 
                      value={settingsForm.tagline}
                      onChange={(e) => setSettingsForm({...settingsForm, tagline: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone</label>
                    <Input 
                      value={settingsForm.phone}
                      onChange={(e) => setSettingsForm({...settingsForm, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input 
                      value={settingsForm.email}
                      onChange={(e) => setSettingsForm({...settingsForm, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">WhatsApp</label>
                    <Input 
                      value={settingsForm.whatsapp}
                      onChange={(e) => setSettingsForm({...settingsForm, whatsapp: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Description</label>
                  <Textarea 
                    value={settingsForm.description}
                    onChange={(e) => setSettingsForm({...settingsForm, description: e.target.value})}
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Address</label>
                  <Textarea 
                    value={settingsForm.address}
                    onChange={(e) => setSettingsForm({...settingsForm, address: e.target.value})}
                    rows={2}
                  />
                </div>
                <Button 
                  onClick={saveCompanySettings} 
                  className="btn-primary w-full"
                  disabled={isSaving}
                >
                  <Save className="w-4 h-4 mr-2" />
                  {isSaving ? 'Saving...' : 'Save & Update Live Site'}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="backup" className="space-y-6">
            <Card className="card-primary">
              <CardHeader>
                <CardTitle>Content Backup & Management</CardTitle>
                <CardDescription>
                  Export, import, or reset website content
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button onClick={handleExportContent} className="btn-primary">
                    <Download className="w-4 h-4 mr-2" />
                    Export Content
                  </Button>
                  
                  <div>
                    <input
                      type="file"
                      accept=".json"
                      onChange={handleImportContent}
                      style={{ display: 'none' }}
                      id="import-file"
                    />
                    <Button 
                      onClick={() => document.getElementById('import-file').click()}
                      className="btn-secondary w-full"
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Import Content
                    </Button>
                  </div>
                  
                  <Button 
                    onClick={handleResetContent} 
                    variant="destructive"
                    className="w-full"
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Reset to Defaults
                  </Button>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">How it works:</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• <strong>Export:</strong> Download all current content as a JSON file</li>
                    <li>• <strong>Import:</strong> Upload a previously exported JSON file to restore content</li>
                    <li>• <strong>Reset:</strong> Restore all content to original default values</li>
                    <li>• All changes are applied immediately to the live website</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Edit Team Member Modal */}
      {editingMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">Edit Team Member</h3>
            <div className="space-y-4">
              <Input
                placeholder="Name"
                value={editingMember.name}
                onChange={(e) => setEditingMember({...editingMember, name: e.target.value})}
              />
              <Input
                placeholder="Position"
                value={editingMember.position}
                onChange={(e) => setEditingMember({...editingMember, position: e.target.value})}
              />
              <Input
                placeholder="Image URL"
                value={editingMember.image}
                onChange={(e) => setEditingMember({...editingMember, image: e.target.value})}
              />
              <Textarea
                placeholder="Bio"
                value={editingMember.bio}
                onChange={(e) => setEditingMember({...editingMember, bio: e.target.value})}
                rows={3}
              />
              <Input
                placeholder="Expertise (comma separated)"
                value={editingMember.expertise.join(', ')}
                onChange={(e) => setEditingMember({...editingMember, expertise: e.target.value.split(',').map(s => s.trim())})}
              />
            </div>
            <div className="flex space-x-2 mt-6">
              <Button 
                onClick={() => handleUpdateTeamMember(editingMember.id, editingMember)}
                className="btn-primary flex-1"
              >
                Save Changes
              </Button>
              <Button 
                onClick={() => setEditingMember(null)}
                variant="outline"
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;