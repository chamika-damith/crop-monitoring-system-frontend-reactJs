import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CropModel } from "@/model/CropModel";
import axios from "axios";

const initialState: CropModel[] = [];

const api = axios.create({
    baseURL: "http://localhost:3000/crop"
});

// Save Crop
export const saveCrop = createAsyncThunk(
    "crop/saveCrop",
    async (crop: CropModel) => {
        try {
            const response = await api.post("/add", crop);
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
);

// Get All Crops
export const getAllCrops = createAsyncThunk(
    "crop/getAllCrops",
    async () => {
        try {
            const response = await api.get("/get");
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
);

// Delete Crop
export const deleteCrop = createAsyncThunk(
    "crop/deleteCrop",
    async (cropCode: string) => {
        try {
            const response = await api.delete(`/delete/${cropCode}`);
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
);

// Update Crop
export const updateCrop = createAsyncThunk(
    "crop/updateCrop",
    async (crop: CropModel) => {
        try {
            const response = await api.put("/update", crop);
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
);

const CropSlice = createSlice({
    name: "crop",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Save Crop
            .addCase(saveCrop.pending, () => {
                console.log("Pending save crop");
            })
            .addCase(saveCrop.fulfilled, (state, action) => {
                console.log("Crop save fulfilled");
                state.push(action.payload);
            })
            .addCase(saveCrop.rejected, () => {
                console.log("Crop save rejected");
            })

            // Get All Crops
            .addCase(getAllCrops.pending, () => {
                console.log("Pending get all crops");
            })
            .addCase(getAllCrops.fulfilled, (state, action) => {
                console.log("Get all crops fulfilled");
                return action.payload;
            })
            .addCase(getAllCrops.rejected, () => {
                console.log("Get all crops rejected");
            })

            // Delete Crop
            .addCase(deleteCrop.pending, () => {
                console.log("Pending delete crop");
            })
            .addCase(deleteCrop.fulfilled, (state, action) => {
                console.log("Delete crop fulfilled");
                return state.filter(crop => crop.cropCode !== action.payload.cropCode);
            })
            .addCase(deleteCrop.rejected, () => {
                console.log("Delete crop rejected");
            })

            // Update Crop
            .addCase(updateCrop.pending, () => {
                console.log("Pending update crop");
            })
            .addCase(updateCrop.fulfilled, (state, action) => {
                console.log("Update crop fulfilled");
                const index = state.findIndex(crop => crop.cropCode === action.payload.cropCode);
                if (index !== -1) {
                    state[index] = action.payload;
                }
            })
            .addCase(updateCrop.rejected, () => {
                console.log("Update crop rejected");
            });
    }
});

export default CropSlice.reducer;
