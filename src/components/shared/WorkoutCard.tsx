import { IWorkout } from '@/types/exercise.type';
import Image from 'next/image';
import React from 'react';
import { FaFire } from 'react-icons/fa';
import { FiClock, FiStar } from 'react-icons/fi';

interface IWorkoutCardProps {
    workout: IWorkout;
}

const WorkoutCard = ({ workout }: IWorkoutCardProps) => {
    return (
        <div>
            {/* Image */}
            <div className="relative h-52 w-full overflow-hidden">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="p-5">

                {/* Muscle Groups */}
                <div className="mb-4 flex flex-wrap gap-2">
                    {workout.muscleGroups.map((muscle) => (
                        <span
                            key={muscle}
                            className="rounded-full bg-[#C2F800] px-3 py-1 text-xs font-medium text-black"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

                {/* Name */}
                <h2 className="mb-2 text-xl font-extrabold uppercase tracking-wide text-white">
                    {workout.name}
                </h2>

                {/* Equipment */}
                <p className="mb-4 text-sm text-gray-400">
                    {workout.equipment}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 text-sm text-gray-200">
                    <div className="flex items-center gap-1.5">
                        <FiClock className="text-lg text-[#C2F800]" />
                        <span>{workout.duration} min</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <FaFire className="text-lg text-[#C2F800]" />
                        <span>{workout.caloriesBurned} kcal</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <FiStar className="text-lg text-[#C2F800]" />
                        <span>{workout.rating}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkoutCard;