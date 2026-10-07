import AddToPlanButton from '@/components/workoutDetails/AddToPlanButton';
import SaveForLatterButton from '@/components/workoutDetails/SaveForLatterButton';
import { IWorkout } from '@/types/exercise.type';
import Image from 'next/image';

interface IWorkoutDetailsPageProps {
    params: Promise<{ id: string }>;
}

export const instant = false;

const getWorkout = async (): Promise<IWorkout[]> => {
    "use cache";

    const res = await fetch(
        'https://api.abcz.workers.dev/api/fitlog'
    );

    if (!res.ok) {
        throw new Error('Failed to fetch workout');
    }

    return res.json();
};

const WorkoutDetailPage = async ({
    params,
}: IWorkoutDetailsPageProps) => {
    const { id } = await params;

    const workoutData = await getWorkout();

    const workout = workoutData.find(
        (item) => String(item.id) === String(id)
    );

    if (!workout) {
        return (
            <div className="container mx-auto px-4 py-10">
                <h3 className="text-4xl font-semibold text-white text-center">
                    Workout not found
                </h3>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

                {/* Left - Image */}
                <div className="relative h-87.5 overflow-hidden rounded-2xl border border-white/10 bg-[#15171D] lg:h-full">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        priority
                        className="object-cover"
                    />
                </div>

                {/* Right - Content */}
                <div className="flex flex-col">

                    {/* Workout Name */}
                    <h1 className="text-2xl font-extrabold uppercase tracking-wide text-white md:text-3xl">
                        {workout.name}
                    </h1>

                    {/* Description */}
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400 md:text-base">
                        {workout.description}
                    </p>

                    {/* Muscle Groups */}
                    <div className="mt-4 flex flex-wrap gap-2">
                        {workout.muscleGroups.map((muscle) => (
                            <span
                                key={muscle}
                                className="rounded-full bg-[#C2F800] px-3 py-1 text-xs font-medium text-black"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    {/* Workout Information */}
                    <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-[#15171D]">

                        {/* Equipment */}
                        <div className="grid grid-cols-2 items-center border-b border-white/10 px-4 py-3">
                            <span className="text-xs font-bold uppercase text-gray-400">
                                Equipment
                            </span>

                            <span className="text-sm text-white">
                                {workout.equipment}
                            </span>
                        </div>

                        {/* Difficulty */}
                        <div className="grid grid-cols-2 items-center border-b border-white/10 px-4 py-3">
                            <span className="text-xs font-bold uppercase text-gray-400">
                                Difficulty
                            </span>

                            <span className="text-sm text-white">
                                {workout.difficulty}
                            </span>
                        </div>

                        {/* Sets */}
                        <div className="grid grid-cols-2 items-center border-b border-white/10 px-4 py-3">
                            <span className="text-xs font-bold uppercase text-gray-400">
                                Sets
                            </span>

                            <span className="text-sm text-white">
                                {workout.sets}
                            </span>
                        </div>

                        {/* Reps */}
                        <div className="grid grid-cols-2 items-center border-b border-white/10 px-4 py-3">
                            <span className="text-xs font-bold uppercase text-gray-400">
                                Reps
                            </span>

                            <span className="text-sm text-white">
                                {workout.reps}
                            </span>
                        </div>

                        {/* Duration */}
                        <div className="grid grid-cols-2 items-center border-b border-white/10 px-4 py-3">
                            <span className="text-xs font-bold uppercase text-gray-400">
                                Duration
                            </span>

                            <span className="text-sm text-white">
                                {workout.duration} min
                            </span>
                        </div>

                        {/* Calories */}
                        <div className="grid grid-cols-2 items-center border-b border-white/10 px-4 py-3">
                            <span className="text-xs font-bold uppercase text-gray-400">
                                Calories
                            </span>

                            <span className="text-sm text-white">
                                {workout.caloriesBurned} kcal
                            </span>
                        </div>

                        {/* Rating */}
                        <div className="grid grid-cols-2 items-center px-4 py-3">
                            <span className="text-xs font-bold uppercase text-gray-400">
                                Rating
                            </span>

                            <span className="flex items-center gap-1 text-sm text-white">
                                {workout.rating}
                            </span>
                        </div>
                    </div>

                    {/* Instructions */}
                    <div className="mt-4">
                        <h2 className="mb-4 text-xl font-bold uppercase text-white">
                            Instructions
                        </h2>

                        <ol className="space-y-2">
                            {workout.instructions.map(
                                (instruction, index) => (
                                    <li
                                        key={index}
                                        className="flex gap-2 text-sm text-gray-300"
                                    >
                                        <span className="font-semibold">
                                            {index + 1}.
                                        </span>

                                        <span>{instruction}</span>
                                    </li>
                                )
                            )}
                        </ol>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-6 flex flex-wrap gap-3">

                        <AddToPlanButton workout={workout}></AddToPlanButton>

                        <SaveForLatterButton workout={workout}></SaveForLatterButton>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkoutDetailPage;