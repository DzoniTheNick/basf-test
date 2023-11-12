import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CommentDto } from "../../utils/dto";
import { defaultComment } from "../../utils/consts";

interface inputParametersState {
    selectedComment: CommentDto;
}

const initialState: inputParametersState = {
    selectedComment: defaultComment,
};

export const inputParametersSlice = createSlice({
    name: "inputParameters",
    initialState,
    reducers: {
        setInputParameters: (state, action: PayloadAction<CommentDto>) => {
            state.selectedComment = action.payload;
        },
    },
});

export default inputParametersSlice.reducer;
export const { setInputParameters } = inputParametersSlice.actions;
