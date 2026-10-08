'use client'
import { IWorkout } from "@/types/exercise.type";
import { createContext, ReactNode, useState } from "react";
import { toast } from "react-toastify";

export interface IWorkoutContext {
    addToPlan: IWorkout[];
    saveForLater: IWorkout[];

    handleAddToPlan: (workout: IWorkout) => void;
    handleSaveForLater: (workout: IWorkout) => void;

    removeFromPlan: (id: number) => void;
    markAsDoneFromPlan: (id: number) => void;

    removeFromSave: (id: number) => void;

}

export const WorkoutContext = createContext({})

const WorkoutProvider = ({ children }: { children: ReactNode }) => {

    const [addToPlan, setAddToPlan] = useState<IWorkout[]>([])
    const [saveForLater, setSaveForLater] = useState<IWorkout[]>([])

    const removeFromPlan = (id: number) => {
        setAddToPlan((prev) => prev.filter((workout) => workout.id !== id))
        toast.success('Removed from your plan');
    }
    const markAsDoneFromPlan = (id: number) => {
        setAddToPlan((prev) => prev.filter((workout) => workout.id !== id))
        toast.success('Workout Logged - Nice Wrok!');
    }

    const removeFromSave = (id: number) => {
        setSaveForLater((prev) => prev.filter((workout) => workout.id !== id))
        toast.success('Removed from Saved');
    }

    const shareData = {
        addToPlan, setAddToPlan, saveForLater, setSaveForLater, removeFromPlan, markAsDoneFromPlan, removeFromSave
    }



    return (
        <WorkoutContext.Provider value={shareData} >{children}</WorkoutContext.Provider>
    );
};



export default WorkoutProvider;