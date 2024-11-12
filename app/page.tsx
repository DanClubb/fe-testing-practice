"use client";

import { useState } from "react";
import AddTask from "./_components/AddTask";
import Progress from "./_components/Progress";
import Task from "./_components/Task";

type Task = { id: number; title: string; completed: boolean };

export default function Page() {
    const [tasks, setTasks] = useState<Task[]>([]);

    const handleAddTask = (newTask: {
        id: number;
        title: string;
        completed: boolean;
    }) => {
        setTasks([...tasks, newTask]);
    };

    const handleDeleteTask = (id: number) => {
        setTasks(tasks.filter((t) => t.id !== id));
    };

    const handleStatusChange = (id: number) => {
        setTasks((prev) => {
            const tasks = prev.map((task) => {
                if (task.id === id) {
                    return { ...task, completed: !task.completed };
                }
                return task;
            });
            return tasks;
        });
    };

    return (
        <>
            <Progress tasks={tasks} />
            <AddTask tasks={tasks} onAddTask={handleAddTask} />
            {tasks.map((task) => (
                <Task
                    task={task}
                    onDeleteTask={handleDeleteTask}
                    onStatusChange={handleStatusChange}
                    key={task.id}
                />
            ))}
        </>
    );
}
