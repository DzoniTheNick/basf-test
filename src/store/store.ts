import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import { commentsSlice } from "./feature/comments";
import { inputParametersSlice } from "./feature/inputParameters";

export const store = configureStore({
    reducer: {
        comments: commentsSlice.reducer,
        inputParameters: inputParametersSlice.reducer,
    },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
    ReturnType<typeof store.getState>
> = useSelector;
