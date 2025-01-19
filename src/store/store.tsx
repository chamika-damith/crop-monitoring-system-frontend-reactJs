import { configureStore } from "@reduxjs/toolkit";
import FieldSlice from "@/redux/FieldSlice";
import CropSlice from "@/redux/CropSlice";
import StaffSlice from "@/redux/StaffSlice";
import VehicleSlice from "@/redux/VehicleSlice";
import EquipmentSlice from "@/redux/EquipmentSlice";

export const store = configureStore({
    reducer: {
        field:FieldSlice,
        crop:CropSlice,
        staff:StaffSlice,
        vehicle:VehicleSlice,
        equipment:EquipmentSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
