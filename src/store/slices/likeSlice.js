import { createSlice } from '@reduxjs/toolkit'


export const likeSlice = createSlice({
    name: 'like',
    initialState: {
        data: [],
    },

    reducers: {
        // like function 
        addLike: (state, action) => {
            const found = state.data.find(i => i.id === action.payload.id)
            if (!found) {
                state.data.push(action.payload)
            }else {
                state.data = state.data.filter(i => action.payload.id !== i.id)
            }
        },

        // dislike function 
        removeLike: (state, action) => {
            state.data = state.data.filter(i => action.payload.id !== i.id)
        },
    },
})

export const { addLike, removeLike } = likeSlice.actions

export default likeSlice.reducer