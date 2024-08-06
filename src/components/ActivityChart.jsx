// src/components/ActivityChart.js
import React from 'react';
import Charts from './Chart';

const ActivityChart = () => {
    return (
        <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Activity</h3>
            <div className="rounded-md">
                <Charts />
            </div>
        </div>
    );
};

export default ActivityChart;
