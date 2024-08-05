// src/components/Sidebar.js
import React from 'react';

const Sidebar = () => {
    return (
        <div className="bg-gray-900 h-screen p-4 flex flex-col items-center">
            <div className="bg-blue-600 w-10 h-10 rounded-full mb-8"></div>
            <div className="space-y-6 mt-10">
                <div className="w-8 h-8 bg-gray-700 rounded-md"></div>
                <div className="w-8 h-8 bg-gray-700 rounded-md"></div>
                <div className="w-8 h-8 bg-gray-700 rounded-md"></div>
                <div className="w-8 h-8 bg-gray-700 rounded-md"></div>
            </div>
            <div className="mt-auto">
                <div className="w-8 h-8 bg-gray-700 rounded-md"></div>
            </div>
        </div>
    );
};

export default Sidebar;
