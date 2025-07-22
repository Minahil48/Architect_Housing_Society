"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
    const navbarLinks = [
        {
            link: "/",
            label: "Home",
        },
        {
            link: "/anouncements",
            label: "Anouncements",
        },
        {
            link: "/gallery",
            label: "Gallery",
        },
    ]
    return (
        <nav className=" bg-white top-0 py-6 text-primary flex items-start justify-center gap-10 uppercase text-sm tracking-wide">
            {navbarLinks.map((navbarLink, index) => (
                <div key={navbarLink.label + index} className="flex flex-col group gap-1">
                    <Link href={navbarLink.link}>{navbarLink.label}</Link>
                    <div className="group-hover:w-full transition-all ease-in duration-150 w-0 h-[1px] bg-secondary"></div>
                </div>
            ))}
        </nav>

    )
}

export default Navbar
