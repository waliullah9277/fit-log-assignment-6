// import React from 'react';

// const WorkoutsPage = () => {
//     return (
//         <div className='container mx-auto'>
//             <h1>Workout</h1>
//         </div>
//     );
// };

// export default WorkoutsPage;


import WorkoutCard from '@/components/shared/WorkoutCard';
import { IWorkout } from '@/types/exercise.type';
import Link from 'next/link';

const getWorkout = async (): Promise<IWorkout[]> => {
    "use cache";

    const res = await fetch(
        'https://api.abcz.workers.dev/api/fitlog'
    );

    if (!res.ok) {
        throw new Error("Failed to fetch workout");
    }

    return res.json();
};

const WorkoutsPage = async () => {
    const workoutData = await getWorkout();

    return (
        <section className="py-8 container mx-auto">

            {/* Section Header */}
            <div className="mb-6">
                <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white">
                    The Library
                </h2>

                <p className="mt-1 text-sm text-gray-400">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>

            {/* Workout Cards */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {workoutData.map((workout: IWorkout) => {
                    return (
                        <Link key={workout.id} href={`/exercise/${workout.id}`}
                            className="group overflow-hidden rounded-2xl border border-white/10 bg-[#15171D] transition-all duration-300 hover:-translate-y-1 hover:border-[#C2F800]/40">
                            <WorkoutCard workout={workout}></WorkoutCard>
                        </Link>
                    )
                })}
            </div>
        </section>
    );
};

export default WorkoutsPage;