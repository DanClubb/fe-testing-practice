import { useState } from "react";

type AddTaskProps = {
    tasks: {
        id: number;
        title: string;
        completed: boolean;
    }[];
    onAddTask: (newTask: {
        id: number;
        title: string;
        completed: boolean;
    }) => void;
};

function AddTask({ tasks, onAddTask }: AddTaskProps) {
    const [newTask, seNewtTask] = useState("");

    const handleAddTask = () => {
        onAddTask({
            id: 1,
            title: newTask,
            completed: false,
        });
    };

    return (
        <div className="flex items-center gap-2">
            <input
                className="bg-slate-800 placeholder:text-orange-200 w-full rounded-md px-4 py-2"
                type="text"
                placeholder="Write your new task"
                onChange={(e) => seNewtTask(e.target.value)}
            />
            <button
                className="bg-green-700 text-white text-3xl rounded-full min-w-10 min-h-10"
                onClick={handleAddTask}
            >
                +
            </button>
        </div>
    );
}

export default AddTask;
