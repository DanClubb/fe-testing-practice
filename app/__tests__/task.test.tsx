import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Task from "../_components/Task";
import Page from "../page";

const mockTasks = [
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: true },
    { id: 3, title: "Task 3", completed: false },
    { id: 4, title: "Task 4", completed: false },
    { id: 5, title: "Task 5", completed: true },
];

const mockOnDeleteTask = jest.fn();
const mockOnStatusChange = jest.fn();

let index = 0;

describe("", () => {
    beforeEach(() => {
        render(
            <Task
                task={mockTasks[index]}
                onDeleteTask={mockOnDeleteTask}
                onStatusChange={mockOnStatusChange}
            />
        );
    });

    afterEach(() => {
        index++;
        jest.clearAllMocks();
    });

    it("renders incomplete task correctly", () => {
        const status = screen.getByTestId("status");
        const title = screen.getByRole("heading");
        const deleteBtn = screen.getByTestId("delte-btn");

        expect(status && title && deleteBtn).toBeInTheDocument();
        expect(status).not.toHaveClass("bg-green-500");
        expect(title).toHaveTextContent("Task 1");
    });

    it("renders complete task correctly", () => {
        const status = screen.getByTestId("status");
        const title = screen.getByRole("heading");
        const deleteBtn = screen.getByTestId("delte-btn");

        expect(status && title && deleteBtn).toBeInTheDocument();
        expect(status).toHaveClass("bg-green-500");
        expect(title).toHaveTextContent("Task 2");
        expect(title).toHaveClass("line-through");
    });

    it("delete button correctly removes task", () => {
        const deleteBtn = screen.getByTestId("delte-btn");

        fireEvent.click(deleteBtn);

        expect(mockOnDeleteTask).toHaveBeenCalledWith(mockTasks[index].id);
        expect(mockOnDeleteTask).toHaveBeenCalledTimes(1);
    });
});
