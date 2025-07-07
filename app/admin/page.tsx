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
  Save
} from 'lucide-react';
import { getVisitorCount, teamMembers, portfolioItems } from '@/lib/data';

const AdminDashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [visitorCount, setVisitorCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const router = useRouter();

  // Content Management States
  const [heroContent, setHeroContent] = useState({
    title: 'Transform Your Space with Professional Excellence',
    description: 'Leading landscape development and building consulting services. Creating sustainable, beautiful, and functional environments for over 15 years.',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
  });

  const [teamMembersState, setTeamMembersState] = useState(teamMembers);
  const [editingMember, setEditingMember] = useState(null);
  const [newMember, setNewMember] = useState({
    name: '',
    position: '',
    image: '',
    bio: '',
    expertise: []
  });

  const [contacts, setContacts] = useState([]);
  const [portfolios, setPortfolios] = useState(portfolioItems);

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

  const loadDashboardData = async () => {
    try {
      // Load contacts from API
      const contactResponse = await fetch('/api/contact');
      if (contactResponse.ok) {
        const contactData = await contactResponse.json();
        setContacts(contactData);
      }

      // Load portfolios from API
      const portfolioResponse = await fetch('/api/portfolio');
      if (portfolioResponse.ok) {
        const portfolioData = await portfolioResponse.json();
        setPortfolios(portfolioData);
      }
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_logged_in');
    router.push('/admin/login');
  };

  const saveHeroContent = () => {
    // Save to localStorage for demo purposes
    localStorage.setItem('heroContent', JSON.stringify(heroContent));
    alert('Hero content saved successfully!');
  };

  const addTeamMember = () => {
    if (newMember.name && newMember.position) {
      const member = {
        ...newMember,
        id: Date.now().toString(),
        expertise: newMember.expertise.filter(skill => skill.trim() !== '')
      };
      setTeamMembersState([...teamMembersState, member]);
      setNewMember({ name: '', position: '', image: '', bio: '', expertise: [] });
      alert('Team member added successfully!');
    }
  };

  const updateTeamMember = (id, updatedMember) => {
    setTeamMembersState(teamMembersState.map(member => 
      member.id === id ? { ...member, ...updatedMember } : member
    ));
    setEditingMember(null);
    alert('Team member updated successfully!');
  };

  const deleteTeamMember = (id) => {
    if (confirm('Are you sure you want to delete this team member?')) {
      setTeamMembersState(teamMembersState.filter(member => member.id !== id));
      alert('Team member deleted successfully!');
    }
  };

  const updateContactStatus = async (id, status) => {
    try {
      const response = await fetch(`/api/contact/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });
      
      if (response.ok) {
        setContacts(contacts.map(contact => 
          contact._id === id ? { ...contact, status } : contact
        ));
        alert('Contact status updated successfully!');
      }
    } catch (error) {
      console.error('Error updating contact status:', error);
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
      value: teamMembersState.length.toString(),
      icon: Users,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-100'
    },
    {
      title: 'Portfolio Projects',
      value: portfolios.length.toString(),
      icon: Image,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      title: 'Contact Inquiries',
      value: contacts.length.toString(),
      icon: Calendar,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
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
                <p className="text-sm text-slate-600">CV Reswara Praptama</p>
              </div>
            </div>
            <Button onClick={handleLogout} variant="outline" className="flex items-center space-x-2">
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </Button>
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
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
            <TabsTrigger value="contacts">Contacts</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="card-primary">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5" />
                    <span>Website Analytics</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Total Page Views</span>
                      <span className="font-semibold">{visitorCount}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Unique Visitors</span>
                      <span className="font-semibold">{Math.round(visitorCount * 0.7)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Bounce Rate</span>
                      <span className="font-semibold">32%</span>
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
                      <span className="text-sm text-slate-600">New visitor from Jakarta</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-slate-600">Portfolio page viewed</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-slate-600">Contact form submitted</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <Card className="card-primary">
              <CardHeader>
                <CardTitle>Hero Section Content</CardTitle>
                <CardDescription>
                  Manage the main hero section content on the homepage
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Hero Title</label>
                  <Input 
                    value={heroContent.title}
                    onChange={(e) => setHeroContent({...heroContent, title: e.target.value})}
                    placeholder="Enter hero title" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Hero Description</label>
                  <Textarea 
                    value={heroContent.description}
                    onChange={(e) => setHeroContent({...heroContent, description: e.target.value})}
                    placeholder="Enter hero description" 
                    rows={3} 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Hero Image URL</label>
                  <Input 
                    value={heroContent.image}
                    onChange={(e) => setHeroContent({...heroContent, image: e.target.value})}
                    placeholder="Enter image URL" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Preview</label>
                  <div className="border rounded-lg p-4 bg-slate-50">
                    <img 
                      src={heroContent.image} 
                      alt="Hero preview" 
                      className="w-full h-32 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-lg font-bold mb-2">{heroContent.title}</h3>
                    <p className="text-sm text-slate-600">{heroContent.description}</p>
                  </div>
                </div>
                <Button onClick={saveHeroContent} className="btn-primary">
                  <Save className="w-4 h-4 mr-2" />
                  Save Hero Content
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="team" className="space-y-6">
            <Card className="card-primary">
              <CardHeader>
                <CardTitle>Team Management</CardTitle>
                <CardDescription>
                  Add, edit, or remove team members
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
                      value={newMember.expertise.join(', ')}
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
                  <Button onClick={addTeamMember} className="mt-4 btn-primary">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Team Member
                  </Button>
                </div>

                {/* Team Members List */}
                <div className="space-y-4">
                  {teamMembersState.map((member) => (
                    <div key={member.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-16 h-16 rounded-full object-cover"
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
                          onClick={() => deleteTeamMember(member.id)}
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

          <TabsContent value="contacts" className="space-y-6">
            <Card className="card-primary">
              <CardHeader>
                <CardTitle>Contact Management</CardTitle>
                <CardDescription>
                  Manage contact form submissions and inquiries
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contacts.length === 0 ? (
                    <p className="text-slate-500 text-center py-8">No contacts found</p>
                  ) : (
                    contacts.map((contact) => (
                      <div key={contact._id} className="border rounded-lg p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-semibold">{contact.name}</h3>
                            <p className="text-sm text-slate-600">{contact.email}</p>
                            <p className="text-sm text-slate-500 mt-2">{contact.message}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge className={`status-${contact.status}`}>
                              {contact.status}
                            </Badge>
                            <select
                              value={contact.status}
                              onChange={(e) => updateContactStatus(contact._id, e.target.value)}
                              className="text-xs border rounded px-2 py-1"
                            >
                              <option value="new">New</option>
                              <option value="contacted">Contacted</option>
                              <option value="in-progress">In Progress</option>
                              <option value="completed">Completed</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card className="card-primary">
              <CardHeader>
                <CardTitle>Analytics Overview</CardTitle>
                <CardDescription>
                  Website performance and visitor analytics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{visitorCount}</div>
                    <div className="text-sm text-slate-600">Total Visitors</div>
                  </div>
                  <div className="text-center p-4 bg-emerald-50 rounded-lg">
                    <div className="text-2xl font-bold text-emerald-600">{Math.round(visitorCount * 0.7)}</div>
                    <div className="text-sm text-slate-600">Unique Visitors</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">{contacts.length}</div>
                    <div className="text-sm text-slate-600">Contact Forms</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">32%</div>
                    <div className="text-sm text-slate-600">Bounce Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;