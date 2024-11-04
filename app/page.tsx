"use client";

import { useState } from "react";
import AddTask from "./_components/AddTask";
import Progress from "./_components/Progress";

export default function Page() {
    const [tasks, setTasks] = useState([
        { id: 1, title: "Task 1", completed: true },
        { id: 2, title: "Task 2", completed: true },
        { id: 3, title: "Task 3", completed: false },
    ]);

    const handleAddTask = (newTask: {
        id: number;
        title: string;
        completed: boolean;
    }) => {
        setTasks([...tasks, newTask]);
    };

    return (
        <>
            <Progress tasks={tasks} />
            <AddTask tasks={tasks} onAddTask={handleAddTask} />
        </>
    );
}
