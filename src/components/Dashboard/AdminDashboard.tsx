import React, { useState } from 'react';
import { 
  Users, 
  Briefcase, 
  FileText, 
  TrendingUp,
  UserCheck,
  Building,
  Calendar,
  DollarSign,
  Activity,
  AlertTriangle,
  CheckCircle,
  XCircle
} from 'lucide-react';
import { mockJobs, mockApplications } from '../../data/mockData';
import { Link } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { icon: Users, label: 'Total Users', value: '12,453', change: '+8%', color: 'blue' },
    { icon: Briefcase, label: 'Active Jobs', value: '2,156', change: '+12%', color: 'green' },
    { icon: FileText, label: 'Applications', value: '8,945', change: '+5%', color: 'purple' },
    { icon: DollarSign, label: 'Revenue', value: '$24,850', change: '+15%', color: 'yellow' }
  ];

  const recentActivities = [
    { type: 'user_register', message: 'New user registered: John Doe', time: '2 min ago', status: 'success' },
    { type: 'job_posted', message: 'New job posted: Senior Developer at TechCorp', time: '5 min ago', status: 'info' },
    { type: 'application', message: '15 new applications received', time: '10 min ago', status: 'success' },
    { type: 'payment', message: 'Payment failed for employer subscription', time: '15 min ago', status: 'error' },
    { type: 'report', message: 'Job posting reported for review', time: '30 min ago', status: 'warning' }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'user_register':
        return <UserCheck className="h-4 w-4" />;
      case 'job_posted':
        return <Briefcase className="h-4 w-4" />;
      case 'application':
        return <FileText className="h-4 w-4" />;
      case 'payment':
        return <DollarSign className="h-4 w-4" />;
      case 'report':
        return <AlertTriangle className="h-4 w-4" />;
      default:
        return <Activity className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'text-green-600 bg-green-100';
      case 'error':
        return 'text-red-600 bg-red-100';
      case 'warning':
        return 'text-yellow-600 bg-yellow-100';
      case 'info':
        return 'text-blue-600 bg-blue-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your job board platform</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change} from last month
                  </p>
                </div>
                <div className={`p-3 rounded-lg bg-${stat.color}-100`}>
                  <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
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
                { id: 'users', label: 'Users', icon: Users },
                { id: 'jobs', label: 'Jobs', icon: Briefcase },
                { id: 'reports', label: 'Reports', icon: FileText }
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
              <div className="space-y-8">
                {/* Quick Actions */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Link
                      to="/admin/users"
                      className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left block"
                    >
                      <Users className="h-6 w-6 text-blue-600 mb-2" />
                      <h4 className="font-medium text-gray-900">Manage Users</h4>
                      <p className="text-sm text-gray-600">View and moderate users</p>
                    </Link>
                    <Link
                      to="/admin/jobs"
                      className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left block"
                    >
                      <Briefcase className="h-6 w-6 text-blue-600 mb-2" />
                      <h4 className="font-medium text-gray-900">Review Jobs</h4>
                      <p className="text-sm text-gray-600">Approve job postings</p>
                    </Link>
                    <Link
                      to="/admin/subscriptions"
                      className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left block"
                    >
                      <DollarSign className="h-6 w-6 text-blue-600 mb-2" />
                      <h4 className="font-medium text-gray-900">Subscriptions</h4>
                      <p className="text-sm text-gray-600">Manage billing</p>
                    </Link>
                  </div>
                </div>

                {/* Recent Activity */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className={`p-2 rounded-full ${getStatusColor(activity.status)}`}>
                          {getActivityIcon(activity.type)}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Platform Health */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Platform Health</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                        <span className="font-medium text-green-900">System Online</span>
                      </div>
                      <p className="text-sm text-green-700 mt-1">All services operational</p>
                    </div>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <div className="flex items-center">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
                        <span className="font-medium text-yellow-900">Pending Reviews</span>
                      </div>
                      <p className="text-sm text-yellow-700 mt-1">12 jobs need approval</p>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-center">
                        <Activity className="h-5 w-5 text-blue-600 mr-2" />
                        <span className="font-medium text-blue-900">Server Load</span>
                      </div>
                      <p className="text-sm text-blue-700 mt-1">Normal (45% CPU)</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'users' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">User Management</h3>
                  <Link
                    to="/admin/users"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View All Users
                  </Link>
                </div>
                <div className="bg-gray-50 rounded-lg p-8 text-center">
                  <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">User management interface</p>
                  <p className="text-sm text-gray-500">Click "View All Users" to manage users</p>
                </div>
              </div>
            )}

            {activeTab === 'jobs' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Job Management</h3>
                  <Link
                    to="/admin/jobs"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Review Jobs
                  </Link>
                </div>
                <div className="bg-gray-50 rounded-lg p-8 text-center">
                  <Briefcase className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Job moderation interface</p>
                  <p className="text-sm text-gray-500">Click "Review Jobs" to moderate job postings</p>
                </div>
              </div>
            )}

            {activeTab === 'reports' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">System Reports</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-medium text-gray-900 mb-4">User Growth</h4>
                    <div className="text-3xl font-bold text-blue-600 mb-2">+23%</div>
                    <p className="text-sm text-gray-600">This month vs last month</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-medium text-gray-900 mb-4">Jobs Posted</h4>
                    <div className="text-3xl font-bold text-green-600 mb-2">+31%</div>
                    <p className="text-sm text-gray-600">This month vs last month</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-medium text-gray-900 mb-4">Applications</h4>
                    <div className="text-3xl font-bold text-purple-600 mb-2">+18%</div>
                    <p className="text-sm text-gray-600">This month vs last month</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="font-medium text-gray-900 mb-4">Revenue</h4>
                    <div className="text-3xl font-bold text-yellow-600 mb-2">+15%</div>
                    <p className="text-sm text-gray-600">This month vs last month</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;