import Link from 'next/link';
import React from 'react';
import Logo from "@/assets/logo.png"
import Image from 'next/image';

const Navbar = () => {

    const links = <>
        <li><Link href="/">Workouts</Link></li>
        <li><Link href="/workouts">My Plan</Link></li>
    </>
    return (
        <nav className='bg-base-100 shadow-sm'>
            <div className="navbar container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>

                <div>
                    <Link href='/' className='flex items-center gap-1.5'>
                        <Image src={Logo} width={0} height={0} alt='Fit Log Logo'></Image>
                        <div className="text-2xl">FITLOG</div>
                    </Link>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            <div className="navbar-end">
                <a className="btn">Plan</a>
                <a className="btn">Saved</a>
            </div>

        </div>
        </nav>
    );
};

export default Navbar;