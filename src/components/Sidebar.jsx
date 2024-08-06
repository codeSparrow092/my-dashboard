// src/components/Sidebar.js
import { ChartBar, Home, LogOut, LucideHome, PanelTopDashed, ShoppingCart } from 'lucide-react';
import React from 'react';

const Sidebar = () => {
    return (
        <div className="bg-[#1f2937] p-4 sm:flex flex-col items-center hidden">
            <div className="bg-blue-600 w-10 h-10 rounded-full mb-8"></div>
            <div className="space-y-6 mt-15">
                <div className='bg-gray-800 hover:bg-blue-500 rounded-md'><LucideHome className='w-8 h-8 text-white' /></div>
                <div className='bg-gray-800 hover:bg-blue-500 rounded-md'><ChartBar className='w-8 h-8 text-white' /></div>
                <div className='bg-gray-800 hover:bg-blue-500 rounded-md'><PanelTopDashed className='w-8 h-8 text-white' /></div>
                <div className='bg-gray-800 hover:bg-blue-500 rounded-md'><ShoppingCart className='w-8 h-8 text-white' /></div>
            </div>
            <div className="mt-auto">
                <div className='bg-gray-800 hover:bg-blue-500 rounded-md'><LogOut className='w-8 h-8 text-white' /></div>
            </div>
        </div>
    );
};

export default Sidebar;
