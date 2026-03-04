import React, { useState, useEffect } from 'react';
import Homelayout from '@/layouts/home/Homelayout';
import { Head } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import { GiSteak, GiChickenLeg, GiFrenchFries } from 'react-icons/gi';
import { BiCategoryAlt } from 'react-icons/bi';

interface MenuItem {
    id: number;
    name: string;
    description: string | null;
    price: string | number;
    image: string | null;
    category: string;
}

const CATEGORIES = [
    { id: 'all', name: 'All Items', icon: <BiCategoryAlt size={20} /> },
    { id: 'beef', name: 'Beef Burgers', icon: <GiSteak size={20} /> },
    { id: 'chicken', name: 'Chicken Burgers', icon: <GiChickenLeg size={20} /> },
    { id: 'sides', name: 'Gourmet Sides', icon: <GiFrenchFries size={20} /> },
    { id: 'mutton', name: 'Mutton Burgers', icon: <GiSteak size={20} /> },
    { id: 'vegetarian', name: 'Vegetarian', icon: <GiChickenLeg size={20} /> },
];

const MenuCard = ({ item }: { item: MenuItem }) => (
    <motion.div 
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#da8025]/40 hover:shadow-2xl hover:shadow-orange-900/20 flex flex-col h-full"
    >
        <div className="relative mb-6 flex h-48 w-full items-center justify-center overflow-hidden rounded-2xl bg-black/20 text-[#efd9c3] p-2 border border-white/5 shadow-inner">
            {item.image ? (
                <img 
                    src={item.image} 
                    alt={item.name}
                    className="h-full w-full object-contain p-4 drop-shadow-2xl transition-transform duration-500 group-hover:scale-110"
                />
            ) : (
                <div className="flex items-center justify-center opacity-30">
                    <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
            )}
            <div className="absolute top-4 right-4 rounded-full bg-gradient-to-r from-[#da8025] to-[#8c5014] px-4 py-1.5 text-sm font-black tracking-widest text-white shadow-[0_0_15px_rgba(218,128,37,0.5)]">
                ${item.price}
            </div>
        </div>
        <div className="flex-1">
            <h3 className="mb-2 text-xl font-bold tracking-tight text-[#efd9c3] uppercase">{item.name}</h3>
            {item.description ? (
                <p className="text-sm leading-relaxed text-[#A48E75] line-clamp-3">{item.description}</p>
            ) : (
                <p className="text-sm leading-relaxed text-[#A48E75]/50 italic">No description available.</p>
            )}
        </div>
        <button className="mt-6 w-full rounded-xl border border-[#da8025]/30 bg-transparent py-3 text-sm font-semibold tracking-widest text-[#efd9c3] transition-all duration-300 hover:bg-[#da8025] hover:text-white uppercase hover:shadow-[0_0_15px_rgba(218,128,37,0.3)]">
            Order Now
        </button>
    </motion.div>
);

