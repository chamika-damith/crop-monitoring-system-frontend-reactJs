import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const StaffInputModel = (props) => {
    return (
        <div className="p-4">
            <Card className="border border-zinc-200 shadow-sm">
                <CardContent className="pt-4 pb-6 px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Staff ID */}
                        <div>
                            <Label htmlFor="staffId" className="text-sm font-medium text-zinc-700">
                                Staff ID
                            </Label>
                            <Input
                                type="text"
                                id="staffId"
                                className="mt-1 bg-zinc-100/50 text-zinc-700 focus:border-zinc-400 focus:ring focus:ring-zinc-200"
                                onChange={(e) => props.setStaffId(e.target.value)}
                                value={props.staffId}
                            />
                        </div>

                        {/* First Name */}
                        <div>
                            <Label htmlFor="firstName" className="text-sm font-medium text-zinc-700">
                                First Name
                            </Label>
                            <Input
                                type="text"
                                id="firstName"
                                className="mt-1 border-zinc-300 focus:border-zinc-400 focus:ring focus:ring-zinc-200"
                                placeholder="Enter first name (3-50 chars)"
                                onChange={(e) => props.setFirstName(e.target.value)}
                                required
                                value={props.firstName}
                            />
                        </div>

                        {/* Last Name */}
                        <div>
                            <Label htmlFor="lastName" className="text-sm font-medium text-zinc-700">
                                Last Name
                            </Label>
                            <Input
                                type="text"
                                id="lastName"
                                className="mt-1 border-zinc-300 focus:border-zinc-400 focus:ring focus:ring-zinc-200"
                                placeholder="Enter last name (3-50 chars)"
                                onChange={(e) => props.setLastName(e.target.value)}
                                required
                                value={props.lastName}
                            />
                        </div>

                        {/* Designation */}
                        <div>
                            <Label htmlFor="designation" className="text-sm font-medium text-zinc-700">
                                Designation
                            </Label>
                            <Input
                                type="text"
                                id="designation"
                                className="mt-1 border-zinc-300 focus:border-zinc-400 focus:ring focus:ring-zinc-200"
                                placeholder="Enter designation (min 7 chars)"
                                onChange={(e) => props.setDesignation(e.target.value)}
                                required
                                value={props.designation}
                            />
                        </div>

                        {/* Gender */}
                        <div>
                            <Label htmlFor="gender" className="text-sm font-medium text-zinc-700">
                                Gender
                            </Label>
                            <select
                                id="gender"
                                className="border border-gray-300 rounded w-full p-2"
                                onChange={(e) => props.setGender(e.target.value)}
                                required
                                value={props.gender}
                            >
                                <option value="">Select</option>
                                <option value="MALE">MALE</option>
                                <option value="FEMALE">FEMALE</option>
                            </select>
                        </div>

                        {/* Joined Date */}
                        <div>
                            <Label htmlFor="joinedDate" className="text-sm font-medium text-zinc-700">
                                Joined Date
                            </Label>
                            <Input
                                type="date"
                                id="joinedDate"
                                className="mt-1 border-zinc-300 focus:border-zinc-400 focus:ring focus:ring-zinc-200"
                                onChange={(e) => props.setJoinedDate(e.target.value)}
                                required
                                value={props.joinedDate}
                            />
                        </div>

                        {/* Date of Birth */}
                        <div>
                            <Label htmlFor="dob" className="text-sm font-medium text-zinc-700">
                                Date of Birth
                            </Label>
                            <Input
                                type="date"
                                id="dob"
                                className="mt-1 border-zinc-300 focus:border-zinc-400 focus:ring focus:ring-zinc-200"
                                onChange={(e) => props.setDob(e.target.value)}
                                required
                                value={props.dob}
                            />
                        </div>

                        {/* Address */}
                        <div>
                            <Label htmlFor="address" className="text-sm font-medium text-zinc-700">
                                Address
                            </Label>
                            <Input
                                type="text"
                                id="address"
                                className="mt-1 border-zinc-300 focus:border-zinc-400 focus:ring focus:ring-zinc-200"
                                placeholder="Enter address (min 7 chars)"
                                onChange={(e) => props.setAddress(e.target.value)}
                                required
                                value={props.address}
                            />
                        </div>

                        {/* Contact Number */}
                        <div>
                            <Label htmlFor="contactNo" className="text-sm font-medium text-zinc-700">
                                Contact No
                            </Label>
                            <Input
                                type="tel"
                                id="contactNo"
                                className="mt-1 border-zinc-300 focus:border-zinc-400 focus:ring focus:ring-zinc-200"
                                placeholder="Enter contact number (10 digits)"
                                onChange={(e) => props.setContactNo(e.target.value)}
                                required
                                value={props.contactNo}
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <Label htmlFor="email" className="text-sm font-medium text-zinc-700">
                                Email
                            </Label>
                            <Input
                                type="email"
                                id="email"
                                className="mt-1 border-zinc-300 focus:border-zinc-400 focus:ring focus:ring-zinc-200"
                                placeholder="Enter valid email"
                                onChange={(e) => props.setEmail(e.target.value)}
                                required
                                value={props.email}
                            />
                        </div>

                        {/* Role */}
                        <div>
                            <Label htmlFor="role" className="text-sm font-medium text-zinc-700">
                                Role
                            </Label>
                            <select
                                id="role"
                                className="border border-gray-300 rounded w-full p-2"
                                onChange={(e) => props.setRole(e.target.value)}
                                required
                                value={props.role}
                            >
                                <option value="">Select a Role</option>
                                <option value="MANAGER">MANAGER</option>
                                <option value="ADMINISTRATIVE">ADMINISTRATIVE</option>
                                <option value="SCIENTIST">SCIENTIST</option>
                            </select>
                        </div>

                        {/* Field */}
                        <div>
                            <Label htmlFor="field" className="text-sm font-medium text-zinc-700">
                                Field
                            </Label>
                            <select
                                id="field"
                                className="border border-gray-300 rounded w-full p-2"
                                value={props.fields.fieldCode}
                                onChange={(e) => props.setField([...props.field, e.target.value])}
                                required
                            >
                                <option value="">Select Field</option>
                                {props.fields.map((field, index) => (
                                    <option value={field.fieldCode} key={index}>
                                        {field.fieldCode}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Vehicle */}
                        <div>
                            <Label htmlFor="vehicle" className="text-sm font-medium text-zinc-700">
                                Vehicle
                            </Label>
                            <select
                                id="vehicle"
                                className="border border-gray-300 rounded w-full p-2"
                                onChange={(e) => props.setVehicle(e.target.value)}
                            >
                                <option value="">Select a Vehicle</option>
                                <option value="Car">Car</option>
                                <option value="Truck">Truck</option>
                                <option value="Motorcycle">Motorcycle</option>
                                <option value="Bicycle">Bicycle</option>
                            </select>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default StaffInputModel;
