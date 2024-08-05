// src/components/FeedbackWidget.js
import React from 'react';

const FeedbackWidget = () => {
    return (
        <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-gray-400 mb-4">Customer's Feedback</h3>
            <div className="space-y-4">
                <div>
                    <p className="text-white font-semibold">Jenny Wilson</p>
                    <p className="text-gray-400 text-sm">
                        The food was excellent and so was the service. I had the mushroom risotto with scallops...
                    </p>
                </div>
                <div>
                    <p className="text-white font-semibold">Dianne Russell</p>
                    <p className="text-gray-400 text-sm">
                        We enjoyed the Eggs Benedict served on homemade focaccia bread...
                    </p>
                </div>
                <div>
                    <p className="text-white font-semibold">Devon Lane</p>
                    <p className="text-gray-400 text-sm">
                        Normally wings are wings, but these are lean, meaty, and tender, and the sauce...
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FeedbackWidget;
