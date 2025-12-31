"use client";

import { useState } from "react";
import { Coffee, X } from "lucide-react";

export function BuyMeCoffeeButton() {
    const [isOpen, setIsOpen] = useState(false);
    const [amount, setAmount] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [isMonthly, setIsMonthly] = useState(false);

    const quickAmounts = [40, 400, 800];

    const handleSupport = () => {
        const finalAmount = amount || "40";
        const params = new URLSearchParams({
            amount: finalAmount,
            name: name || "Anonymous",
            message: message || "",
            monthly: isMonthly ? "1" : "0"
        });

        window.open(`https://www.buymeacoffee.com/modamaan?${params.toString()}`, '_blank');
    };

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-br from-lime-300 to-lime-400 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
                aria-label="Buy me a coffee"
            >
                <svg
                    width="28"
                    height="28"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-800"
                >
                    <path
                        d="M31.0745,21.766c-.7191-.2456-1.4449-.4088-2.263-.4088-1.415-.0005-2.5551.4868-3.8722,1.0505-1.477.6323-3.1531,1.3492-5.3254,1.3492-.9087-.0018-1.8131-.1265-2.6884-.3706"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M33.9067,17.3164s-2.13,20.3518-2.4941,22.8733c-.3641,2.5215-2.5484,3.3103-5.3396,3.3103h-4.1462c-2.7911,0-4.9755-.7888-5.3396-3.3103s-2.1844-19.2615-2.1844-19.2615"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M29.6745,7.951c-2.0933.4778-3.7481.5688-5.6745.5688s-9.3581-.3186-9.3581-2.1692c0-1.6079,7.4468-1.8506,9.3581-1.8506s8.6367.1709,9.1603,2.1913c.2986,1.1519.9891,5.0596.9891,5.0596"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M24,12.9235c4.1867,0,9.1759-.8933,10.7537-1.1727,1.3501-.239,1.881.9026,2.1237,2.2375s.2939,2.6374-1.2183,2.957-4.6941,1.169-11.6591,1.169-10.1469-.8495-11.6591-1.169-1.461-1.6221-1.2183-2.957.7736-2.4765,2.1237-2.2375c1.5778.2794,6.567,1.1727,10.7537,1.1727Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>

            {/* Payment Widget Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
                        {/* Header */}
                        <div className="px-6 py-5 flex items-center justify-between border-b border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900">Support Amaan</h2>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
                                aria-label="Close"
                            >
                                <X className="w-5 h-5 text-gray-600" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-4">
                            {/* Amount Input */}
                            <div>
                                <input
                                    type="number"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    placeholder="₹ Enter amount"
                                    className="w-full px-4 py-4 bg-gray-50 border-0 rounded-xl text-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400"
                                />

                                {/* Quick Amount Buttons */}
                                <div className="flex gap-2 mt-3">
                                    {quickAmounts.map((amt) => (
                                        <button
                                            key={amt}
                                            onClick={() => setAmount(amt.toString())}
                                            className="flex-1 px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm font-medium text-gray-700 transition-colors"
                                        >
                                            +₹{amt.toLocaleString()}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Name Input */}
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Name or @yoursocial"
                                className="w-full px-4 py-4 bg-gray-50 border-0 rounded-xl placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400"
                            />

                            {/* Message Input */}
                            <div className="relative">
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Say something nice..."
                                    rows={3}
                                    className="w-full px-4 py-4 bg-gray-50 border-0 rounded-xl placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400 resize-none"
                                />
                            </div>

                            {/* Monthly Checkbox */}
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="monthly"
                                    checked={isMonthly}
                                    onChange={(e) => setIsMonthly(e.target.checked)}
                                    className="w-4 h-4 rounded border-gray-300 text-lime-400 focus:ring-lime-400"
                                />
                                <label htmlFor="monthly" className="text-sm text-gray-700 flex items-center gap-1">
                                    Make this monthly
                                    <span className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-gray-400 text-gray-500 text-xs">?</span>
                                </label>
                            </div>

                            {/* Support Button */}
                            <button
                                onClick={handleSupport}
                                className="w-full bg-gradient-to-r from-lime-300 to-lime-400 hover:from-lime-400 hover:to-lime-500 text-gray-900 font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg text-lg"
                            >
                                Support
                            </button>

                            {/* Footer Link */}
                            <div className="flex items-center justify-center gap-2 pt-2">
                                <Coffee className="w-4 h-4 text-gray-400" />
                                <a
                                    href="https://www.buymeacoffee.com/modamaan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                                >
                                    buymeacoffee.com/modamaan
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
