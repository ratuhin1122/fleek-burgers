import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login, register } from '@/routes';
import Homelayout from '@/layouts/home/Homelayout';
import { SlLocationPin } from 'react-icons/sl';
import { BsTelephone } from 'react-icons/bs';
// import Menuicon from '@/components/Menuicon';

export default function Welcome({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>

            <Homelayout>
                <section className="relative h-screen w-full overflow-hidden text-white">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="anim-duration-1000 fixed top-0 z-0 h-full w-full animate-in overflow-hidden object-cover opacity-30 transition-all duration-1000 fade-in"
                    >
                        <source src="/images/Burger.mp4" type="video/mp4" />
                    </video>
                    <div className="fixed top-0 z-0 h-full w-full bg-linear-to-t from-[#1b1b18] via-black/40 to-black/80" />

                    <div className="r relative top-10 z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-4 text-center sm:px-6 md:px-10 lg:flex-row lg:text-left">
                        <div className="mb-10 flex flex-col items-center lg:mr-16 lg:mb-0 lg:items-center">
                            <div className="mb-4 sm:ml-0 mt-60 md:mt-0 lg:mt-0 lg:ml-8">
                                <img
                                    src="/images/vercel.svg"
                                    alt="Burger Logo"
                                    width={100}
                                    height={100}
                                    className="w-[100px] object-contain sm:w-[150px] lg:h-[310px] lg:w-[310px]"
                                />
                            </div>
                            <div className="flex flex-col lg:ml-10">
                                {/* Container for "BURGERS" */}
                                <div className="relative flex w-full justify-center">
                                    <h1 className="text-[13vw] font-bold tracking-tighter whitespace-nowrap text-[#EFD9C3] drop-shadow-2xl sm:text-6xl lg:text-[100px] lg:leading-[0.9]">
                                        BURGERS
                                    </h1>
                                </div>

                                {/* Container for "ON FLEEK" */}
                                <div className="relative flex w-full justify-center lg:justify-end">
                                    <h2
                                        className="text-[13vw] font-bold tracking-widest whitespace-nowrap text-transparent sm:text-6xl lg:text-[90px] lg:leading-[0.9]"
                                        style={{
                                            WebkitTextStroke: '1px #EFD9C3',
                                        }}
                                    >
                                        ON FLEEK
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <h1 className="text-2xl leading-tight font-semibold text-[#EFD9C3] sm:text-3xl lg:text-[48px]">
                                    The{' '}
                                    <span className="font-bold text-orange-400">
                                        burgers
                                    </span>
                                </h1>
                                <h2 className="text-2xl leading-tight font-semibold text-[#EFD9C3] sm:text-3xl lg:text-[48px]">
                                    you are{' '}
                                    <span className="font-bold text-[#E4B381]">
                                        craving
                                    </span>
                                </h2>
                            </div>

                            <p className="max-w-xl text-base leading-[28px] text-[#A48E75] sm:text-lg lg:text-[20px]">
                                Premium Quality Gourmet Burgers, Steak{' '}
                                <br className="hidden sm:block" />
                                Sandwiches, Fries, and more. est. 2019
                            </p>
                            <div className="flex items-center justify-center gap-2 lg:justify-start">
                                <span className="text-[#927E68]">حلال </span>
                                <p className="text-sm text-[#927E68] sm:text-base lg:text-[16px]">
                                    Only serving Halal
                                </p>
                            </div>

                            <div className="flex flex-col items-center gap-3 text-sm lg:items-start">
                                <p className="flex items-center gap-3 text-sm text-[#927E68] sm:text-base lg:text-[16px]">
                                    <BsTelephone size={20} /> +1 (905) 427 4377
                                </p>
                                <p className="flex items-center gap-3 text-sm text-[#927E68] sm:text-base lg:text-[16px]">
                                    <SlLocationPin size={21} /> 135 Harwood Ave
                                    N, Ajax, ON
                                </p>
                            </div>

                            <Link
                                href="/menu"
                                className="inline-flex items-center gap-2 rounded-xl border border-[#da8025]/20 bg-[#7e4710] px-4 py-2 text-sm text-white transition duration-200 hover:bg-[#925617] sm:px-6 sm:py-3 sm:text-lg"
                            >
                                {/* <Menuicon size={18}/> */}

                                <span>View the menu</span>
                            </Link>

                            <div className="mt-8 flex flex-col items-center lg:items-start">
                                <h3 className="text-xl font-semibold text-[#EFD9C3]">
                                    Order Online
                                </h3>
                                <p className="text-md mt-1 text-[#A48E75]">
                                    Pickup or delivery available.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="relative overflow-hidden border-t border-white/5 bg-[#1b1b18] px-4 py-16 sm:py-24">
                    <div className="pointer-events-none absolute top-0 left-1/2 h-full w-full max-w-7xl -translate-x-1/2">
                        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-orange-500/10 blur-[100px]" />
                        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-[#EFD9C3]/5 blur-[100px]" />
                    </div>

                    <div className="relative z-10 mx-auto max-w-7xl">
                        <h3 className="mb-10 text-center text-3xl font-bold tracking-tight text-[#EFD9C3] md:mb-16 md:text-5xl">
                            Top Seller{' '}
                        </h3>

                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                            {/* Card 1 */}
                            <div className="group relative">
                                <div className="relative flex h-80 w-full items-center justify-center">
                                    <div className="absolute inset-0 -rotate-3 rounded-3xl border border-white/10 bg-white/5 transition-transform duration-500 group-hover:rotate-0" />
                                    <img
                                        src="/images/burger-1.webp"
                                        alt="The Classic"
                                        className="h-full w-[80%] object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="mt-8 text-center">
                                    <h4 className="mb-2 text-2xl font-bold text-[#EFD9C3]">
                                        The Classic
                                    </h4>
                                    <p className="text-[#A48E75]">
                                        Juicy beef patty, fresh lettuce, tomato,
                                        and our secret sauce.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="group relative">
                                <div className="relative flex h-80 w-full items-center justify-center">
                                    <div className="absolute inset-0 rotate-2 rounded-3xl border border-white/10 bg-white/5 transition-transform duration-500 group-hover:rotate-0" />
                                    <img
                                        src="/images/burger-2.webp"
                                        alt="Spicy Crisp"
                                        className="h-full w-[80%] object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="mt-8 text-center">
                                    <h4 className="mb-2 text-2xl font-bold text-[#EFD9C3]">
                                        Spicy Crisp
                                    </h4>
                                    <p className="text-[#A48E75]">
                                        Crispy chicken breast with spicy mayo
                                        and pickles.
                                    </p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="group relative">
                                <div className="relative flex h-80 w-full items-center justify-center">
                                    <div className="absolute inset-0 -rotate-3 rounded-3xl border border-white/10 bg-white/5 transition-transform duration-500 group-hover:rotate-0" />
                                    <img
                                        src="/images/burger-3.webp"
                                        alt="The Beast"
                                        className="h-full w-[80%] object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="mt-8 text-center">
                                    <h4 className="mb-2 text-2xl font-bold text-[#EFD9C3]">
                                        The Beast
                                    </h4>
                                    <p className="text-[#A48E75]">
                                        Double beef patties, double cheese,
                                        double the flavor.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="flex min-h-screen w-full flex-col items-center justify-center gap-12 bg-[#1b1b18] px-4 py-16 text-center sm:py-20 dark:bg-[#0a0a0a]">
                    <div className="flex flex-col items-center justify-center gap-4">
                        <h2 className="text-3xl font-bold text-[#EFD9C3] sm:text-4xl lg:text-[60px]">
                            See for{' '}
                            <span className="font-bold text-orange-400 block sm:inline">
                                yourself.
                            </span>
                        </h2>
                        <p className="max-w-2xl text-lg text-[#A48E75] lg:text-xl">
                            Our guests love us! Check out our reviews on Google.
                        </p>
                    </div>

                    <div className="flex w-full max-w-2xl flex-col gap-6">
                        {/* Review Card 1 */}
                        <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-left shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-orange-900/20">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 overflow-hidden rounded-full bg-orange-400/20">
                                    <img
                                        src="https://ui-avatars.com/api/?name=Sarah+J&background=random"
                                        alt="User"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#EFD9C3]">
                                        Sarah Jenkins
                                    </h4>
                                    <div className="flex text-orange-400">
                                        ★★★★★
                                    </div>
                                </div>
                            </div>
                            <p className="text-[#A48E75]">
                                "Hands down the best burger I've had in a long
                                time! The flavors are incredible and the
                                ingredients taste so fresh. Definitely coming
                                back!"
                            </p>
                        </div>

                        {/* Review Card 2 */}
                        <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-left shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-orange-900/20">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 overflow-hidden rounded-full bg-orange-400/20">
                                    <img
                                        src="https://ui-avatars.com/api/?name=Mike+R&background=random"
                                        alt="User"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#EFD9C3]">
                                        Mike Ross
                                    </h4>
                                    <div className="flex text-orange-400">
                                        ★★★★★
                                    </div>
                                </div>
                            </div>
                            <p className="text-[#A48E75]">
                                "Great atmosphere and even better food. The
                                staff was super friendly and the service was
                                quick. Highly recommend the classic burger!"
                            </p>
                        </div>

                        {/* Review Card 3 */}
                        <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-left shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-orange-900/20">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 overflow-hidden rounded-full bg-orange-400/20">
                                    <img
                                        src="https://ui-avatars.com/api/?name=Emily+W&background=random"
                                        alt="User"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#EFD9C3]">
                                        Emily Wong
                                    </h4>
                                    <div className="flex text-orange-400">
                                        ★★★★
                                    </div>
                                </div>
                            </div>
                            <p className="text-[#A48E75]">
                                "Finally a halal burger spot that doesn't
                                compromise on quality. The fries were crispy and
                                the burger was juicy. 10/10 experience."
                            </p>
                        </div>

                        {/* Review Card 4 */}
                        <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-left shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-orange-900/20">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 overflow-hidden rounded-full bg-orange-400/20">
                                    <img
                                        src="https://ui-avatars.com/api/?name=David+K&background=random"
                                        alt="User"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#EFD9C3]">
                                        David Kim
                                    </h4>
                                    <div className="flex text-orange-400">
                                        ★★★★
                                    </div>
                                </div>
                            </div>
                            <p className="text-[#A48E75]">
                                "Absolute perfection! The buns were soft, the
                                meat was seasoned perfectly. A must-visit if
                                you're in the area."
                            </p>
                        </div>
                    </div>
                </section>
                <section className="flex min-h-screen w-full flex-col items-center justify-center gap-16 bg-linear-to-b from-[#1b1b18] to-black px-4 lg:py-16 text-center sm:py-0 md:py-0 dark:bg-[#0a0a0a]">
                    <div className="relative z-10 w-full max-w-4xl text-center">
                        {/* Burger Logo */}
                        <div className="mx-auto mb-6 h-20 w-20 sm:h-32 sm:w-32 lg:mb-14">
                            <img
                                src="/images/vercel.svg"
                                alt="Burger Logo"
                                width={100}
                                height={100}
                                className="h-full w-max object-contain"
                            />
                        </div>

                        {/* Main Heading */}
                        <h1 className="mb-6 text-3xl font-bold text-[#EFD9C3] sm:mb-8 sm:text-5xl">
                            We Only Serve{' '}
                            <span className="text-orange-400 block sm:inline">Halal حلال</span>
                        </h1>

                        {/* Sub-heading */}
                        <p className="mx-6 mb-6 flex flex-col gap-2 text-xl text-[#A48E75] sm:mb-10 md:mx-16 md:text-2xl">
                            Burgers On Fleek uses 100% Hand slaughtered Halal
                            Meat.
                        </p>

                        {/* Meat providers section */}
                        <div className="mx-6 mb-6 text-lg sm:mb-10 md:mx-16 md:text-xl">
                            <p className="text-[#A48E75]">
                                Our meat providers are
                            </p>
                            <p>
                                {/* Using Next.js Link component for consistency */}
                                <Link
                                    href="#"
                                    className="text-orange-300 underline decoration-orange-300/50 decoration-2 underline-offset-4 transition-colors hover:text-white hover:decoration-orange-400"
                                >
                                    St. Helen&apos;s
                                </Link>{' '}
                                <span className="text-orange-300">and</span>{' '}
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
                            For further inquiries, feel free to reach us at{' '}
                            <Link
                                href="#"
                                className="text-orange-300 underline decoration-orange-300/50 decoration-2 underline-offset-4 transition-colors hover:text-white hover:decoration-orange-400"
                            >
                                eat@burgersonfleek.ca
                            </Link>
                        </p>
                    </div>
                </section>
            </Homelayout>
        </>
    );
}
