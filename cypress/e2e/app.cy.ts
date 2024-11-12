describe("create a task", () => {
    it("should enter task name to the input field and click add button", () => {
        // Start from the index page
        cy.visit("http://localhost:3000/");

        cy.get('input[type="text"]').type("Test Task");
        cy.get("button").click();

        cy.get("div[id='task']").should("have.length", 1);
    });
});

describe("Complete and delete", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");

        cy.get('input[type="text"]').type("Test Task");
        cy.get("button").click();

        cy.get("div[id='task']").should("have.length", 1);
    });

    it("Mark the task as complete", () => {
        cy.wait(500);
        // Start from the index page

        cy.get('button[data-testid="status"]').click();

        cy.get('button[data-testid="status"]').should(
            "have.class",
            "bg-green-500"
        );
    });

    it("Delete the task", () => {
        // Start from the index page
        cy.wait(500);

        cy.get("div[id='task']").should("have.length", 1);

        cy.get('button[data-testid="delte-btn"]').click();

        cy.get("div[id='task']").should("have.length", 0);
    });
});
