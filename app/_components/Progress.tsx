type ProgressProps = {
    tasks: { id: number; title: string; completed: boolean }[];
};

function Progress({ tasks }: ProgressProps) {
    const completedTasks = tasks.filter((task) => task.completed);
    return (
        <div className="flex justify-center items-center gap-4 border border-orange-200 rounded-lg px-10 py-6 w-fit">
            <div>
                <h2 className="text-xl">Tasks complete</h2>
                <p className="text-md" data-testid="message">
                    Keep it up
                </p>
            </div>
            <div className="flex items-center justify-center bg-green-700 rounded-full h-32 w-32 text-4xl">
                <span data-testid="number-of-completed-tasks">
                    {completedTasks.length}
                </span>{" "}
                / <span data-testid="number-of-tasks">{tasks.length}</span>
            </div>
        </div>
    );
}

export default Progress;
