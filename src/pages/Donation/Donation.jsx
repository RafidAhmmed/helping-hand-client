import React from 'react';

const Donation = () => {
    return (
        <div className="w-full min-h-screen pt-28 px-4 md:px-8 lg:px-16 pb-16">
            <div className="max-w-4xl mx-auto bg-white shadow-lg p-8">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Please donate to help the people in need</h1>
                <div className="space-y-4 mb-8">
                    <p className="text-lg text-gray-700">
                        Your donation can make a difference in the lives of those in need.
                        Please consider donating to our cause to help those who are less fortunate.
                    </p>
                    <p className="text-lg text-gray-700">To donate us through bkash please scan the following QR code</p>
                </div>
                <div className="flex justify-center">
                    <img 
                        src="/Photo/bkash.jpg" 
                        alt="bkash" 
                        className="w-1/2 lg:w-1/3 h-auto rounded-lg shadow-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default Donation;
