// src/components/TopBar.js
import React from 'react';

const TopBar = () => {
    return (
        <div className="bg-gray-800 p-4 flex justify-between items-center">
            <input
                type="text"
                placeholder="Search..."
                className="bg-gray-700 p-2 rounded-md text-white w-full max-w-xs"
            />
            <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
            </div>
        </div>
    );
};

export default TopBar;
