// src/components/Dashboard.js
import React from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import SummaryCard from './SummaryCard';
import ActivityChart from './ActivityChart';
import RecentOrders from './RecentOrders';
import FeedbackWidget from './FeedbackWidget';

const Dashboard = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-6 bg-gray-900 text-white">
                <TopBar />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                    <SummaryCard title="Total Orders" value="75" icon="📦" growth={3} />
                    <SummaryCard title="Total Delivered" value="70" icon="🚚" growth={-3} />
                    <SummaryCard title="Total Cancelled" value="5" icon="❌" growth={3} />
                    <SummaryCard title="Net Profit" value="$6759.25" icon="💰" growth={3} />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
                    <div className="lg:col-span-2">
                        <ActivityChart />
                    </div>
                    <div>
                        <FeedbackWidget />
                    </div>
                </div>
                <div className="mt-6">
                    <RecentOrders />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
