var todos = [];

var input;
while (input !== "quit") {
    // ask for a new input
    input = prompt("What would you like to do ?");

    // handle input
    if (input === "list") {
        listTodos();
    } else if (input === "new") {
        addTodo();
    } else if (input === "delete") {
        deleteTodo();
    }
}

console.log("You quit the App");

function deleteTodo() {
    // ask for index of todo to be deleted
    var index = prompt("Enter index of todo to delete");
    // delete that todo
    todos.splice(index, 1);
    console.log("Deleted Todo");
}

function addTodo() {
    // ask for a new toto
    var newTodo = prompt("Enter new todo");
    // add to todos array
    todos.push(newTodo);
    console.log("Added Todo");
}

function listTodos() {
    console.log("**********");
    todos.forEach(function (todo, i) {
        console.log(i + ": " + todo);
    })
    console.log("**********");
}