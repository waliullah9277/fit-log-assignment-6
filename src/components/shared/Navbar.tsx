'use client';

import Link from 'next/link';
import React, { useContext } from 'react';
import { usePathname } from 'next/navigation';

import Logo from '@/assets/logo.png';
import Image from 'next/image';

import { WorkoutContext } from '@/context/WorkoutContext';

const Navbar = () => {
    const { addToPlan, saveForLater } = useContext(WorkoutContext);

    const pathname = usePathname();

    const links = (
        <>
            <li>
                <Link
                    href="/workouts"
                    className={`transition-all duration-200 ${
                        pathname.startsWith('/workouts')
                            ? 'bg-[#191C22] font-semibold text-[#C2F800]'
                            : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                >
                    Workouts
                </Link>
            </li>

            <li>
                <Link
                    href="/my-plan"
                    className={`transition-all duration-200 ${
                        pathname.startsWith('/my-plan')
                            ? 'bg-[#191C22] font-semibold text-[#C2F800]'
                            : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                >
                    My Plan
                </Link>
            </li>
        </>
    );

    return (
        <nav className="sticky top-0 z-50 border-b bg-[#090A0D] border-white/10 shadow-sm backdrop-blur-md">
            <div className="navbar container mx-auto">
                {/* Navbar Start */}
                <div className="navbar-start">
                    {/* Mobile Menu */}
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                aria-label="Menu"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>

                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content z-1 mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
                        >
                            {links}
                        </ul>
                    </div>

                    {/* Logo */}
                    <div>
                        <Link
                            href="/"
                            className="flex items-center gap-1.5"
                        >
                            <Image
                                src={Logo}
                                width={0}
                                height={0}
                                alt="Fit Log Logo"
                            />

                            <div className="text-2xl font-bold">
                                FITLOG
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-1 px-1">
                        {links}
                    </ul>
                </div>

                {/* Navbar End */}
                <div className="navbar-end gap-1">
                    {/* Plan */}
                    <Link href="/my-plan">
                        <div
                            className={`group flex cursor-pointer items-center gap-2 rounded-2xl px-4 py-2 transition-all duration-200 ${
                                pathname.startsWith('/my-plan')
                                    ? 'bg-[#252932]/10'
                                    : 'hover:bg-white/5'
                            }`}
                        >
                            <span
                                className={`text-sm font-semibold ${
                                    pathname.startsWith('/my-plan')
                                        ? 'text-[#C2F800]'
                                        : 'text-white'
                                }`}
                            >
                                Plan
                            </span>

                            <span className="flex h-5 min-w-8 items-center justify-center rounded-lg bg-[#C2F800] px-1.5 text-xs font-bold text-black">
                                {addToPlan.length}
                            </span>
                        </div>
                    </Link>

                    {/* Saved */}
                    <Link href="/my-plan?tab=saved">
                        <div
                            className={`group flex cursor-pointer items-center gap-2 rounded-2xl px-4 py-2 transition-all duration-200 ${
                                pathname.startsWith('/my-plan')
                                    ? 'hover:bg-white/5'
                                    : 'hover:bg-white/5'
                            }`}
                        >
                            <span className="text-sm font-semibold text-gray-300 transition-colors group-hover:text-white">
                                Saved
                            </span>

                            <span className="flex h-5 min-w-8 items-center justify-center rounded-lg border border-slate-300 bg-[#252932] px-1.5 text-xs font-bold text-gray-300">
                                {saveForLater.length}
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
