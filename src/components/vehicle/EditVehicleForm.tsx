import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import {VehicleModel} from "@/model/VehicleModel";
import {updateVehicle} from "@/redux/VehicleSlice";
import VehicleInputModel from "@/components/vehicle/VehicleInputModel";

const EditVehicleForm = ({ isOpen, onClose, vehicle }) => {
    const [vehicleId,setVehicleId] = useState("");
    const [licensePlateNumber, setLicensePlateNumber] = useState("");
    const [vehicleCategory, setVehicleCategory] = useState("");
    const [fuelType, setFuelType] = useState("");
    const [status, setStatus] = useState(false);
    const [allocatedStaff, setAllocatedStaff] = useState("");
    const [remarks, setRemarks] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        if (vehicle) {
            setVehicleId(vehicle.vehicleId)
            setLicensePlateNumber(vehicle.licensePlateNumber);
            setVehicleCategory(vehicle.vehicleCategory);
            setFuelType(vehicle.fuelType);
            setStatus(vehicle.status);
            setAllocatedStaff(vehicle.allocatedStaff);
            setRemarks(vehicle.remarks);
        }
    }, [vehicle]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedVehicle = new VehicleModel(
            vehicleId,
            licensePlateNumber,
            vehicleCategory,
            fuelType,
            status,
            allocatedStaff,
            remarks
        );
        console.log('Vehicle updated:', updatedVehicle);
        dispatch(updateVehicle(updatedVehicle));
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
                    <DialogTitle className="text-2xl font-bold text-zinc-900">Edit Vehicle</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <VehicleInputModel
                        vehicleId={vehicleId}
                        licensePlateNumber={licensePlateNumber}
                        vehicleCategory={vehicleCategory}
                        setVehicleId={setVehicleId}
                        fuelType={fuelType}
                        status={status}
                        allocatedStaff={allocatedStaff}
                        remarks={remarks}
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
                            Save Changes
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default EditVehicleForm;