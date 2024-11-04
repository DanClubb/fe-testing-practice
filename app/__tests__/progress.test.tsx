import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Progress from "../_components/Progress";

let mockTasks = [
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: false },
    { id: 3, title: "Task 3", completed: false },
];

it("renders a progress component", () => {
    render(<Progress tasks={mockTasks} />);

    const title = screen.getByRole("heading", { name: "Tasks complete" });
    const message = screen.getByTestId("message");
    const numberOfTasks = screen.getByTestId("number-of-tasks");
    const numberOfCompletedTasks = screen.getByTestId(
        "number-of-completed-tasks"
    );

    expect(
        title && message && numberOfTasks && numberOfCompletedTasks
    ).toBeInTheDocument();
    expect(numberOfTasks.textContent).toBe("3");
    expect(numberOfCompletedTasks.textContent).toBe("0");
});

it("tasks completed is correctly reflected in ui", () => {
    mockTasks[0].completed = true;

    render(<Progress tasks={mockTasks} />);

    const numberOfTasks = screen.getByTestId("number-of-tasks");
    const numberOfCompletedTasks = screen.getByTestId(
        "number-of-completed-tasks"
    );

    expect(numberOfTasks.textContent).toBe("3");
    expect(numberOfCompletedTasks.textContent).toBe("1");
});
