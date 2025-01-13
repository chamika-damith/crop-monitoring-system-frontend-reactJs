import { configureStore } from "@reduxjs/toolkit";
import FieldSlice from "@/redux/FieldSlice";

export const store = configureStore({
    reducer: {
        field:FieldSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
