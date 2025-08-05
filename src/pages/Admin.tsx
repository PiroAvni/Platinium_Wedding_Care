import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Settings,
  Image,
  MessageSquare,
  BarChart3,
  Plus,
  Edit,
  Trash2,
  Eye,
} from 'lucide-react';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const tabs = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <BarChart3 className='w-5 h-5' />,
    },
    { id: 'content', label: 'Content', icon: <Edit className='w-5 h-5' /> },
    { id: 'gallery', label: 'Gallery', icon: <Image className='w-5 h-5' /> },
    {
      id: 'quotes',
      label: 'Quote Requests',
      icon: <MessageSquare className='w-5 h-5' />,
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: <Settings className='w-5 h-5' />,
    },
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple demo authentication - in production, use proper authentication
    if (
      credentials.username === 'admin' &&
      credentials.password === 'pristine123'
    ) {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials. Demo: admin / pristine123');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className='min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className='max-w-md w-full space-y-8'
        >
          <div>
            <h2 className='mt-6 text-center text-3xl font-serif font-bold text-gray-900'>
              Admin Login
            </h2>
            <p className='mt-2 text-center text-sm text-gray-600'>
              Access the content management system
            </p>
          </div>
          <form className='mt-8 space-y-6' onSubmit={handleLogin}>
            <div className='space-y-4'>
              <input
                type='text'
                placeholder='Username'
                value={credentials.username}
                onChange={(e) =>
                  setCredentials({ ...credentials, username: e.target.value })
                }
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent'
                required
              />
              <input
                type='password'
                placeholder='Password'
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent'
                required
              />
            </div>
            <button
              type='submit'
              className='w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors'
            >
              Sign In
            </button>
            <p className='text-xs text-gray-500 text-center'>
              Demo credentials: admin / pristine123
            </p>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gray-50 pt-16'>
      <div className='flex'>
        {/* Sidebar */}
        <div className='w-64 bg-white shadow-sm min-h-screen'>
          <div className='p-6'>
            <h2 className='text-xl font-serif font-bold text-gray-900'>
              Admin Panel
            </h2>
          </div>
          <nav className='mt-6'>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center px-6 py-3 text-left text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {tab.icon}
                <span className='ml-3'>{tab.label}</span>
              </button>
            ))}
          </nav>
          <div className='absolute bottom-6 left-6'>
            <button
              onClick={() => setIsAuthenticated(false)}
              className='text-sm text-gray-600 hover:text-gray-900'
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className='flex-1 p-8'>
          {activeTab === 'dashboard' && <DashboardContent />}
          {activeTab === 'content' && <ContentManagement />}
          {activeTab === 'gallery' && <GalleryManagement />}
          {activeTab === 'quotes' && <QuoteRequests />}
          {activeTab === 'settings' && <SiteSettings />}
        </div>
      </div>
    </div>
  );
};

