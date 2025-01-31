import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { StaffModel } from "@/model/StaffModel";
import axios from "axios";

const initialState: StaffModel[] = [];

const api = axios.create({
    baseURL: "http://localhost:3000/staff"
});

// Save Staff
export const saveStaff = createAsyncThunk(
    "staff/saveStaff",
    async (staff: StaffModel) => {
        try {
            const response = await api.post("/add", staff);
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
);

// Get All Staff
export const getAllStaff = createAsyncThunk(
    "staff/getAllStaff",
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

// Delete Staff
export const deleteStaff = createAsyncThunk(
    "staff/deleteStaff",
    async (staffId: string) => {
        try {
            const response = await api.delete(`/delete/${staffId}`);
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
);

// Update Staff
export const updateStaff = createAsyncThunk(
    "staff/updateStaff",
    async (staff: StaffModel) => {
        try {
            const response = await api.put("/update", staff);
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
);

const StaffSlice = createSlice({
    name: "staff",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Save Staff
            .addCase(saveStaff.pending, () => {
                console.log("Pending save staff");
            })
            .addCase(saveStaff.fulfilled, (state, action) => {
                console.log("Staff save fulfilled");
                state.push(action.payload);
            })
            .addCase(saveStaff.rejected, () => {
                console.log("Staff save rejected");
            })

            // Get All Staff
            .addCase(getAllStaff.pending, () => {
                console.log("Pending get all staff");
            })
            .addCase(getAllStaff.fulfilled, (state, action) => {
                console.log("Get all staff fulfilled");
                return action.payload;
            })
            .addCase(getAllStaff.rejected, () => {
                console.log("Get all staff rejected");
            })

            // Delete Staff
            .addCase(deleteStaff.pending, () => {
                console.log("Pending delete staff");
            })
            .addCase(deleteStaff.fulfilled, (state, action) => {
                console.log("Delete staff fulfilled");
                return state.filter(staff => staff.staffId !== action.payload.staffId);
            })
            .addCase(deleteStaff.rejected, () => {
                console.log("Delete staff rejected");
            })

            // Update Staff
            .addCase(updateStaff.pending, () => {
                console.log("Pending update staff");
            })
            .addCase(updateStaff.fulfilled, (state, action) => {
                console.log("Update staff fulfilled");
                const index = state.findIndex(staff => staff.staffId === action.payload.staffId);
                if (index !== -1) {
                    state[index] = action.payload;
                }
            })
            .addCase(updateStaff.rejected, () => {
                console.log("Update staff rejected");
            });
    }
});

export default StaffSlice.reducer;
