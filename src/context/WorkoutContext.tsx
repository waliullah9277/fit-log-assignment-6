'use client'
import { IWorkout } from "@/types/exercise.type";
import { createContext, ReactNode, useState } from "react";


export const WorkoutContext = createContext({})

const WorkoutProvider = ({ children }: { children: ReactNode }) => {

    const [addToPlan, setAddToPlan] = useState<IWorkout[]>([])
    const [saveForLater, setSaveForLater] = useState<IWorkout[]>([])

    const shareData = {
        addToPlan, setAddToPlan, saveForLater, setSaveForLater
    }


    return (
        <WorkoutContext.Provider value={shareData} >{children}</WorkoutContext.Provider>
    );
};

export default WorkoutProvider;