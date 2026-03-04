import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import { motion } from 'framer-motion';

export default function Login({ errors }: { errors: any }) {
    const { data, setData, post, processing } = useForm({
        email: '',
        password: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/admin/login');
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden bg-[#0a0a0a]">
            <Head title="Admin Access | Burgers On Fleek" />

            {/* Cinematic Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-50"
                >
                    <source src="/images/Burger.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/50 to-[#0a0a0a]" />
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 w-full max-w-lg"
            >
                <div className="bg-white/5 border border-white/10 rounded-[2rem] p-10 sm:p-14 backdrop-blur-2xl shadow-2xl shadow-orange-950/20">
                    
                    <div className="text-center mb-10">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#da8025] to-[#8c5014] mb-6 shadow-lg shadow-orange-900/40"
                        >
                            <img src="/images/hero-icon.svg" alt="Logo" className="w-12 h-12 invert" />
                        </motion.div>
                        <h1 className="text-3xl font-extrabold tracking-widest text-[#efd9c3] uppercase mb-2">
                            Admin <span className="text-[#da8025]">Portal</span>
                        </h1>
                        <p className="text-sm text-[#A48E75] uppercase tracking-wider">
                            Enter credentials to access the dashboard
                        </p>
                    </div>

                    {errors.email && (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="mb-8 p-4 text-sm text-red-200 bg-red-950/50 border border-red-900/50 rounded-xl flex items-center gap-3 backdrop-blur-md"
                        >
                            <svg className="w-5 h-5 flex-shrink-0 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                            {errors.email}
                        </motion.div>
                    )}

                    <form onSubmit={submit} className="space-y-6">
                        <div className="group">
                            <label className="block text-xs font-bold tracking-widest text-[#A48E75] uppercase mb-2 pl-1 group-focus-within:text-[#da8025] transition-colors">
                                Email Address
                            </label>
                            <div className="relative">
                                <input
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    className="w-full bg-black/40 border-2 border-white/5 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#da8025] focus:bg-black/60 transition-all duration-300 placeholder-white/20"
                                    placeholder="admin@gmail.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="group">
                            <label className="block text-xs font-bold tracking-widest text-[#A48E75] uppercase mb-2 pl-1 group-focus-within:text-[#da8025] transition-colors">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type="password"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    className="w-full bg-black/40 border-2 border-white/5 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#da8025] focus:bg-black/60 transition-all duration-300 placeholder-white/20"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={processing}
                            className="relative w-full overflow-hidden bg-gradient-to-r from-[#da8025] to-[#b36315] hover:to-[#da8025] text-white font-extrabold py-4 px-4 rounded-xl transition-all duration-300 uppercase tracking-[0.2em] text-sm shadow-xl shadow-orange-900/30 disabled:opacity-70 mt-8"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                {processing ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Authorizing...
                                    </>
                                ) : (
                                    'Secure Login'
                                )}
                            </span>
                        </motion.button>
                    </form>
                </div>
            </motion.div>
        </div>
    );
}
