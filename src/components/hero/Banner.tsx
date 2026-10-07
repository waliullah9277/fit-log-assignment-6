import React from 'react';
import BannerImg from "@/assets/banner.png"
import Image from 'next/image';

const Banner = () => {
    return (
        <div className="my-6 rounded-3xl border-slate-50 bg-[#15171D]">
            <div className="flex flex-col items-center justify-between gap-8 p-6 sm:p-8 lg:flex-row lg:p-10">

                {/* Left Content */}
                <div className="w-full lg:w-1/2">
                    <h4 className="mb-4 text-sm font-bold uppercase text-[#C2F800]">
                        Workout Library
                    </h4>

                    <h2 className="mb-5 text-2xl font-extrabold uppercase leading-[1.05] tracking-tight text-white sm:text-3xl lg:text-4xl">
                        Train with intent. Log <br /> every set.
                    </h2>

                    <p className="mb-7 text-sm w-90 md:w-100 text-gray-400 sm:text-base">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into {`today's`} plan, and watch the {`week's`} work add up.
                    </p>

                    <button
                        className="rounded-3xl bg-[#C2F800] px-7 py-3 text-center text-sm font-bold cursor-pointer text-[#15171D]">
                        Browse Workouts
                        <span className="ml-2 text-lg">→</span>
                    </button>
                </div>

                {/* Right Image */}
                <div className="w-full lg:w-1/2">
                    <Image
                        src={BannerImg}
                        width={600}
                        height={500}
                        alt="Workout Banner"
                        className="h-full w-full sm:h-87.5 lg:h-100"
                    />
                </div>

            </div>
        </div>
    );
};

export default Banner;