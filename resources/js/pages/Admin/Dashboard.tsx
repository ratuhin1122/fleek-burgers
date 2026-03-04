import React from 'react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';

interface MenuItem {
    id: number;
    name: string;
    description: string | null;
    price: string;
    image: string | null;
    category: string;
}

export default function Dashboard({ items }: { items: MenuItem[] }) {
    const { delete: destroy } = useForm();
    const { flash } = usePage().props as any;

    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this item?')) {
            destroy(`/admin/items/${id}`);
        }
    };

    // Group items by category
    const groupedItems = items.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {} as Record<string, MenuItem[]>);

    const categories = ['beef', 'chicken', 'vegetarian', 'mutton', 'sides'];

    return (
        <div className="min-h-screen bg-[#0a0a0a]">
            <Head title="Admin Dashboard | Burgers On Fleek" />
            
            <header className="bg-black/80 border-b border-[#da8025]/20 backdrop-blur-xl sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="bg-gradient-to-br from-[#da8025] to-[#8c5014] p-2 rounded-xl shadow-lg shadow-orange-900/30">
                            <img src="/images/hero-icon.svg" alt="Logo" className="w-8 h-8 invert" />
                        </div>
                        <div className="hidden sm:block">
                            <h1 className="text-xl font-extrabold text-[#efd9c3] uppercase tracking-widest">
                                Admin <span className="text-[#da8025]">Panel</span>
                            </h1>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                        {/* View Live Menu Button */}
                        <Link
                            href="/menu"
                            className="group flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-5 py-2.5 transition-all duration-300"
                        >
                            <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)] animate-pulse" />
                            <span className="text-xs font-bold text-[#efd9c3] uppercase tracking-wider group-hover:text-white">Live Menu</span>
                        </Link>

                        <div className="w-px h-8 bg-white/10 hidden sm:block" />

                        <Link
                            href="/admin/logout"
                            method="post"
                            as="button"
                            className="text-xs text-[#A48E75] hover:text-red-400 transition-colors uppercase tracking-widest font-bold"
                        >
                            Logout
                        </Link>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-4xl font-extrabold tracking-tighter text-[#efd9c3] uppercase mb-2">
                            Menu <span className="text-[#da8025]">Management</span>
                        </h2>
                        <p className="text-[#A48E75] text-sm tracking-wide">Organize and update your culinary offerings</p>
                    </div>
                    <Link
                        href="/admin/items/create"
                        className="bg-gradient-to-r from-[#da8025] to-[#b36315] hover:to-[#da8025] text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 uppercase tracking-widest text-sm shadow-xl shadow-orange-900/30 hover:-translate-y-1"
                    >
                        + Add New Item
                    </Link>
                </div>

                {flash?.success && (
                    <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8 bg-green-950/40 border border-green-500/30 text-green-300 px-6 py-4 rounded-2xl flex items-center gap-3 backdrop-blur-sm"
                    >
                        <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-medium tracking-wide">{flash.success}</span>
                    </motion.div>
                )}

                {items.length === 0 ? (
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-16 text-center text-[#A48E75] flex flex-col items-center justify-center border-dashed">
                        <svg className="w-16 h-16 mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        <p className="text-lg tracking-wider">No menu items exist yet.</p>
                        <p className="text-sm mt-2 opacity-70">Click 'Add New Item' to generate your first listing.</p>
                    </div>
                ) : (
                    <div className="space-y-16">
                        {categories.map((category) => {
                            const categoryItems = groupedItems[category];
                            if (!categoryItems || categoryItems.length === 0) return null;

                            return (
                                <motion.div 
                                    key={category}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    className="space-y-6"
                                >
                                    <div className="flex items-center gap-4">
                                        <h3 className="text-2xl font-bold tracking-widest text-[#efd9c3] uppercase">
                                            {category}
                                        </h3>
                                        <div className="h-px flex-1 bg-gradient-to-r from-[#da8025]/50 to-transparent" />
                                        <span className="bg-white/10 text-[#da8025] px-3 py-1 rounded-full text-xs font-bold tracking-widest">
                                            {categoryItems.length} ITEMS
                                        </span>
                                    </div>

                                    <div className="bg-[#1a120b] border border-[#da8025]/20 rounded-3xl overflow-hidden shadow-2xl">
                                        <div className="overflow-x-auto">
                                            <table className="w-full text-left text-sm text-[#efd9c3]">
                                                <thead className="text-xs uppercase bg-black/40 border-b border-[#da8025]/20">
                                                    <tr>
                                                        <th className="px-8 py-6 font-bold tracking-widest text-[#A48E75]">Details</th>
                                                        <th className="px-8 py-6 font-bold tracking-widest text-[#A48E75]">Price</th>
                                                        <th className="px-8 py-6 font-bold tracking-widest text-[#A48E75] text-right">Settings</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-white/5">
                                                    {categoryItems.map((item) => (
                                                        <tr key={item.id} className="hover:bg-white/5 transition-colors group">
                                                            <td className="px-8 py-6">
                                                                <div className="flex items-center gap-5">
                                                                    <div className="w-16 h-16 rounded-2xl bg-black/50 overflow-hidden flex-shrink-0 border border-white/5 p-1">
                                                                        {item.image ? (
                                                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-500" />
                                                                        ) : (
                                                                            <div className="w-full h-full flex items-center justify-center text-white/20">
                                                                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                                                </svg>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                    <div>
                                                                        <div className="font-bold text-base mb-1 tracking-wide">{item.name}</div>
                                                                        <div className="text-xs text-[#A48E75] line-clamp-1 max-w-md">
                                                                            {item.description || <span className="italic opacity-50">No description provided</span>}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="px-8 py-6">
                                                                <span className="font-mono text-lg font-bold text-[#da8025]">${item.price}</span>
                                                            </td>
                                                            <td className="px-8 py-6 text-right">
                                                                <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                                    <Link
                                                                        href={`/admin/items/${item.id}/edit`}
                                                                        className="bg-white/10 hover:bg-white/20 text-[#efd9c3] px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors"
                                                                    >
                                                                        Edit
                                                                    </Link>
                                                                    <button
                                                                        onClick={() => handleDelete(item.id)}
                                                                        className="bg-red-500/10 hover:bg-red-500/20 text-red-400 px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors"
                                                                    >
                                                                        Delete
                                                                    </button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                )}
            </main>
        </div>
    );
}
