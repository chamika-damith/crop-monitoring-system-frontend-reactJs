import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store/store";
import {StaffModel} from "@/model/StaffModel";
import { updateStaff} from "@/redux/StaffSlice";
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import StaffInputModel from "@/components/staff/StaffInputModel";

const EditStaffForm = ({ isOpen, onClose, staffData }) => {
    const [staffId, setStaffId] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [designation, setDesignation] = useState("");
    const [gender, setGender] = useState("");
    const [joinedDate, setJoinedDate] = useState("");
    const [dob, setDob] = useState("");
    const [address, setAddress] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [field, setField] = useState([]);
    const [vehicle, setVehicle] = useState([]);
    const fields = useSelector((state:RootState)=>state.field);

    useEffect(() => {
        if (isOpen && staffData) {
            setStaffId(staffData.staffId);
            setFirstName(staffData.firstName);
            setLastName(staffData.lastName);
            setDesignation(staffData.designation);
            setGender(staffData.gender);
            setJoinedDate(staffData.joinedDate);
            setDob(staffData.dob);
            setAddress(staffData.address);
            setContactNo(staffData.contactNo);
            setEmail(staffData.email);
            setRole(staffData.role);
            setField(staffData.field);
            setVehicle(staffData.vehicle);
        }
    }, [isOpen, staffData]);


    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const staffModel = new StaffModel(
            staffId,
            firstName,
            lastName,
            designation,
            gender,
            joinedDate,
            dob,
            address,
            contactNo,
            email,
            role,
            field,
            vehicle
        );
        console.log('Form updated:', staffModel);
        dispatch(updateStaff(staffModel));
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={(open) => {
            if (!open) {
                onClose();
            }
        }}>
            <DialogContent className="bg-white rounded-lg p-8 max-w-4xl w-full h-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-zinc-900">Edit Staff</DialogTitle>
                </DialogHeader>

                <div className="max-h-[80vh] overflow-y-auto">
                    <form onSubmit={handleSubmit}>
                        <StaffInputModel
                            staffId={staffId}
                            setStaffId={setStaffId}
                            firstName={firstName}
                            setFirstName={setFirstName}
                            lastName={lastName}
                            setLastName={setLastName}
                            designation={designation}
                            setDesignation={setDesignation}
                            gender={gender}
                            setGender={setGender}
                            joinedDate={joinedDate}
                            setJoinedDate={setJoinedDate}
                            dob={dob}
                            fields={fields}
                            setDob={setDob}
                            address={address}
                            setAddress={setAddress}
                            contactNo={contactNo}
                            setContactNo={setContactNo}
                            email={email}
                            setEmail={setEmail}
                            role={role}
                            setRole={setRole}
                            field={field}
                            setField={setField}
                            vehicle={vehicle}
                            setVehicle={setVehicle}
                        />

                        <div className="flex justify-end space-x-4 col-span-2">
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
                                Add Staff
                            </Button>
                        </div>
                    </form>
                </div>
            </DialogContent>
        </Dialog>

    );
};
export default EditStaffForm
