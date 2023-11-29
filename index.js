// import inquirer
const inquirer = require("inquirer");

// import file system module
const fs = require("fs");

// import classes from .lib/shapes directory
const { Triangle, Circle, Square } = require("./lib/shapes");

// Function writes the SVG file using user answers from inquirer prompts
function writeToFile(fileName, answers) {
    // File starts as an empty string
    let svgString = "";
    // Sets width and height of logo container
    svgString =
        '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    // <g> tag wraps <text> tag so that user font input layers on top of polygon -> not behind
    svgString += "<g>";
    // Takes user input for shape choice and inserts it into SVG file
    svgString += `${answers.shape}`;
}