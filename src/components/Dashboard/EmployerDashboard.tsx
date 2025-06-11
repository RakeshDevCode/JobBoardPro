import React, { useState } from 'react';
import { 
  Plus, 
  Users, 
  Briefcase, 
  Eye, 
  Calendar,
  TrendingUp,
  FileText,
  MessageCircle,
  Filter,
  Download,
  Star,
  Clock,
  MapPin
} from 'lucide-react';
import { mockJobs, mockApplications } from '../../data/mockData';

const EmployerDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { icon: Briefcase, label: 'Active Jobs', value: '8', color: 'blue' },
    { icon: Users, label: 'Total Applicants', value: '124', color: 'green' },
    { icon: Eye, label: 'Profile Views', value: '456', color: 'purple' },
    { icon: Calendar, label: 'Interviews', value: '12', color: 'yellow' }
  ];

  const myJobs = mockJobs.slice(0, 3);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'paused':
        return 'bg-yellow-100 text-yellow-800';
      case 'closed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Employer Dashboard</h1>
            <p className="text-gray-600">Manage your job postings and candidates</p>
          </div>
          <button className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="h-5 w-5" />
            <span>Post New Job</span>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center">
                <div className={`p-3 rounded-lg bg-${stat.color}-100`}>
                  <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'overview', label: 'Overview', icon: TrendingUp },
                { id: 'jobs', label: 'My Jobs', icon: Briefcase },
                { id: 'candidates', label: 'Candidates', icon: Users },
                { id: 'interviews', label: 'Interviews', icon: Calendar }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Quick Actions */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                      <Plus className="h-6 w-6 text-blue-600 mb-2" />
                      <h4 className="font-medium text-gray-900">Post New Job</h4>
                      <p className="text-sm text-gray-600">Create a new job posting</p>
                    </button>
                    <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                      <Users className="h-6 w-6 text-blue-600 mb-2" />
                      <h4 className="font-medium text-gray-900">Review Candidates</h4>
                      <p className="text-sm text-gray-600">Check new applications</p>
                    </button>
                    <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                      <Calendar className="h-6 w-6 text-blue-600 mb-2" />
                      <h4 className="font-medium text-gray-900">Schedule Interview</h4>
                      <p className="text-sm text-gray-600">Set up candidate meetings</p>
                    </button>
                  </div>
                </div>

                {/* Recent Activity */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                      <Users className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">New application received</p>
                        <p className="text-sm text-gray-600">Senior Frontend Developer position</p>
                      </div>
                      <span className="text-xs text-gray-500">1 hour ago</span>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                      <Eye className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Job post viewed</p>
                        <p className="text-sm text-gray-600">Product Manager - 12 views today</p>
                      </div>
                      <span className="text-xs text-gray-500">3 hours ago</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'jobs' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">My Job Postings</h3>
                  <div className="flex space-x-3">
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-700">
                      <Filter className="h-4 w-4" />
                      <span>Filter</span>
                    </button>
                    <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                      <Download className="h-4 w-4" />
                      <span>Export</span>
                    </button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {myJobs.map((job) => (
                    <div key={job.id} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            {job.featured && (
                              <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            )}
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(job.status)}`}>
                              {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                            </span>
                          </div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-1">
                            {job.title}
                          </h4>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>Posted {Math.floor((new Date().getTime() - job.createdAt.getTime()) / (1000 * 60 * 60 * 24))} days ago</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-gray-900">{job.applicants}</p>
                          <p className="text-sm text-gray-600">Applicants</p>
                        </div>
                      </div>
                      
                      <div className="flex space-x-3">
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                          View Applications
                        </button>
                        <button className="text-gray-600 hover:text-gray-700 text-sm font-medium">
                          Edit Job
                        </button>
                        <button className="text-gray-600 hover:text-gray-700 text-sm font-medium">
                          {job.status === 'active' ? 'Pause' : 'Activate'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'candidates' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">Candidate Applications</h3>
                  <div className="flex space-x-3">
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-700">
                      <Filter className="h-4 w-4" />
                      <span>Filter by Status</span>
                    </button>
                    <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                      <Download className="h-4 w-4" />
                      <span>Export to CSV</span>
                    </button>
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Candidate
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Position
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Applied
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {mockApplications.map((application) => {
                        const job = mockJobs.find(j => j.id === application.jobId);
                        return (
                          <tr key={application.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
                                  <span className="text-white font-medium">JD</span>
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">John Doe</div>
                                  <div className="text-sm text-gray-500">john.doe@email.com</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{job?.title}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                application.status === 'shortlisted' 
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {application.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {application.appliedAt.toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                              <button className="text-green-600 hover:text-green-900 mr-3">Accept</button>
                              <button className="text-red-600 hover:text-red-900">Reject</button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'interviews' && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Interview Schedule</h3>
                <div className="text-center py-12">
                  <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">No interviews scheduled</p>
                  <p className="text-sm text-gray-500">Schedule interviews with your candidates</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard;