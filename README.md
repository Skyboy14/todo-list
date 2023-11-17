# React Todo List App with Redux and redux-persist

A simple Todo List application built with React, Redux, and redux-persist for state persistence.

## Features

- View a list of tasks to complete
- Add new tasks to the list
- Remove tasks from the list
- Mark tasks as completed
- Edit task names
- Assign priorities to tasks
- Responsive design for various devices

## Folder Structure

```TODO-LIST
|-- /src
|   |-- components
|   |   |-- TodoForm.js
|   |   |-- TodoItem.js
|   |   |-- TodoList.js
|   |   |-- TodoTable.js
|   |-- redux
|       |-- actions
|           |-- index.js
|       |-- reducers
|           |-- index.js
|           |-- tasks.js
|       |-- store.js
|   |-- App.css
|   |-- App.js
|   |-- index.js
|   |-- index.css
|-- .gitignore
|-- package-lock.json
|-- package.json
|-- README.md
```


components: Contains React components used in the application.
redux: Manages Redux-related files.
actions: Redux action creators.
reducers: Redux reducers.
store.js: Redux store configuration.



## Getting Started
Clone the repository: git clone https://github.com/Skyboy14/todo-list.git

Install dependencies: npm install

Run the application: npm start


## Additional Notes
The Redux store is configured with redux-persist to persist the state across page refreshes.
