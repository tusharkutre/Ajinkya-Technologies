import React from 'react';
import { FaUsers, FaShoppingCart, FaChartLine, FaMoneyBillWave } from 'react-icons/fa';

const Dashboard = () => {
  // Sample data - in a real app, this would come from your backend
  const stats = [
    { title: 'Total Users', value: '2,543', icon: <FaUsers className="text-blue-500" />, change: '+12%' },
    { title: 'Total Sales', value: '$12,234', icon: <FaShoppingCart className="text-green-500" />, change: '+8%' },
    { title: 'Revenue', value: '$45,678', icon: <FaMoneyBillWave className="text-purple-500" />, change: '+15%' },
    { title: 'Growth', value: '23%', icon: <FaChartLine className="text-orange-500" />, change: '+5%' },
  ];

  return (
    <section className='lg:ml-[280px] lg:pr-5'>
    <div className="min-h-screen bg-gray-100 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard Overview</h1>
          <p className="text-gray-600 mt-2">Welcome back! Here's what's happening today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">{stat.title}</p>
                  <h3 className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</h3>
                </div>
                <div className="text-3xl">{stat.icon}</div>
              </div>
              <div className="mt-4">
                <span className="text-green-500 text-sm font-medium">{stat.change}</span>
                <span className="text-gray-500 text-sm ml-2">vs last month</span>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <FaUsers className="text-blue-500" />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-800 font-medium">New user registration</p>
                    <p className="text-gray-500 text-sm">2 minutes ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                Add New User
              </button>
              <button className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300">
                Create Report
              </button>
              <button className="w-full bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition-colors duration-300">
                View Analytics
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Dashboard;