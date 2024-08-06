// src/components/TopBar.js
import { BellDot, Image, Inbox, MessageCircle, Settings } from 'lucide-react';
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
                <div className="bg-gray-700 rounded-full"><Inbox className='w-6 h-6 text-white' /></div>
                <div className="bg-gray-700 rounded-full"><Settings className='w-6 h-6 text-white' /></div>
                <div className="bg-gray-700 rounded-full"><BellDot className='w-6 h-6 text-white' /></div>
                <div className="bg-gray-700 rounded-full"><Image className='w-6 h-6 text-white' /></div>
            </div>
        </div>
    );
};

export default TopBar;
