import type { Metadata } from "next";
import { ReactNode } from "react";

interface Workout {
    id: string;
    name: string;
}


export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> {

    const { id } = await params;

    const res = await fetch(
        `https://api.abcz.workers.dev/api/fitlog/${id}`
    );

    const workout: Workout = await res.json();

    return {
        title: `${workout.name} | FitLog`,
        description: `Details about ${workout.name} workout.`,
    };
}

export default function WorkoutDetailsLayout({
    children,
}: {
    children: ReactNode;
}) {
    return children;
}