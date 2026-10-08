import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
    title: "My Plan | FitLog",
    description: "Manage your workout plan and saved workouts.",
};

export default function MyPlanLayout({
    children,
}: {
    children: ReactNode;
}) {
    return children;
}