export default function menu({ items = [] }: { items?: MenuItem[] }) {
    const [activeCategory, setActiveCategory] = useState<string>(() => {
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            return params.get('category') || 'all';
        }
        return 'all';
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const url = new URL(window.location.href);
            if (activeCategory === 'all') {
                url.searchParams.delete('category');
            } else {
                url.searchParams.set('category', activeCategory);
            }
            window.history.replaceState({}, '', url.toString());
        }
    }, [activeCategory]);

    // Group items from DB by category
    const groupedData = items.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {} as Record<string, MenuItem[]>);

    // Filter sections based on the static CATEGORIES array order
    const filteredSections = activeCategory === 'all'
        ? CATEGORIES.filter(c => c.id !== 'all').map(c => ({
            key: c.id,
            name: c.name,
            items: groupedData[c.id] || []
        }))
        : [{
            key: activeCategory,
            name: CATEGORIES.find(c => c.id === activeCategory)?.name || activeCategory,
            items: groupedData[activeCategory] || []
        }];

    return (
        <Homelayout>
            <Head title="Menu | Burgers On Fleek" />
            
            <section className="relative min-h-screen w-full bg-[#0a0a0a] pt-24 pb-20">
                {/* Background Video/Cinematic Layer */}
                <div className="fixed inset-0 z-0 opacity-40 transition-opacity duration-1000">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full object-cover"
                    >
                        <source src="/images/Burger.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
                    {/* Header */}
                    <div className="mb-12 text-center">
                        <motion.h1 
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-5xl font-extrabold tracking-tighter text-[#efd9c3] sm:text-7xl italic uppercase"
                        >
                            Our <span className="text-[#da8025] not-italic">Menu</span>
                        </motion.h1>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Sidebar - Desktop */}
                        <aside className="hidden lg:block w-64 flex-shrink-0">
                            <div className="sticky top-32 space-y-2 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-2xl shadow-xl">
                                <h3 className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#A48E75]">Categories</h3>
                                <nav className="flex flex-col gap-1">
                                    {CATEGORIES.map((cat) => (
                                        <button
                                            key={cat.id}
                                            onClick={() => setActiveCategory(cat.id)}
                                            className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                                                activeCategory === cat.id 
                                                ? 'bg-gradient-to-r from-[#da8025] to-[#b36315] text-white shadow-lg shadow-orange-950/20' 
                                                : 'text-[#efd9c3] hover:bg-white/10 hover:text-white'
                                            }`}
                                        >
                                            <span className={activeCategory === cat.id ? 'text-white' : 'text-[#da8025]'}>
                                                {cat.icon}
                                            </span>
                                            {cat.name}
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </aside>

                        {/* Mobile Category Switcher */}
                        <div className="lg:hidden sticky top-[70px] z-30 -mx-4 px-4 py-4 backdrop-blur-md bg-black/40 border-b border-white/5 overflow-x-auto scroll-hidden">
                            <div className="flex gap-2 min-w-max">
                                {CATEGORIES.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => setActiveCategory(cat.id)}
                                        className={`flex items-center gap-2 whitespace-nowrap rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                                            activeCategory === cat.id 
                                            ? 'bg-gradient-to-r from-[#da8025] to-[#b36315] text-white shadow-lg' 
                                            : 'bg-white/5 text-[#efd9c3] border border-white/10'
                                        }`}
                                    >
                                        <span className={activeCategory === cat.id ? 'text-white' : 'text-[#da8025]'}>
                                            {React.cloneElement(cat.icon as React.ReactElement<any>, { size: 16 })}
                                        </span>
                                        {cat.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Main Menu Content */}
                        <main className="flex-1">
                            <AnimatePresence mode="wait">
                                {items.length === 0 ? (
                                    <motion.div 
                                        initial={{ opacity: 0 }} 
                                        animate={{ opacity: 1 }} 
                                        className="text-center py-20 bg-white/5 border border-white/10 rounded-3xl"
                                    >
                                        <p className="text-[#A48E75] text-xl font-bold tracking-widest uppercase">No items available yet.</p>
                                    </motion.div>
                                ) : (
                                    <div className="space-y-20">
                                        {filteredSections.map((section) => {
                                            if (!section.items || section.items.length === 0) return null;

                                            return (
                                                <motion.div 
                                                    key={section.key}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -20 }}
                                                    transition={{ duration: 0.4 }}
                                                >
                                                    <div className="mb-10 flex items-center gap-4">
                                                        <h2 className="text-2xl font-bold tracking-widest text-[#efd9c3] uppercase">
                                                            {section.name}
                                                        </h2>
                                                        <div className="h-px flex-1 bg-gradient-to-r from-[#da8025]/50 to-transparent" />
                                                    </div>
                                                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                                                        {section.items.map(item => (
                                                            <MenuCard key={item.id} item={item} />
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                )}
                            </AnimatePresence>
                        </main>
                    </div>
                </div>
            </section>
        </Homelayout>
    );
}