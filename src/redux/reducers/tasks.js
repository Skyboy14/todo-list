import { v4 as uuidv4 } from 'uuid';

const initialState = {
    tasks: [],
};

const tasksReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_TASK':
            return {
                tasks: [
                    ...state.tasks,
                    {
                        id: uuidv4(), // Generate a unique ID
                        name: action.payload.taskName,
                        completed: false,
                        priority: action.payload.priority,
                    },
                ],
            };

        case 'DELETE_TASK':
            return {
                tasks: state.tasks.filter((task) => task.id !== action.payload),
            };

        case 'COMPLETE_TASK':
            return {
                tasks: state.tasks.map((task) =>
                    task.id === action.payload
                        ? { ...task, completed: !task.completed }
                        : task
                ),
            };

        case 'EDIT_TASK':
            return {
                tasks: state.tasks.map((task) =>
                    task.id === action.payload.taskId
                        ? { ...task, name: action.payload.newName }
                        : task
                ),
            };

        case 'SET_PRIORITY':
            return {
                tasks: state.tasks.map((task) =>
                    task.id === action.payload.taskId
                        ? { ...task, priority: action.payload.priority }
                        : task
                ),
            };

        default:
            return state;
    }
};

export default tasksReducer;
