import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { EquipmentModel } from "@/model/EquipmentModel";
import axios from "axios";

// Initial state
const initialState: EquipmentModel[] = [];

// API setup
const api = axios.create({
    baseURL: 'http://localhost:3000/equipment'
});

// Async actions for equipment
export const saveEquipment = createAsyncThunk(
    "equipment/saveEquipment",
    async (equipment: EquipmentModel) => {
        try {
            const response = await api.post('/add', equipment);
            return response.data;
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
);

export const getAllEquipment = createAsyncThunk(
    "equipment/getAllEquipment",
    async () => {
        try {
            const response = await api.get('/get');
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
);

export const deleteEquipment = createAsyncThunk(
    "equipment/deleteEquipment",
    async (equipmentId: string) => {
        try {
            const response = await api.delete(`/delete/${equipmentId}`);
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
);

export const updateEquipment = createAsyncThunk(
    "equipment/updateEquipment",
    async (equipment: EquipmentModel) => {
        try {
            const response = await api.put('/update', equipment);
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
);

// Equipment slice
const EquipmentSlice = createSlice({
    name: "equipment",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Save equipment
            .addCase(saveEquipment.pending, () => {
                console.log("Pending save equipment");
            })
            .addCase(saveEquipment.fulfilled, (state, action) => {
                console.log("Save equipment fulfilled");
                state.push(action.payload);
            })
            .addCase(saveEquipment.rejected, () => {
                console.log("Save equipment rejected");
            })

            // Get all equipment
            .addCase(getAllEquipment.pending, () => {
                console.log("Pending get all equipment");
            })
            .addCase(getAllEquipment.fulfilled, (state, action) => {
                console.log("Get all equipment fulfilled");
                console.log(action.payload)
                return action.payload;
            })
            .addCase(getAllEquipment.rejected, () => {
                console.log("Get all equipment rejected");
            })

            // Delete equipment
            .addCase(deleteEquipment.pending, () => {
                console.log("Pending delete equipment");
            })
            .addCase(deleteEquipment.fulfilled, (state, action) => {
                console.log("Delete equipment fulfilled");
                return state.filter(equipment => equipment.equipmentId !== action.payload.equipmentId);
            })
            .addCase(deleteEquipment.rejected, () => {
                console.log("Delete equipment rejected");
            })

            // Update equipment
            .addCase(updateEquipment.pending, () => {
                console.log("Pending update equipment");
            })
            .addCase(updateEquipment.fulfilled, (state, action) => {
                console.log("Update equipment fulfilled");
                const index = state.findIndex(equipment => equipment.equipmentId === action.payload.equipmentId);
                if (index !== -1) {
                    state[index] = action.payload;
                }
            })
            .addCase(updateEquipment.rejected, () => {
                console.log("Update equipment rejected");
            });
    }
});

export default EquipmentSlice.reducer;
