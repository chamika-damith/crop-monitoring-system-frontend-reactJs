import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {FieldModel} from "@/model/FieldModel";
import axios from "axios";

const initialState:FieldModel[]=[];

const api = axios.create({
    baseURL: 'http://localhost:3000/field'
})

export const saveField = createAsyncThunk(
    "field/saveField",
    async (f: FieldModel) => {
        try {
            const response = await api.post('/add', f)
            return response.data
        } catch (err) {
            console.log(err);
        }
    }
)

export const getAllField = createAsyncThunk(
    "field/getAllField",
    async () => {
        try {
            const response = await api.get('/get');
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
)

export const deleteField = createAsyncThunk(
    "field/deleteField",
    async (code: string) => {
        try {
            const response = await api.delete(`/delete/${code}`);
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
)

export const updateField = createAsyncThunk(
    "customer/updateCustomer",
    async (f:FieldModel) => {
        try {
            const response = await api.put('/update', f);
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
)

const FieldSlice=createSlice({
    name: "field",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            // Save Field
            .addCase(saveField.pending, (state, action) => {
                console.log("Pending save field");
            })
            .addCase(saveField.fulfilled, (state, action) => {
                console.log("Field save fulfilled");
                state.push(action.payload);
            })
            .addCase(saveField.rejected, (state, action) => {
                console.log("Field save rejected");
            })

            // Get All Fields
            .addCase(getAllField.pending, (state, action) => {
                console.log("Pending get all fields");
            })
            .addCase(getAllField.fulfilled, (state, action) => {
                console.log("Get all fields fulfilled");
                return action.payload;
            })
            .addCase(getAllField.rejected, (state, action) => {
                console.log("Get all fields rejected");
            })

            // Delete Field
            .addCase(deleteField.pending, (state, action) => {
                console.log("Pending delete field");
            })
            .addCase(deleteField.fulfilled, (state, action) => {
                console.log("Delete field fulfilled");
                return state.filter(field => field.fieldCode !== action.payload.fieldCode);
            })
            .addCase(deleteField.rejected, (state, action) => {
                console.log("Delete field rejected");
            })

            // Update Field
            .addCase(updateField.pending, (state, action) => {
                console.log("Pending update field");
            })
            .addCase(updateField.fulfilled, (state, action) => {
                console.log("Update field fulfilled");
                const index = state.findIndex(field => field.fieldCode === action.payload.fieldCode);
                if (index !== -1) {
                    state[index] = action.payload;
                }
            })
            .addCase(updateField.rejected, (state, action) => {
                console.log("Update field rejected");
            });
    }
})

export default FieldSlice.reducer
