import React from 'react';
import data from './data';

const Card = ({ imageUrl, title, description, authorName, authorDate, tag }) => {
    return (
        <div className="overflow-hidden flex flex-col border border-gray-300 rounded">
            <div className="relative overflow-hidden h-28 sm:h-48">
                <img src={imageUrl} alt="card image" className="object-cover object-center absolute h-full w-full" />
            </div>
            <div className="p-6">
                <h2 className="text-lg font-semibold mb-1">{title}</h2>
                <p className="text-gray-700">{description}</p>
            </div>
            <div className="flex justify-between items-end p-6">
                <div className="flex items-center gap-2">
                    <div className="h-10 w-10 overflow-hidden border border-gray-300 rounded-full">
                        <img src="https://api.dicebear.com/7.x/notionists/svg?seed=John?size=64" alt="avatar" className="h-full w-full object-cover" />
                    </div>
                    <div>
                        <span className="text-blue-600">{authorName}</span>
                        <span className="text-gray-500">{authorDate}</span>
                    </div>
                </div>
                <div>
                    <span className="border border-gray-400 rounded px-2 py-1 text-sm text-gray-500">{tag}</span>
                </div>
            </div>
        </div>
    );
};

export default function HealthEssence() {
    return (
        <div className="bg-gray-100 min-h-screen py-10">
            <div className="max-w-5xl mx-auto">
                <header className="text-center mb-10">
                    <h1 className="text-3xl font-bold">HealthEssence</h1>
                    <p className="text-gray-600">Nourishing Your Essence, Empowering Your Health</p>
                </header>
                <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.map((card, index) => (
                        <Card key={index} {...card} />
                    ))}
                </main>
            </div>
        </div>
    );
}
