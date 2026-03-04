import { Head, Link } from '@inertiajs/react';
import Homelayout from '@/layouts/home/Homelayout';

export default function Halal() {
    return (
        <>
            <Head title="Halal Policy" />
            <Homelayout>
                <section className="relative h-screen w-full overflow-hidden text-white">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="anim-duration-1000 fixed top-0 z-0 h-full w-full animate-in overflow-hidden object-cover opacity-55 transition-all duration-1000 fade-in"
                    >
                        <source src="/images/Burger.mp4" type="video/mp4" />
                    </video>
                    <div className="fixed top-0 z-0 h-full w-full bg-linear-to-t from-[#1b1b18] via-black/40 to-black/80" />
                    
                    <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-4 text-center">
                        {/* Burger Logo */}
                        <div className="mx-auto mb-6 h-24 w-24 sm:h-32 sm:w-32 lg:mb-14">
                            <img
                                src="/images/vercel.svg"
                                alt="Burger Logo"
                                width={100}
                                height={100}
                                className="h-full w-max object-contain"
                            />
                        </div>

                        {/* Main Heading */}
                        <h1 className="mb-8 text-2xl font-bold text-[#EFD9C3] sm:mb-8 sm:text-5xl">
                            We Only Serve <span className="text-orange-400">Halal حلال</span>
                        </h1>

                        {/* Sub-heading */}
                        <p className="mx-6 mb-6 flex flex-col gap-2 text-xl text-[#A48E75] sm:mb-10 md:mx-16 md:text-2xl">
                            Burgers On Fleek uses 100% Hand slaughtered Halal Meat.
                        </p>

                        {/* Meat providers section */}
                        <div className="mx-6 mb-6 text-lg sm:mb-10 md:mx-16 md:text-xl">
                            <p className="text-[#A48E75]">Our meat providers are</p>
                            <p>
                                <Link
                                    href="#"
                                    className="text-orange-300 underline decoration-orange-300/50 decoration-2 underline-offset-4 transition-colors hover:text-white hover:decoration-orange-400"
                                >
                                    St. Helen&apos;s
                                </Link>{" "}
                                <span className="text-orange-300">and</span>{" "}
                                <Link
                                    href="#"
                                    className="text-orange-300 underline decoration-orange-300/50 decoration-2 underline-offset-4 transition-colors hover:text-white hover:decoration-orange-400"
                                >
                                    Sargent Farms
                                </Link>
                            </p>
                        </div>

                        {/* Contact information */}
                        <p className="mx-6 text-base text-[#A48E75] md:mx-16 md:text-lg">
                            For further inquiries, feel free to reach us at{" "}
                            <Link
                                href="mailto:eat@burgersonfleek.ca"
                                className="text-orange-300 underline decoration-orange-300/50 decoration-2 underline-offset-4 transition-colors hover:text-white hover:decoration-orange-400"
                            >
                                eat@burgersonfleek.ca
                            </Link>
                        </p>

                        <div className="mt-12">
                             <Link
                                href="/"
                                className="text-orange-300 underline decoration-orange-300/50 decoration-2 underline-offset-4 transition-colors hover:text-white hover:decoration-orange-400"
                            >
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </section>
            </Homelayout>
        </>
    );
}
