import React from 'react';

const SummaryCard = ({ title, value, icon, growth }) => {
    return (
        <div className="bg-gray-800 p-4 rounded-lg flex items-center justify-between">
            <div>
                <h3 className="">{title}</h3>
                <p className="text-white text-2xl font-bold">{value}</p>
                <span className={`text-sm ${growth >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {growth >= 0 ? `▲ ${growth}%` : `▼ ${growth}%`}
                </span>
            </div>
            <div className="text-4xl">{icon}</div>

        </div>
    );
};

export default SummaryCard;
