import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import AddTask from "../_components/AddTask";

let mockTasks = [
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: false },
    { id: 3, title: "Task 3", completed: false },
];

const mockOnAddTask = jest.fn();

it("renders add task component", () => {
    render(<AddTask tasks={mockTasks} onAddTask={mockOnAddTask} />);

    const taskInput = screen.getByRole("textbox");
    const addBtn = screen.getAllByRole("button", { name: "+" });

    expect(taskInput && addBtn[0]).toBeInTheDocument();
});

it("add task function is called on button click", () => {
    render(<AddTask tasks={mockTasks} onAddTask={mockOnAddTask} />);

    const newTaskName = "Test Task";

    const taskInput = screen.getByRole("textbox");
    const addBtn = screen.getAllByRole("button", { name: "+" });

    fireEvent.change(taskInput, { target: { value: newTaskName } });
    fireEvent.click(addBtn[0]);

    expect(mockOnAddTask).toHaveBeenCalledWith({
        completed: false,
        id: 1,
        title: newTaskName,
    });
    expect(mockOnAddTask).toHaveBeenCalledTimes(1);
});
