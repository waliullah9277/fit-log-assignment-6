'use client'

import { WorkoutContext } from '@/context/WorkoutContext';
import { IWorkout } from '@/types/exercise.type';
import { Dispatch, SetStateAction, useContext } from 'react';
import { FiBookmark } from 'react-icons/fi';
import { toast } from 'react-toastify';

const SaveForLatterButton = ({ workout }: { workout: IWorkout }) => {

    const { saveForLater, setSaveForLater } = useContext(WorkoutContext) as {
        saveForLater: IWorkout[]
        setSaveForLater: Dispatch<SetStateAction<IWorkout[]>>
    }

    const handleSaveForLatterButton = () => {
        // console.log("handle button triggred", workout);
        const alreadyExists = saveForLater.some(
            (item) => item.id === workout.id
        );

        if (alreadyExists) {
            toast.error('Already Saved to your plan');
            return;
        }

        setSaveForLater([...saveForLater, workout])
        toast.success('Workout Saved to your plan!');
    }

    return (
        <div>
            <button onClick={() => handleSaveForLatterButton()} className="flex cursor-pointer items-center gap-2 rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-white hover:bg-gray-900">
                <FiBookmark className="text-lg" />
                Save for later
            </button>
        </div>
    );
};

export default SaveForLatterButton;