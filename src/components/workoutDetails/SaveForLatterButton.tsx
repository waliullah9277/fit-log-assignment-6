'use client'

import { WorkoutContext } from '@/context/WorkoutContext';
import { IWorkout } from '@/types/exercise.type';
import { Dispatch, SetStateAction, useContext } from 'react';
import { FiBookmark } from 'react-icons/fi';

const SaveForLatterButton = ({ workout }: { workout: IWorkout }) => {

    const { saveForLater, setSaveForLater } = useContext(WorkoutContext) as {
        saveForLater: IWorkout[]
        setSaveForLater: Dispatch<SetStateAction<IWorkout[]>>
    }

    const handleSaveForLatterButton = () => {
        console.log("handle button triggred", workout);

        setSaveForLater([...saveForLater, workout])
        alert(`Save for latter ${workout}`)
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