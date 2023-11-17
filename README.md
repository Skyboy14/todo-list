# React Todo List App with Redux and redux-persist

A simple Todo List application built with React, Redux, and redux-persist for state persistence.

<img width="960" alt="image" src="https://github.com/Skyboy14/todo-list/assets/96543258/36e85d18-a5e9-460b-8125-a7aad6a82b6b">

<img width="960" alt="image" src="https://github.com/Skyboy14/todo-list/assets/96543258/aa11d162-f6e9-4a62-bad9-bfc073aa25db">


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


- components: Contains React components used in the application.
- redux: Manages Redux-related files.
- actions: Redux action creators.
- reducers: Redux reducers.
- store.js: Redux store configuration.



## Getting Started
- Clone the repository: git clone https://github.com/Skyboy14/todo-list.git
- Install dependencies: npm install
- Run the application: npm start


## Additional Notes
The Redux store is configured with redux-persist to persist the state across page refreshes.
