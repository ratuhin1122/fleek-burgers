import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
    category: string;
}

export default function ItemForm({ item }: { item: MenuItem | null }) {
    const isEdit = !!item;

    const { data, setData, post, processing, errors } = useForm({
        name: item?.name || '',
        description: item?.description || '',
        price: item?.price || '',
        image: null as File | null,
        category: item?.category || 'beef',
        _method: isEdit ? 'put' : 'post',
    });

    const categories = ['beef', 'chicken', 'vegetarian', 'mutton', 'sides'];

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // We use POST even for updates because HTML forms with files (multipart/form-data) 
        // don't always play nicely with PUT. The _method field tells Laravel it's actually a PUT requested.
        post(isEdit ? `/admin/items/${item.id}` : '/admin/items', {
            forceFormData: true,
            preserveScroll: true,
        });
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a]">
            <Head title={isEdit ? "Edit Item" : "Add Item"} />
            
            <header className="bg-[#1a120b] border-b border-[#da8025]/20 backdrop-blur-sm sticky top-0 z-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <Link href="/admin/dashboard" className="text-[#A48E75] hover:text-[#da8025] transition-colors font-semibold uppercase tracking-wider text-sm">
                        ← Back to Dashboard
                    </Link>
                </div>
            </header>

            <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-[#1a120b] border border-[#da8025]/20 rounded-2xl p-8 backdrop-blur-sm shadow-2xl">
                    <h1 className="text-2xl font-bold tracking-widest text-[#efd9c3] uppercase mb-8 pb-4 border-b border-white/5">
                        {isEdit ? 'Edit Menu Item' : 'Add New Item'}
                    </h1>

                    <form onSubmit={submit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="sm:col-span-2">
                                <label className="block text-sm font-bold tracking-wider text-[#A48E75] uppercase mb-2">Item Name</label>
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#da8025] transition-colors"
                                    required
                                />
                                {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-bold tracking-wider text-[#A48E75] uppercase mb-2">Category</label>
                                <select
                                    value={data.category}
                                    onChange={(e) => setData('category', e.target.value)}
                                    className="w-full bg-[#1a120b] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#da8025] transition-colors appearance-none"
                                >
                                    {categories.map(cat => (
                                        <option key={cat} value={cat} className="uppercase bg-[#1a120b]">
                                            {cat}
                                        </option>
                                    ))}
                                </select>
                                {errors.category && <p className="mt-1 text-sm text-red-400">{errors.category}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-bold tracking-wider text-[#A48E75] uppercase mb-2">Price ($)</label>
                                <input
                                    type="number"
                                    step="0.01"
                                    value={data.price}
                                    onChange={(e) => setData('price', e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#da8025] transition-colors"
                                    required
                                />
                                {errors.price && <p className="mt-1 text-sm text-red-400">{errors.price}</p>}
                            </div>

                            <div className="sm:col-span-2">
                                <label className="block text-sm font-bold tracking-wider text-[#A48E75] uppercase mb-2">Item Image</label>
                                {isEdit && item.image && (
                                    <div className="mb-4">
                                        <p className="text-xs text-[#A48E75] mb-2 uppercase tracking-wide">Current Image:</p>
                                        <img src={item.image} alt="Current" className="w-24 h-24 object-cover rounded-xl border border-white/10" />
                                    </div>
                                )}
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => setData('image', e.target.files ? e.target.files[0] : null)}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#da8025] transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#da8025] file:text-white hover:file:bg-[#c47221] cursor-pointer"
                                />
                                {errors.image && <p className="mt-1 text-sm text-red-400">{errors.image}</p>}
                            </div>

                            <div className="sm:col-span-2">
                                <label className="block text-sm font-bold tracking-wider text-[#A48E75] uppercase mb-2">Description</label>
                                <textarea
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#da8025] transition-colors"
                                />
                                {errors.description && <p className="mt-1 text-sm text-red-400">{errors.description}</p>}
                            </div>
                        </div>

                        <div className="pt-6 border-t border-white/5 flex gap-4">
                            <button
                                type="submit"
                                disabled={processing}
                                className="flex-1 bg-[#da8025] hover:bg-[#c47221] text-white font-bold py-3 px-6 rounded-xl transition-colors uppercase tracking-widest disabled:opacity-50"
                            >
                                {processing ? 'Saving...' : 'Save Item'}
                            </button>
                            <Link
                                href="/admin/dashboard"
                                className="px-6 py-3 rounded-xl border border-white/10 text-[#efd9c3] font-bold uppercase tracking-widest hover:bg-white/5 transition-colors flex items-center justify-center"
                            >
                                Cancel
                            </Link>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}
