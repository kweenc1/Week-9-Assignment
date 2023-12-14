# Week-9-Assignment
FUNCTIONS
functions are first class objects, which means that anything done on objact can also be done on functions.
we can create literals, store variables, we can also include properties or values to functions, 
The key difference between object and function is that we can call/invoke a function whenever we want. 
A function is a block of code that we can call/ Invoke whenever we want.

There are three main ways to define functions in JavaScript:
Function declarations: These are declared using the function keyword followed by the function name, parameters, and body.
Function expressions: These are defined using an anonymous function expression. They can be assigned to variables or passed as arguments to other functions.
Constructor: The Function constructor can be used to dynamically create functions at runtime.

Types of functions:

Regular functions: These are the most common type of function and are used for general-purpose tasks. They can accept parameters, return values, and be called multiple times.
Generator functions: These functions use the yield keyword to pause their execution and return a sequence of values. This makes them useful for iterating over data.
Async functions: These functions use the async and await keywords to work with asynchronous operations. This allows them to perform tasks like fetching data from a server without blocking the main thread.
Async generator functions: These functions combine the features of generator and async functions. They use yield to pause execution and return a sequence of asynchronous values.

Function arguments:
Functions can accept arguments, which are values passed to the function when it is called. These arguments can be accessed inside the function body using the arguments object or by name.

Destructuring: Allows unpacking elements from arrays or properties from objects into distinct variables within the function parameters.
Rest parameters: Allows representing an indefinite number of arguments as an array within the function.
Default parameters: Allow initializing formal parameters with default values if no value or undefined is passed.
Function return values:

Functions can return values using the return keyword. The returned value can be anything, including another function, an object, or a primitive type.

Function return values:

Functions can return values using the return keyword. The returned value can be anything, including another function, an object, or a primitive type.

Functions are defined with the function keyword, followed by a name and parentheses.
The parentheses may include parameter names, which are local variables inside the function.
The function body is enclosed within curly braces and contains the code to be executed.
Invocation:

Functions are invoked by calling their name followed by parentheses.
Arguments are passed to the function through the parentheses.
When the function encounters a return statement, it stops execution and returns a value.



CONTROL FLOW
contrlo flow allows our programs to make decision about what code was executed and when.
Types of control flow statements:

If/else statements: Used to execute code based on a specific condition.
Switch statements: Used to execute code based on the value of a variable.
Loops: Used to repeat code multiple times.

For each type:
Syntax and structure: How to write the statement in code.
Example: A real-life application of the statement.
Comparison of similar statements: Differences between while and do…while loops.
Answers to frequently asked questions: Clarifications on common doubts.



Array Methods 
Length and conversion:

length: Retrieves the number of elements in an array.
toString: Converts an array to a string of comma-separated values.
join: Similar to toString, but allows specifying a separator between elements.
Adding and removing elements:

pop: Removes and returns the last element from an array.
push: Adds one or more elements to the end of an array.
shift: Removes and returns the first element from an array.
unshift: Adds one or more elements to the beginning of an array.

Modifying elements:
Accessing elements using their index.
Assigning new values to existing elements.
Using delete to remove elements (leaves undefined holes).

Merging and flattening arrays:
concat: Creates a new array by joining existing arrays.
flat: Creates a new array with sub-array elements concatenated to a specified depth.

Splicing and slicing arrays:
splice: Adds or removes elements at specific positions.
slice: Extracts a portion of an array into a new array.
Automatic conversion:



