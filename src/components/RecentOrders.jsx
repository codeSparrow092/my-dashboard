// src/components/RecentOrders.js
import React from 'react';

const RecentOrders = () => {
    return (
        <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Recent Orders</h3>
            <table className="w-full text-left">
                <thead>
                    <tr>
                        <th className="text-l">Customer</th>
                        <th className="text-l">Order No.</th>
                        <th className="text-l">Amount</th>
                        <th className="text-l">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="py-2">Wade Warren</td>
                        <td>15478256</td>
                        <td>$124.00</td>
                        <td className="text-green-400">Delivered</td>
                    </tr>
                    <tr>
                        <td className="py-2">Jane Cooper</td>
                        <td>48967586</td>
                        <td>$305.02</td>
                        <td className="text-green-400">Delivered</td>
                    </tr>
                    <tr>
                        <td className="py-2">Guy Hawkins</td>
                        <td>78985215</td>
                        <td>$45.88</td>
                        <td className="text-red-400">Cancelled</td>
                    </tr>
                    <tr>
                        <td className="py-2">Kristin Watson</td>
                        <td>20965732</td>
                        <td>$56.00</td>
                        <td className="text-yellow-400">Pending</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default RecentOrders;
