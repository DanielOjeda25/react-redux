import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        title: "Task 1",
        description: "Task 1 description",
        completed: false,

    },
    {
        id: 2,
        title: "Task 2",
        description: "Task 2 description",
        completed: false,
    }
]

export const taskSlice = createSlice({
    name: "tasks",
    initialState: initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload)
        },
        deleteTask: (state, action) => {
            const taskFounded = state.find(task => task.id === action.payload);
            if (taskFounded) {
                state.splice(state.indexOf(taskFounded), 1);
            }
        },
        editTask: (state, action) => {

        }
    },
})


export const  { addTask, deleteTask } = taskSlice.actions
export default taskSlice.reducer;