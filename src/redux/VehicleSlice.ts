import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {VehicleModel} from "@/model/VehicleModel";

const initialState:VehicleModel[]=[];

const VehicleSlice=createSlice({
    name: "vehicle",
    initialState,
    reducers:{
        addVehicle:(state,action:PayloadAction<VehicleModel>)=>{
            state.push(action.payload);
        },
        deleteVehicle: (state, action) => {
            return state.filter(vehicle => vehicle.vehicleId !== action.payload);
        },
        updateVehicle: (state, action) => {
            const index = state.findIndex(vehicle => vehicle.vehicleId === action.payload.vehicleId);
            if (index !== -1) {
                state[index] = action.payload;
            }
        }
    }
})

export const {addVehicle,deleteVehicle,updateVehicle } = VehicleSlice.actions;
export default VehicleSlice.reducer
