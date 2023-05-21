import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: "tasks",
    initialState: [],
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
            const { id, title, description } = action.payload
            const taskFounded = state.find(task => task.id === id);
            if (taskFounded) {
                taskFounded.title = title;
                taskFounded.description = description;
            }
        }
    },
})


export const { addTask, deleteTask, editTask } = taskSlice.actions
export default taskSlice.reducer;