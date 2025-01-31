import React, {useEffect, useState} from 'react'
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store/store";
import {deleteEquipment, getAllEquipment} from "@/redux/EquipmentSlice";
import AddEquipmentForm from "@/components/equipment/AddEquipmentForm";
import EditEquipmentForm from "@/components/equipment/EditEquipmentForm";

const Equipment = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const equipment = useSelector((state:RootState)=>state.equipment)
    const dispatch = useDispatch<AppDispatch>();
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [currentEquipmentData, setCurrentEquipmentData] = useState(null);

    useEffect(() => {
        dispatch(getAllEquipment());
    }, [dispatch]);


    async function handleDeleteEquipment (equipmentId) {
        console.log("Deleting equipment with code:", equipmentId);
        await dispatch(deleteEquipment(equipmentId));
        dispatch(getAllEquipment());
    };

    const handleEditButtonClick = (equipment) => {
        setCurrentEquipmentData(equipment);
        setIsEditModalOpen(true);
    };
    return (
        <div className="w-full p-6 space-y-2 md:space-y-0 md:px-8">
            <section id="equipment-section">
                <div id="equipment">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h1 className="text-2xl font-bold">Equipment</h1>
                            <p className="text-gray-500">Manage your equipment and view</p>
                        </div>
                        <div className="flex space-x-4">
                            <div>
                                <div
                                    className="flex">
                                    <Input type="text"
                                           className="bg-zinc-100/50 text-zinc-500 w-64"
                                           placeholder="Search..."
                                           id="cropSearchId"/>
                                </div>
                            </div>
                            <Button
                                onClick={() => setIsAddModalOpen(true)}
                                className="text-white px-6 py-3 rounded-lg flex items-center space-x-2 shadow-lg">
                                + Add Equipment
                            </Button>
                        </div>
                    </div>

                    <div className="bg-white sadow-xl rounded-lg overflow-hidden">
                        <table className="w-full text-center">
                            <thead>
                            <tr className="bg-gradient-to-r from-gray-300 to-gray-300 text-gray-700">
                                <th className="p-4 font-semibold text-gray-600">
                                    Equipment Id
                                </th>
                                <th className="p-4 font-semibold text-gray-600">Name</th>
                                <th className="p-4 font-semibold text-gray-600">Type</th>
                                <th className="p-4 font-semibold text-gray-600">Status</th>
                                <th className="p-4 font-semibold text-gray-600">
                                    Assigned Staff
                                </th>
                                <th className="p-4 font-semibold text-gray-600">
                                    Assigned Field
                                </th>
                                <th className="p-4 font-semibold text-gray-600">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {equipment.map((item) => (
                                <tr key={item.equipmentId} className="hover:bg-gray-100">
                                    <td className="p-4">{item.equipmentId}</td>
                                    <td className="p-4">{item.equipmentName}</td>
                                    <td className="p-4">{item.equipmentType}</td>
                                    <td className="p-4">{item.equipmentStatus ? "Available" : "Not Available"}</td>
                                    <td className="p-4">{item.assignedStaff}</td>
                                    <td className="p-4">{item.assignedField}</td>
                                    <td className="p-4">
                                        <button
                                            onClick={() => handleEditButtonClick(item)}
                                            className="text-blue-500 hover:underline"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDeleteEquipment(item.equipmentId)}
                                            className="text-red-500 hover:underline ml-2"
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
                    <AddEquipmentForm
                        isOpen={isAddModalOpen}
                        onClose={() => setIsAddModalOpen(false)}
                    />
                )}

                {isEditModalOpen && (
                    <EditEquipmentForm
                        isOpen={isEditModalOpen}
                        onClose={() => setIsEditModalOpen(false)}
                        equipmentData={currentEquipmentData}
                    />
                )}
            </section>
        </div>
    )
}
export default Equipment
