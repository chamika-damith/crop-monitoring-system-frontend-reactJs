import { configureStore } from "@reduxjs/toolkit";
import FieldSlice from "@/redux/FieldSlice";
import CropSlice from "@/redux/CropSlice";

export const store = configureStore({
    reducer: {
        field:FieldSlice,
        crop:CropSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
