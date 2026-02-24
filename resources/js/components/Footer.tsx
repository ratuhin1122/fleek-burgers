import { FaPhoneAlt, FaFacebook, FaTiktok } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";

import { PiTiktokLogoThin } from "react-icons/pi";
import { SlSocialFacebook } from "react-icons/sl";
import { SlLocationPin } from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "@inertiajs/react";

const Footer = () => {
  return (
    <footer className="relative z-20 border-t border-white/5 bg-[#0E0502]  py-16 text-[#EFD9C3] lg:rounded-4xl md:rounded-3xl md:mx-5 md:px-2 lg:mx-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 md:flex-row md:items-start md:justify-between">
        
        {/* Left side text */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <div className="space-y-2">
            <p className="text-2xl font-bold tracking-tight text-orange-400 md:text-3xl">
              We are not fast food.
            </p>
            <p className="text-sm font-medium leading-relaxed text-[#A48E75] md:max-w-md md:text-base">
              All our food is made fresh, and it can take a minimum of 15 minutes
              to complete your order.
            </p>
          </div>
          
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#EFD9C3]/40">Our Commitment</p>
            <p className="text-sm text-[#A48E75]">
              All our food is cooked to the internal temperature required by the CFIA.
            </p>
            <p className="text-sm text-[#A48E75]">
              If you have any food allergies, please advise us before ordering.
            </p>
          </div>
        </div>

        {/* Right side links & info */}
        <div className="flex flex-col items-center gap-6 md:items-end md:gap-8">
          <div className="flex items-center gap-2">
            {[
              { icon: <BsTelephone size={20} />, label: "Call us", href: "#" },
              { icon: <SlLocationPin size={22} />, label: "Location", href: "#" },
              { icon: <FaInstagram size={18} />, label: "Instagram", href: "#" },
              { icon: <SlSocialFacebook size={20} />, label: "Facebook", href: "#" },
              { icon: <PiTiktokLogoThin size={22} />, label: "TikTok", href: "#" },
            ].map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                aria-label={item.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/5 bg-white/5 text-[#EFD9C3] transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:bg-orange-500/10 hover:text-orange-400 shadow-lg hover:shadow-orange-900/10"
              >
                {item.icon}
              </Link>
            ))}
          </div>

          <div className="flex flex-col items-center gap-2 md:items-end">
            <p className="flex items-center gap-2 text-sm text-[#A48E75]">
              Questions? Reach us at
              <a
                href="mailto:info@burgersonfleek.ca"
                className="font-medium text-orange-300 underline decoration-orange-300/50 decoration-2 underline-offset-4 transition-all hover:text-white hover:decoration-orange-400"
              >
                info@burgersonfleek.ca
              </a>
            </p>
            <p className="text-xs text-[#A48E75]/60 md:text-sm">
              &copy; {new Date().getFullYear()} Burgers on Fleek. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
