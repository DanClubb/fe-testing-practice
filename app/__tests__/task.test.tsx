import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { after, mock } from "node:test";
import Task from "../_components/Task";

const mockTasks = [
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: true },
    { id: 3, title: "Task 3", completed: false },
];

const mockOnDeleteTask = jest.fn();

let index = 0;

describe("", () => {
    beforeEach(() => {
        render(
            <Task task={mockTasks[index]} onDeleteTask={mockOnDeleteTask} />
        );
    });

    afterEach(() => {
        index++;
    });

    it("renders incomplete task correctly", () => {
        const status = screen.getByTestId("status");
        const title = screen.getByRole("heading");
        const deleteBtn = screen.getByRole("button");

        expect(status && title && deleteBtn).toBeInTheDocument();
        expect(status).not.toHaveClass("bg-green-500");
        expect(title).toHaveTextContent("Task 1");
    });

    it("renders complete task correctly", () => {
        const status = screen.getByTestId("status");
        const title = screen.getByRole("heading");
        const deleteBtn = screen.getByRole("button");

        expect(status && title && deleteBtn).toBeInTheDocument();
        expect(status).toHaveClass("bg-green-500");
        expect(title).toHaveTextContent("Task 2");
        expect(title).toHaveClass("line-through");
    });

    it(" delete button correctly removes task", () => {
        const deleteBtn = screen.getByRole("button");

        fireEvent.click(deleteBtn);

        expect(mockOnDeleteTask).toHaveBeenCalledWith(mockTasks[2].id);
        expect(mockOnDeleteTask).toHaveBeenCalledTimes(1);
    });
});
