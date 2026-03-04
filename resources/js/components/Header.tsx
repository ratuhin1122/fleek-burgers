import { SlLocationPin } from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
import { BsMenuApp } from "react-icons/bs";
import { HiHome } from "react-icons/hi";

// import Togglebtn from "@/components/Tooglebtn";
import { PiTiktokLogoThin } from "react-icons/pi";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa6";
// import Menuicon from "@/components/Menuicon";
import { Link, usePage } from "@inertiajs/react";
// import { type SharedData } from '@/types'; // Assuming this type is available
import { RiDashboardLine } from "react-icons/ri";
import { FiLogIn } from "react-icons/fi";
import { FaRegRegistered } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";


export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    // Access the shared auth data from Inertia
    // const { auth } = usePage<SharedData>().props;

    return (
        <header className="flex justify-center backdrop-blur-sm fixed top-0 left-0 z-50 w-full h-[70px]">
            <div className="flex items-center mt-2 mx-2 justify-between w-full max-w-6xl px-1 py-1 rounded-xl border border-[#da8025]/20 bg-[#1a120b] text-white">
                {/* Logo Link */}
                <Link
                    href="/"
                    className="flex items-center gap-2 font-bold tracking-wide text-sm hover:bg-[#766656] hover:py-2 px-2 py-4 rounded-xl transition-colors duration-200"
                >
                    <img
                        src={"/images/hero-icon.svg"}
                        alt="Burger Logo"
                        width={30}
                        height={30}
                        className=""
                    />
                    <span className="text-[#efd9c3] text-[16px] font-semibold">
                        BURGERS
                    </span>
                    <span className="text-[#efd9c3] -ml-0.5 font-light">ON FLEEK</span>
                </Link>

                {/* Mobile Menu and Hamburger */}
                <div className="md:hidden flex items-center gap-2">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 rounded-xl text-[#efd9c3] hover:bg-[#766656] transition-colors"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                    </button>
                </div>

                {/* Mobile Drawer Overlay */}
                {isOpen && (
                    <div className="fixed inset-0 z-50 md:hidden">
                        {/* Backdrop */}
                        <div 
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                            onClick={() => setIsOpen(false)}
                        />
                        
                        {/* Drawer content */}
                        <nav className="absolute top-5 w-full rounded-2xl border border-white/20 bg-[#1A120B] backdrop-blur-xl saturate-150 p-6 text-white shadow-2xl animate-in slide-in-from-top-5 duration-200">
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-xs font-semibold uppercase tracking-wider text-[#A48E75]">Navigation</span>
                                    <button 
                                        onClick={() => setIsOpen(false)}
                                        className="p-1 rounded-lg hover:bg-[#766656] text-[#efd9c3] transition-colors"
                                        aria-label="Close Menu"
                                    >
                                        <HiX size={24} />
                                    </button>
                                </div>
                                 <Link
                                    href="/"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-3 rounded-lg py-3 px-4 text-lg font-medium text-[#efd9c3] hover:bg-[#766656] transition-colors"
                                >
                                    {/*add icon for menu*/}
                                    
                                    <HiHome size={24} />
                                    <span>Home</span>
                                </Link>
                                
                                <Link
                                    href="/menu"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-3 rounded-lg py-3 px-4 text-lg font-medium text-[#efd9c3] hover:bg-[#766656] transition-colors"
                                >
                                    {/*add icon for menu*/}
                                    
                                    <BsMenuApp size={24} />
                                    <span>MENU</span>
                                </Link>
                                <Link
                                    href="/halal"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-3 rounded-lg py-3 px-4 text-lg font-medium text-[#efd9c3] hover:bg-[#766656] transition-colors"
                                >
                                    <span>حلال </span>
                                    <span>HALAL</span>
                                </Link>
                                
                                <div className="my-4 h-px bg-[#da8025]/10" />
                                
                                <div className="flex justify-around py-2">
                                    <Link href="#" className="p-2 text-[#efd9c3] hover:text-orange-400 transition-colors">
                                        <FaInstagram size={24} />
                                    </Link>
                                    <Link href="#" className="p-2 text-[#efd9c3] hover:text-orange-400 transition-colors">
                                        <SlSocialFacebook size={22} />
                                    </Link>
                                    <Link href="#" className="p-2 text-[#efd9c3] hover:text-orange-400 transition-colors">
                                        <PiTiktokLogoThin size={24} />
                                    </Link>
                                    <Link href="#" className="p-2 text-[#efd9c3] hover:text-orange-400 transition-colors">
                                        <BsTelephone size={24} />
                                    </Link>
                                    <Link href="#" className="p-2 text-[#efd9c3] hover:text-orange-400 transition-colors">
                                        <SlLocationPin size={24} />
                                    </Link>
                                </div>

                               
                            </div>
                        </nav>
                    </div>
                )}

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-2 text-sm text-[#efd9c3] font-medium mr-[14px]">
                    <Link
                        href="/menu"
                        className="flex items-center gap-2 hover:bg-[#766656] px-4 py-2 rounded-xl transition-colors duration-200"
                    >
                        {/* <Menuicon size={18} className="text-[#efd9c3]" /> */}
                        <BsMenuApp size={18} className="text-[#efd9c3]" />
                        <span>MENU</span>
                    </Link>
                    <Link
                        href="/halal"
                        className="flex items-center gap-2 hover:bg-[#766656] px-4 py-2 rounded-xl transition-colors duration-200"
                    >
                        <span>حلال </span>
                        <span className="text-[16px]">HALAL</span>
                    </Link>
                    {/* Conditional rendering for authenticated users vs guests */}
              
                    <Link
                        href="#"
                        title="Call us"
                        className="p-2 rounded transition-colors duration-200 hover:bg-[#766656]"
                    >
                        <BsTelephone size={22} className="text-[#efd9c3]" />
                    </Link>
                    <Link
                        href="#"
                        title="Google Maps"
                        className="p-2 rounded transition-colors duration-200 hover:bg-[#766656]"
                    >
                        <SlLocationPin size={23} className="text-[#efd9c3]" />
                    </Link>
                    <Link
                        href="#"
                        title="Instagram"
                        className="p-2 rounded transition-colors duration-200 hover:bg-[#766656]"
                    >
                        <FaInstagram size={26} className="text-[#efd9c3] opacity-80" />
                    </Link>
                    <Link
                        href="#"
                        title="Facebook"
                        className="p-2 rounded transition-colors duration-200 hover:bg-[#766656]"
                    >
                        <SlSocialFacebook size={24} className="text-[#efd9c3]" />
                    </Link>
                    <Link
                        href="#"
                        title="TikTok"
                        className="p-2 rounded transition-colors duration-200 hover:bg-[#766656]"
                    >
                        <PiTiktokLogoThin size={24} className="text-[#efd9c3]" />
                    </Link>
                </nav>
            </div>
        </header>
    );
}