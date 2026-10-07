import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiClock, FiStar, FiX } from 'react-icons/fi';
import { GiFire } from 'react-icons/gi';

const SaveForLaterCard = ({workout}) => {
    return (
        <div>
            <div
                key={workout.id}
                className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-[#191C22] p-5 md:flex-row md:items-center"
            >

                <div className="relative h-32 w-full shrink-0 overflow-hidden rounded-2xl md:h-32 md:w-48">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="flex-1">

                    <h3 className="text-xl font-extrabold uppercase tracking-wide text-white">
                        {workout.name}
                    </h3>

                    <p className="mt-1 text-sm text-gray-400">
                        {workout.equipment}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-200">

                        <div className="flex items-center gap-1.5">
                            <FiClock className="text-lg text-[#C2F800]" />
                            <span>
                                {workout.duration} min
                            </span>
                        </div>

                        <div className="flex items-center gap-1.5">
                            <GiFire className="text-lg text-[#C2F800]" />
                            <span>
                                {workout.caloriesBurned} kcal
                            </span>
                        </div>

                        <div className="flex items-center gap-1.5">
                            <FiStar className="text-lg text-[#C2F800]" />
                            <span>
                                {workout.rating}
                            </span>
                        </div>

                    </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">

                    <Link
                        href={`/workouts/${workout.id}`}
                        className="rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white hover:border-white"
                    >
                        View Details
                    </Link>


                    <button
                        type="button"
                        className="cursor-pointer p-2 text-gray-300 hover:text-red-400"
                    >
                        <FiX className="text-xl" />
                    </button>

                </div>

            </div>
        </div>
    );
};

export default SaveForLaterCard;