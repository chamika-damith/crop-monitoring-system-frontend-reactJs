import { configureStore } from "@reduxjs/toolkit";
import FieldSlice from "@/redux/FieldSlice";
import CropSlice from "@/redux/CropSlice";
import StaffSlice from "@/redux/StaffSlice";

export const store = configureStore({
    reducer: {
        field:FieldSlice,
        crop:CropSlice,
        staff:StaffSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
