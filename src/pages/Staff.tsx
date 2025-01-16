import React, {useState} from 'react'
import AddStaffForm from "@/components/staff/AddStaffForm";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store/store";
import {deleteStaff} from "@/redux/StaffSlice";
import {Button} from "@/components/ui/button";
import EditStaffForm from "@/components/staff/EditStaffForm";
import ViewStaff from "@/components/staff/ViewStaff";

const Staff = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const staffs = useSelector((state:RootState)=>state.staff);
    const dispatch = useDispatch();
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [currentStaffData, setCurrentStaffData] = useState(null);


    const handleDeleteStaff = (staffId) => {
        console.log("Deleting staff with code:", staffId);
        dispatch(deleteStaff(staffId));
    };

    const handleEditStaff = (staff) => {
        setCurrentStaffData(staff);
        setIsEditModalOpen(true);
    };

    const handleViewStaff = (staff) => {
        setCurrentStaffData(staff);
        setIsViewModalOpen(true);
    };

    return (
        <div className="w-full p-6 space-y-2 md:space-y-0 md:px-8">
            <section id="staff-section">
                <div id="staff">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h1 className="text-2xl font-bold">Staff</h1>
                            <p className="text-gray-500">Manage your staff and view</p>
                        </div>
                        <div className="flex space-x-4">
                            <div className="flex space-x-4">
                                <div
                                    className="flex ml-5 rounded-md shadow-sm items-center ring-1 ring-inset ring-gray-300 sm:max-w-md">
                                    <i className="fa-solid fa-magnifying-glass ml-2 mr-1 text-gray-500 cursor-pointer"></i>
                                    <input type="text"
                                           className="block flex-1 w-32 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 sm:text-sm/6 sm:w-72"
                                           placeholder="Search..."
                                           id="staffSearchId"/>
                                </div>
                            </div>
                            <Button onClick={() => setIsAddModalOpen(true)}
                                    className="text-white px-6 py-3 rounded-lg flex items-center space-x-2 shadow-lg">
                                + Add Staff
                            </Button>
                        </div>
                    </div>

                    <div className="bg-white sadow-xl rounded-lg overflow-hidden">
                        <table className="w-full text-center">
                            <thead>
                            <tr className="bg-gradient-to-r from-gray-300 to-gray-300 text-gray-700">
                                <th className="p-4 font-semibold text-gray-600">Staff Id</th>
                                <th className="p-4 font-semibold text-gray-600">First Name</th>
                                <th className="p-4 font-semibold text-gray-600">Last Name</th>
                                <th className="p-4 font-semibold text-gray-600">Designation</th>
                                <th className="p-4 font-semibold text-gray-600">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {staffs.map((member) => (
                                <tr key={member.staffId} className="border-b">
                                    <td className="p-4">{member.staffId}</td>
                                    <td className="p-4">{member.firstName}</td>
                                    <td className="p-4">{member.lastName}</td>
                                    <td className="p-4">{member.designation}</td>
                                    <td className="p-4 space-x-2">
                                        <button
                                            className="text-green-500 hover:underline"
                                            onClick={() => handleViewStaff(member)}
                                        >
                                            View
                                        </button>
                                        <button
                                            className="text-blue-500 hover:underline"
                                            onClick={() => handleEditStaff(member)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="text-red-500 hover:underline"
                                            onClick={() => handleDeleteStaff(member.staffId)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>

                    </div>
                </div>

                {isAddModalOpen && (
                    <AddStaffForm
                        isOpen={isAddModalOpen}
                        onClose={() => setIsAddModalOpen(false)}
                    />
                )}

                {isEditModalOpen && (
                    <EditStaffForm
                        isOpen={isEditModalOpen}
                        onClose={() => setIsEditModalOpen(false)}
                        staffData={currentStaffData}
                    />
                )}

                {isViewModalOpen && (
                    <ViewStaff
                        isOpen={isViewModalOpen}
                        onClose={() => setIsViewModalOpen(false)}
                        staffDetails={currentStaffData}
                    />
                )}
            </section>
        </div>
    )
}
export default Staff
