'use client'
import { WorkoutContext } from '@/context/WorkoutContext';
import { IWorkout } from '@/types/exercise.type';
import React, { Dispatch, SetStateAction, useContext } from 'react';
import { GiWeightLiftingUp } from 'react-icons/gi';
import { toast } from 'react-toastify';

const AddToPlanButton = ({ workout }: { workout: IWorkout }) => {

    const { addToPlan, setAddToPlan } = useContext(WorkoutContext) as {
        addToPlan: IWorkout[]
        setAddToPlan: Dispatch<SetStateAction<IWorkout[]>>
    }

    const handleAddToPlanButton = () => {
        // console.log("handle button triggred", workout);
        const alreadyExists = addToPlan.some(
            (item) => item.id === workout.id
        );

        if (alreadyExists) {
            toast.error('Already added to your plan');
            return;
        }

        setAddToPlan([...addToPlan, workout])
        toast.success('Workout added to your plan!');
    }

    return (
        <div>
            <button onClick={() => handleAddToPlanButton()} className="flex items-center gap-2 rounded-xl bg-[#C2F800] px-5 py-3 text-sm font-semibold text-black hover:bg-[#d5ff45] cursor-pointer">
                <GiWeightLiftingUp className="text-lg" />
                Add to {`today's`} plan
            </button>
        </div>
    );
};

export default AddToPlanButton;