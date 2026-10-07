'use client';

import Banner from '@/components/homepage/Banner';
import AddToPlanCard from '@/components/shared/AddToPlanCard';
import SaveForLaterCard from '@/components/shared/SaveForLaterCard';
import { WorkoutContext } from '@/context/WorkoutContext';
import { IWorkout } from '@/types/exercise.type';
import Link from 'next/link';
import React, { useContext, useState } from 'react';

const MyPlan = () => {
    const { addToPlan, saveForLater } = useContext(WorkoutContext);

    const [activeTab, setActiveTab] = useState<'today' | 'saved'>('today');

    const currentWorkout = activeTab === "today" ? addToPlan : saveForLater;

    const totalExercise = currentWorkout.length;

    const totalMinutes = currentWorkout.reduce(
        (total: number, workout: IWorkout) =>
            total + workout.duration,
        0
    );

    const totalCalories = currentWorkout.reduce(
        (total: number, workout: IWorkout) =>
            total + workout.caloriesBurned,
        0
    );



    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <div className="mb-6">
                <h2 className="text-3xl font-extrabold uppercase text-white">
                    My Plan
                </h2>

                <p className="mt-1 text-sm text-gray-400">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>

            {/* Summary */}
            <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                {/* Exercises */}
                <div className="rounded-2xl border border-white/10 bg-[#191C22] p-5">
                    <p className="text-sm text-gray-400">
                        Exercises
                    </p>

                    <h3 className="mt-1 text-3xl font-bold text-white">
                        {totalExercise}
                    </h3>
                </div>

                {/* Minutes */}
                <div className="rounded-2xl border border-white/10 bg-[#191C22] p-5">
                    <p className="text-sm text-gray-400">
                        Minutes
                    </p>

                    <h3 className="mt-1 text-3xl font-bold text-white">
                        {totalMinutes}
                    </h3>
                </div>

                {/* Calories */}
                <div className="rounded-2xl border border-white/10 bg-[#191C22] p-5">
                    <p className="text-sm text-gray-400">
                        Calories
                    </p>

                    <h3 className="mt-1 text-3xl font-bold text-white">
                        {totalCalories}
                    </h3>
                </div>
            </div>

            {/* Tabs */}
            <div className="mb-6">
                <div className="flex w-fit rounded-xl border border-white/10 bg-[#191C22] p-1">
                    {/* Today's Plan */}
                    <button
                        type="button"
                        onClick={() => setActiveTab('today')}
                        className={`rounded-lg px-5 cursor-pointer py-2.5 text-sm font-semibold transition-all ${activeTab === 'today'
                            ? 'bg-[#15171D] text-[#C2F800]'
                            : 'text-gray-400 hover:text-white'
                            }`}
                    >
                        {`Today's Plan`}
                    </button>

                    {/* Saved */}
                    <button
                        type="button"
                        onClick={() => setActiveTab('saved')}
                        className={`rounded-lg px-5 cursor-pointer py-2.5 text-sm font-semibold transition-all ${activeTab === 'saved'
                            ? 'bg-[#15171D] text-[#C2F800]'
                            : 'text-gray-400 hover:text-white'
                            }`}
                    >
                        Saved
                    </button>
                </div>
            </div>

            {/* Tab Content */}
            <div className="rounded-2xl">
                {/* Today's Plan */}
                {activeTab === 'today' && (
                    <>
                        {addToPlan.length > 0 ? (
                            <div className="flex flex-col gap-5">
                                {addToPlan.map((workout: IWorkout) => (
                                    <AddToPlanCard
                                        key={workout.id}
                                        workout={workout}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="flex min-h-60 flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-[#191C22] text-center">
                                <h3 className="text-xl font-bold text-white">
                                    Your plan is empty
                                </h3>

                                <p className="mt-2 text-sm text-gray-400">
                                    Add workouts to {`today's`} plan and they will
                                    appear here.
                                </p>

                                <Link
                                    href="/workouts"
                                    className="group mt-5 inline-flex items-center gap-2 rounded-xl bg-[#C2F800] px-5 py-3 text-sm font-bold text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#d4ff33] hover:shadow-[0_8px_25px_rgba(194,248,0,0.2)]"
                                >
                                    <span>Go To Workout</span>

                                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                                        →
                                    </span>
                                </Link>
                            </div>
                        )}
                    </>
                )}

                {/* Saved */}
                {activeTab === 'saved' && (
                    <>
                        {saveForLater.length > 0 ? (
                            <div className="flex flex-col gap-5">
                                {saveForLater.map((workout: IWorkout) => (
                                    <SaveForLaterCard
                                        key={workout.id}
                                        workout={workout}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="flex min-h-60 flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-[#191C22] text-center">
                                <h3 className="text-xl font-bold text-white">
                                    Nothing saved yet
                                </h3>

                                <p className="mt-2 text-sm text-gray-400">
                                    Save your favorite workouts and they will
                                    appear here.
                                </p>

                                <Link
                                    href="/workouts"
                                    className="group mt-5 inline-flex items-center gap-2 rounded-xl bg-[#C2F800] px-5 py-3 text-sm font-bold text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#d4ff33] hover:shadow-[0_8px_25px_rgba(194,248,0,0.2)]"
                                >
                                    <span>Go To Workout</span>

                                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                                        →
                                    </span>
                                </Link>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default MyPlan;