const DashboardContent = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    className='space-y-6'
  >
    <h1 className='text-3xl font-serif font-bold text-gray-900'>Dashboard</h1>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
      {[
        {
          title: 'Quote Requests',
          value: '12',
          change: '+2 today',
          color: 'blue',
        },
        {
          title: 'Active Orders',
          value: '8',
          change: '+1 today',
          color: 'green',
        },
        {
          title: 'Completed Orders',
          value: '45',
          change: '+3 this week',
          color: 'purple',
        },
        {
          title: 'Revenue',
          value: '£2,340',
          change: '+12% this month',
          color: 'orange',
        },
      ].map((stat, index) => (
        <div key={index} className='bg-white p-6 rounded-lg shadow-sm'>
          <h3 className='text-sm font-medium text-gray-500'>{stat.title}</h3>
          <p className='text-2xl font-bold text-gray-900 mt-2'>{stat.value}</p>
          <p className='text-xs text-gray-600 mt-1'>{stat.change}</p>
        </div>
      ))}
    </div>

    <div className='bg-white p-6 rounded-lg shadow-sm'>
      <h2 className='text-lg font-semibold text-gray-900 mb-4'>
        Recent Activity
      </h2>
      <div className='space-y-3'>
        {[
          'New quote request from Sarah Johnson',
          'Order completed for wedding dress cleaning',
          'WhatsApp inquiry about groom suit care',
          'Payment received for express service',
        ].map((activity, index) => (
          <div key={index} className='flex items-center text-sm text-gray-600'>
            <div className='w-2 h-2 bg-gray-400 rounded-full mr-3'></div>
            {activity}
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

const ContentManagement = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    className='space-y-6'
  >
    <div className='flex justify-between items-center'>
      <h1 className='text-3xl font-serif font-bold text-gray-900'>
        Content Management
      </h1>
      <button className='bg-gray-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center space-x-2'>
        <Plus className='w-4 h-4' />
        <span>Add Content</span>
      </button>
    </div>

    <div className='bg-white rounded-lg shadow-sm overflow-hidden'>
      <table className='w-full'>
        <thead className='bg-gray-50'>
          <tr>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Section
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Title
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Status
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Actions
            </th>
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {[
            { section: 'Home', title: 'Hero Section', status: 'Published' },
            {
              section: 'Services',
              title: 'Wedding Dress Cleaning',
              status: 'Published',
            },
            { section: 'About', title: 'Company Story', status: 'Draft' },
          ].map((item, index) => (
            <tr key={index}>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                {item.section}
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                {item.title}
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
                <span
                  className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    item.status === 'Published'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {item.status}
                </span>
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2'>
                <button className='text-gray-600 hover:text-gray-900'>
                  <Eye className='w-4 h-4' />
                </button>
                <button className='text-gray-600 hover:text-gray-900'>
                  <Edit className='w-4 h-4' />
                </button>
                <button className='text-red-600 hover:text-red-900'>
                  <Trash2 className='w-4 h-4' />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </motion.div>
);

const GalleryManagement = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    className='space-y-6'
  >
    <div className='flex justify-between items-center'>
      <h1 className='text-3xl font-serif font-bold text-gray-900'>
        Gallery Management
      </h1>
      <button className='bg-gray-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center space-x-2'>
        <Plus className='w-4 h-4' />
        <span>Add Images</span>
      </button>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className='bg-white rounded-lg shadow-sm overflow-hidden'
        >
          <div className='aspect-square bg-gray-200 relative'>
            <div className='absolute inset-0 flex items-center justify-center text-gray-500'>
              Image {index + 1}
            </div>
          </div>
          <div className='p-4'>
            <h3 className='font-medium text-gray-900'>
              Wedding Dress {index + 1}
            </h3>
            <p className='text-sm text-gray-600'>Category: Wedding Dresses</p>
            <div className='flex justify-between items-center mt-2'>
              <span className='text-xs text-green-600'>Published</span>
              <div className='space-x-1'>
                <button className='text-gray-600 hover:text-gray-900'>
                  <Edit className='w-4 h-4' />
                </button>
                <button className='text-red-600 hover:text-red-900'>
                  <Trash2 className='w-4 h-4' />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

const QuoteRequests = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    className='space-y-6'
  >
    <h1 className='text-3xl font-serif font-bold text-gray-900'>
      Quote Requests
    </h1>

    <div className='bg-white rounded-lg shadow-sm overflow-hidden'>
      <table className='w-full'>
        <thead className='bg-gray-50'>
          <tr>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Customer
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Service
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Urgency
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Date
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Status
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Actions
            </th>
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {[
            {
              customer: 'Sarah Johnson',
              service: 'Wedding Dress',
              urgency: 'Standard',
              date: '2024-08-04',
              status: 'New',
            },
            {
              customer: 'Mike Smith',
              service: 'Groom Suit',
              urgency: 'Express',
              date: '2024-08-03',
              status: 'Quoted',
            },
            {
              customer: 'Emma Davis',
              service: 'Multiple Items',
              urgency: 'Same Day',
              date: '2024-08-03',
              status: 'In Progress',
            },
          ].map((request, index) => (
            <tr key={index}>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                {request.customer}
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                {request.service}
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                {request.urgency}
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                {request.date}
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
                <span
                  className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    request.status === 'New'
                      ? 'bg-blue-100 text-blue-800'
                      : request.status === 'Quoted'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-green-100 text-green-800'
                  }`}
                >
                  {request.status}
                </span>
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2'>
                <button className='text-blue-600 hover:text-blue-900'>
                  View
                </button>
                <button className='text-green-600 hover:text-green-900'>
                  Quote
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </motion.div>
);

const SiteSettings = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    className='space-y-6'
  >
    <h1 className='text-3xl font-serif font-bold text-gray-900'>
      Site Settings
    </h1>

    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
      <div className='bg-white p-6 rounded-lg shadow-sm'>
        <h2 className='text-lg font-semibold text-gray-900 mb-4'>
          Business Information
        </h2>
        <form className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Business Name
            </label>
            <input
              type='text'
              defaultValue='Pristine Wedding Care'
              className='w-full px-3 py-2 border border-gray-300 rounded-lg'
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Phone Number
            </label>
            <input
              type='tel'
              defaultValue='+44 7123 456 789'
              className='w-full px-3 py-2 border border-gray-300 rounded-lg'
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Email
            </label>
            <input
              type='email'
              defaultValue='info@platinumweddingcare.co.uk'
              className='w-full px-3 py-2 border border-gray-300 rounded-lg'
            />
          </div>
          <button
            type='submit'
            className='bg-gray-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors'
          >
            Save Changes
          </button>
        </form>
      </div>

      <div className='bg-white p-6 rounded-lg shadow-sm'>
        <h2 className='text-lg font-semibold text-gray-900 mb-4'>
          WhatsApp Integration
        </h2>
        <form className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              WhatsApp Number
            </label>
            <input
              type='tel'
              defaultValue='+44 7123 456 789'
              className='w-full px-3 py-2 border border-gray-300 rounded-lg'
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Default Message
            </label>
            <textarea
              rows={3}
              defaultValue='Hello! I would like to inquire about your wedding dress cleaning services.'
              className='w-full px-3 py-2 border border-gray-300 rounded-lg resize-none'
            />
          </div>
          <button
            type='submit'
            className='bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors'
          >
            Update WhatsApp Settings
          </button>
        </form>
      </div>
    </div>
  </motion.div>
);

export default Admin;
