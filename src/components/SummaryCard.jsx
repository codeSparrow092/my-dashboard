import React from 'react';

const SummaryCard = ({ title, value, icon, growth }) => {
    return (
        <div className="bg-gray-800 p-4 rounded-lg flex-col items-center justify-between">
            <div className="text-4xl">{icon}</div>
            <div>
                <h3 className="">{title}</h3>
                <p className="text-white text-2xl">{value}</p>
                <span className={`text-sm ${growth >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {growth >= 0 ? `▲ ${growth}%` : `▼ ${growth}%`}
                </span>
            </div>
        </div>
    );
};

export default SummaryCard;
