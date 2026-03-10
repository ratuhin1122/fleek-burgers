import React, { useRef, useState } from 'react';
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
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(item?.image || null);

    const { data, setData, post, processing, errors } = useForm({
        name: item?.name || '',
        description: item?.description || '',
        price: item?.price || '',
        image: null as File | null | string, 
        category: item?.category || 'beef',
        _method: isEdit ? 'put' : 'post',
    });

    const categories = ['beef', 'chicken', 'vegetarian', 'mutton', 'sides'];

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setData('image', file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Inertia will automatically handle multipart/form-data when files are present
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
                            {/* Image Upload Area */}
                            <div className="sm:col-span-2 space-y-4">
                                <label className="block text-sm font-bold tracking-wider text-[#A48E75] uppercase mb-2">Item Image</label>
                                
                                <div 
                                    onClick={() => fileInputRef.current?.click()}
                                    className="relative h-64 w-full bg-black/40 border-2 border-dashed border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-[#da8025]/50 transition-all group"
                                >
                                    {previewUrl ? (
                                        <div className="relative w-full h-full">
                                            <img src={previewUrl} alt="Preview" className="w-full h-full object-contain" />
                                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <span className="text-white font-bold uppercase tracking-widest text-sm">Change Image</span>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="w-full h-full flex flex-col items-center justify-center text-[#A48E75]">
                                            <svg className="w-12 h-12 mb-3 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <p className="text-sm font-bold tracking-widest uppercase">Click to upload image</p>
                                            <p className="text-xs mt-1 opacity-50">JPG, PNG, WEBP (Max 2MB)</p>
                                        </div>
                                    )}
                                </div>
                                
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                    className="hidden"
                                    accept="image/*"
                                />
                                {errors.image && <p className="mt-1 text-sm text-red-400">{errors.image}</p>}
                            </div>

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
                                <div className="relative">
                                    <select
                                        value={data.category}
                                        onChange={(e) => setData('category', e.target.value)}
                                        className="w-full bg-[#1a120b] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#da8025] transition-colors appearance-none pr-10"
                                    >
                                        {categories.map(cat => (
                                            <option key={cat} value={cat} className="uppercase bg-[#1a120b]">
                                                {cat}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                                        <svg className="w-5 h-5 text-[#da8025]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
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
                                {processing ? 'Saving...' : (isEdit ? 'Update Item' : 'Add Burger')}
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
