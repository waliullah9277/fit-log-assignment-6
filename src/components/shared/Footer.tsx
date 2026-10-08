import React from 'react';
import FooterLogo from "@/assets/logo.png"
import Image from 'next/image';

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (

        <section className='bg-[#090A0D] '>
            <div className="container mx-auto flex flex-col md:items-center justify-between gap-4 px-4 py-6 sm:flex-row ">

                {/* Logo & Brand */}
                <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center">
                        <Image
                            src={FooterLogo}
                            alt="Footer Logo"
                            width={0}
                            height={0}
                        />
                    </div>

                    <div className="text-2xl text-center uppercase font-bold tracking-tight">
                        Fitlog
                    </div>
                </div>

                {/* Copyright */}
                <div>
                    <p className="text-sm text-base-content/60">
                        © {currentYear}{" "} FitLog — Workout Library. Train hard, log honest.
                    </p>
                </div>

            </div>
        </section>

    );
};

export default Footer;