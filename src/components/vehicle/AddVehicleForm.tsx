import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { addVehicle } from "@/redux/VehicleSlice";
import {VehicleModel} from "@/model/VehicleModel";
import VehicleInputModel from "@/components/vehicle/VehicleInputModel";

const AddVehicleForm = ({ isOpen, onClose }) => {
    const [vehicleId,setVehicleId] = useState("");
    const [licensePlateNumber, setLicensePlateNumber] = useState("");
    const [vehicleCategory, setVehicleCategory] = useState("");
    const [fuelType, setFuelType] = useState("");
    const [status, setStatus] = useState(false);
    const [allocatedStaff, setAllocatedStaff] = useState("");
    const [remarks, setRemarks] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const vehicleModel = new VehicleModel(
            vehicleId,
            licensePlateNumber,
            vehicleCategory,
            fuelType,
            status,
            allocatedStaff,
            remarks
        );
        console.log('Vehicle added:', vehicleModel);
        dispatch(addVehicle(vehicleModel));
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={(open) => {
            if (!open) {
                onClose();
            }
        }}>
            <DialogContent className="bg-white rounded-lg p-8 max-w-md w-full">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-zinc-900">Add New Vehicle</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <VehicleInputModel
                        setVehicleId={setVehicleId}
                        setLicensePlateNumber={setLicensePlateNumber}
                        setVehicleCategory={setVehicleCategory}
                        setFuelType={setFuelType}
                        setStatus={setStatus}
                        setAllocatedStaff={setAllocatedStaff}
                        setRemarks={setRemarks}
                    />
                    <div className="flex justify-end space-x-4">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={onClose}
                            className="border-zinc-200 text-zinc-700 hover:bg-zinc-100"
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            className="bg-zinc-900 text-white hover:bg-zinc-800"
                        >
                            Add Vehicle
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default AddVehicleForm;