#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
let exit;
while (exit != "Exit") {
    let tasks = await inquirer.prompt([
        {
            name: "task",
            type: "list",
            message: "What Do You Prefer :",
            choices: ["Add", "Delete", "Addmore", "Read", "Update", "Exit"],
        },
    ]);
    if (tasks.task === "Add") {
        while (condition) {
            let add = await inquirer.prompt([
                {
                    name: "Q1",
                    type: "input",
                    message: "What would you like to add in your todos :",
                },
                {
                    name: "Q2",
                    type: "confirm",
                    message: "Would you like to add more in your todos :",
                    default: "true",
                },
            ]);
            todos.push(add.Q1);
            console.log(todos);
            condition = add.Q2;
        }
    }
    else if (tasks.task === "Addmore") {
        let addmore = await inquirer.prompt([
            {
                name: "Q3",
                type: "input",
                message: "Would you like to add more in your todos :"
            },
        ]);
        todos.push(addmore.Q3);
        console.log(todos);
    }
    else if (tasks.task === "Update") {
        let updateTask = await inquirer.prompt([
            {
                name: "update",
                type: "list",
                message: "What do you want to update in your todos list :",
                choices: todos,
            },
            {
                name: "updatedElement",
                type: "input",
                message: "Enter your task :"
            },
        ]);
        // let index = parseInt(updateTask.update);
        // if(index >= 0 && index < todos.length){
        //     todos[index] = updateTask.updatedElement;
        //     console.log("Task updated successfully.");
        // }
        // console.log(todos);
        let updateItem = todos.findIndex(task => task === updateTask.update);
        todos.splice(updateItem, -1, updateTask.updatedElement);
        console.log(todos);
    }
    else if (tasks.task === "Delete") {
        let deleteTask = await inquirer.prompt([
            {
                name: "delete",
                type: "input",
                message: "What task you want to delete :",
                choices: todos,
            },
        ]);
        // let index = parseInt(deleteTask.delete);
        // if(index >= 0 && index < todos.length){
        //     todos.splice(index, 1);
        //     console.log("Task deleted successfully.");
        // }
        // console.log(todos);
        let deleteItem = todos.indexOf(deleteTask.delete);
        todos.splice(deleteItem, 1);
        console.log(todos);
    }
    else if (tasks.task === "Read") {
        console.log(todos.length);
    }
    else if (tasks.task === "Exit") {
        exit = "Exit";
        console.log("You have successfully exit the todos list.");
    }
}
