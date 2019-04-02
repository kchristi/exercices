var todos = [];

var input;
while (input !== "quit") {
    // ask for a new input
    input = prompt("What would you like to do ?");

    // handle input
    if (input === "list") {
        console.log(todos);
    } else if (input === "new") {
        // ask for a new toto
        var newTodo = prompt("Enter new todo");
        // add to todos array
        todos.push(newTodo);
    }

}

console.log("You quit the App");