import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { CommentDto } from "../../utils/dto";

interface commentsState {
    comments: CommentDto[];
}

const initialState: commentsState = {
    comments: [],
};

export const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        setComments: (state, action: PayloadAction<CommentDto[]>) => {
            state.comments = action.payload;
        },
    },
});

export default commentsSlice.reducer;
export const { setComments } = commentsSlice.actions;
