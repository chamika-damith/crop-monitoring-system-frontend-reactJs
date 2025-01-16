import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {Dialog, DialogContent} from "@/components/ui/dialog";

const ViewStaff = ({isOpen, staffDetails, onClose }) => {
    if (!staffDetails) {
        return null;
    }

    return (
        <Dialog open={isOpen} onOpenChange={(open) => {
            if (!open) {
                onClose();
            }
        }}>
            <DialogContent className="bg-white rounded-lg p-8 max-w-4xl w-full h-auto">
                <Card>
                    <CardContent>
                        <h2 className="text-xl font-semibold text-zinc-700 mb-4">
                            Staff Details
                        </h2>
                        <div className="space-y-4">
                            {/* Staff ID */}
                            <div className="grid grid-cols-2 gap-4">
                                <Label className="text-sm font-medium text-zinc-700">
                                    Staff ID:
                                </Label>
                                <span className="text-zinc-600">{staffDetails.staffId}</span>
                            </div>

                            {/* First Name */}
                            <div className="grid grid-cols-2 gap-4">
                                <Label className="text-sm font-medium text-zinc-700">
                                    First Name:
                                </Label>
                                <span className="text-zinc-600">{staffDetails.firstName}</span>
                            </div>

                            {/* Last Name */}
                            <div className="grid grid-cols-2 gap-4">
                                <Label className="text-sm font-medium text-zinc-700">
                                    Last Name:
                                </Label>
                                <span className="text-zinc-600">{staffDetails.lastName}</span>
                            </div>

                            {/* Designation */}
                            <div className="grid grid-cols-2 gap-4">
                                <Label className="text-sm font-medium text-zinc-700">
                                    Designation:
                                </Label>
                                <span className="text-zinc-600">{staffDetails.designation}</span>
                            </div>

                            {/* Gender */}
                            <div className="grid grid-cols-2 gap-4">
                                <Label className="text-sm font-medium text-zinc-700">
                                    Gender:
                                </Label>
                                <span className="text-zinc-600">{staffDetails.gender}</span>
                            </div>

                            {/* Joined Date */}
                            <div className="grid grid-cols-2 gap-4">
                                <Label className="text-sm font-medium text-zinc-700">
                                    Joined Date:
                                </Label>
                                <span className="text-zinc-600">{staffDetails.joinedDate}</span>
                            </div>

                            {/* Date of Birth */}
                            <div className="grid grid-cols-2 gap-4">
                                <Label className="text-sm font-medium text-zinc-700">
                                    Date of Birth:
                                </Label>
                                <span className="text-zinc-600">{staffDetails.dob}</span>
                            </div>

                            {/* Address */}
                            <div className="grid grid-cols-2 gap-4">
                                <Label className="text-sm font-medium text-zinc-700">
                                    Address:
                                </Label>
                                <span className="text-zinc-600">{staffDetails.address}</span>
                            </div>

                            {/* Contact No */}
                            <div className="grid grid-cols-2 gap-4">
                                <Label className="text-sm font-medium text-zinc-700">
                                    Contact No:
                                </Label>
                                <span className="text-zinc-600">{staffDetails.contactNo}</span>
                            </div>

                            {/* Email */}
                            <div className="grid grid-cols-2 gap-4">
                                <Label className="text-sm font-medium text-zinc-700">
                                    Email:
                                </Label>
                                <span className="text-zinc-600">{staffDetails.email}</span>
                            </div>

                            {/* Role */}
                            <div className="grid grid-cols-2 gap-4">
                                <Label className="text-sm font-medium text-zinc-700">
                                    Role:
                                </Label>
                                <span className="text-zinc-600">{staffDetails.role}</span>
                            </div>

                            {/* Vehicle */}
                            <div className="grid grid-cols-2 gap-4">
                                <Label className="text-sm font-medium text-zinc-700">
                                    Vehicle:
                                </Label>
                                <span className="text-zinc-600">{staffDetails.vehicle}</span>
                            </div>
                        </div>
                        <div className="mt-6 text-right">
                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
                                onClick={onClose}
                            >
                                Close
                            </button>
                        </div>
                    </CardContent>
                </Card>
            </DialogContent>
        </Dialog>
    );
};

export default ViewStaff;
