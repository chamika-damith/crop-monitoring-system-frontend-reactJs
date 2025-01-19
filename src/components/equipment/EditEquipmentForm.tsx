import React, {useEffect, useState} from 'react'
import {useDispatch} from "react-redux";
import {EquipmentModel} from "@/model/EquipmentModel";
import { updateEquipment} from "@/redux/EquipmentSlice";
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import EquipmentInputModel from "@/components/equipment/EquipmentInputModel";
import {Button} from "@/components/ui/button";

const EditEquipmentForm = ({ isOpen, onClose, equipmentData }) => {
    const [equipmentId, setEquipmentId] = useState("");
    const [equipmentName, setEquipmentName] = useState("");
    const [equipmentType, setEquipmentType] = useState("");
    const [equipmentStatus, setEquipmentStatus] = useState(false);
    const [assignedStaff, setAssignedStaff] = useState("");
    const [assignedField, setAssignedField] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        if (isOpen && equipmentData) {
            setEquipmentId(equipmentData.equipmentId);
            setEquipmentName(equipmentData.equipmentName);
            setEquipmentType(equipmentData.equipmentType);
            setEquipmentStatus(equipmentData.equipmentStatus);
            setAssignedStaff(equipmentData.assignedStaff);
            setAssignedField(equipmentData.assignedField);
        }
    }, [isOpen, equipmentData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEquipment = new EquipmentModel(
            equipmentId,
            equipmentName,
            equipmentType,
            equipmentStatus,
            assignedStaff,
            assignedField
        );
        console.log('Equipment added:', newEquipment);
        dispatch(updateEquipment(newEquipment));
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
                    <DialogTitle className="text-2xl font-bold text-zinc-900">Edit Equipment</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <EquipmentInputModel
                        equipmentId={equipmentId}
                        setEquipmentId={setEquipmentId}
                        equipmentName={equipmentName}
                        setEquipmentName={setEquipmentName}
                        equipmentType={equipmentType}
                        setEquipmentType={setEquipmentType}
                        equipmentStatus={equipmentStatus}
                        setEquipmentStatus={setEquipmentStatus}
                        assignedStaff={assignedStaff}
                        setAssignedStaff={setAssignedStaff}
                        assignedField={assignedField}
                        setAssignedField={setAssignedField}
                    />
                    <div className="flex justify-end">
                        <Button type="button" variant="outline" onClick={onClose} className="mr-2">Cancel</Button>
                        <Button type="submit" className="bg-green-500 text-white">Save Equipment</Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
export default EditEquipmentForm
