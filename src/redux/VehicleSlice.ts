import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { VehicleModel } from "@/model/VehicleModel";
import axios from "axios";

const initialState: VehicleModel[] = [];

const api = axios.create({
    baseURL: 'http://localhost:3000/vehicle'
});

export const saveVehicle = createAsyncThunk(
    "vehicle/saveVehicle",
    async (v: VehicleModel) => {
        try {
            const response = await api.post('/add', v);
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
);

export const getAllVehicles = createAsyncThunk(
    "vehicle/getAllVehicles",
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

export const deleteVehicle = createAsyncThunk(
    "vehicle/deleteVehicle",
    async (id: string) => {
        try {
            const response = await api.delete(`/delete/${id}`);
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
);

export const updateVehicle = createAsyncThunk(
    "vehicle/updateVehicle",
    async (v: VehicleModel) => {
        try {
            const response = await api.put('/update', v);
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
);

const VehicleSlice = createSlice({
    name: "vehicle",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(saveVehicle.pending, () => {
                console.log("Pending save vehicle");
            })
            .addCase(saveVehicle.fulfilled, (state, action) => {
                console.log("Vehicle save fulfilled");
                state.push(action.payload);
            })
            .addCase(saveVehicle.rejected, () => {
                console.log("Vehicle save rejected");
            })

            .addCase(getAllVehicles.pending, () => {
                console.log("Pending get all vehicles");
            })
            .addCase(getAllVehicles.fulfilled, (state, action) => {
                console.log("Get all vehicles fulfilled");
                return action.payload;
            })
            .addCase(getAllVehicles.rejected, () => {
                console.log("Get all vehicles rejected");
            })

            .addCase(deleteVehicle.pending, () => {
                console.log("Pending delete vehicle");
            })
            .addCase(deleteVehicle.fulfilled, (state, action) => {
                console.log("Delete vehicle fulfilled");
                return state.filter(vehicle => vehicle.vehicleId !== action.payload.vehicleId);
            })
            .addCase(deleteVehicle.rejected, () => {
                console.log("Delete vehicle rejected");
            })

            .addCase(updateVehicle.pending, () => {
                console.log("Pending update vehicle");
            })
            .addCase(updateVehicle.fulfilled, (state, action) => {
                console.log("Update vehicle fulfilled");
                const index = state.findIndex(vehicle => vehicle.vehicleId === action.payload.vehicleId);
                if (index !== -1) {
                    state[index] = action.payload;
                }
            })
            .addCase(updateVehicle.rejected, () => {
                console.log("Update vehicle rejected");
            });
    }
});

export default VehicleSlice.reducer;
