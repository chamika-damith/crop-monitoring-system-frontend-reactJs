import React, { useState } from 'react';
import AddFieldForm from "@/components/field/AddFieldForm";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store/store";
import EditFieldForm from "@/components/field/EditFieldForm";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {deleteField} from "@/redux/FieldSlice";

const Field = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const fields = useSelector((state:RootState)=>state.field)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [currentFieldData, setCurrentFieldData] = useState(null);


    const dispatch = useDispatch();

    const handleDeleteField = (fieldCode) => {
        console.log("Deleting field with code:", fieldCode);
        dispatch(deleteField(fieldCode));
    };

    const handleEditButtonClick = (field) => {
        setCurrentFieldData(field);
        setIsEditModalOpen(true);
    };

    return (
        <div className="w-full p-6 space-y-2 md:space-y-0 md:px-8">
            <section id="field-section">
                <div id="field">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h1 className="text-2xl font-bold">Field</h1>
                            <p className="text-gray-500">Manage your field and view</p>
                        </div>
                        <div className="flex space-x-4">
                            <div className="flex">
                                <Input
                                    type="text"
                                    id="searchField"
                                    className="bg-zinc-100/50 text-zinc-500 w-64"
                                    placeholder="Search.."
                                />
                            </div>
                            <Button
                                onClick={() => setIsAddModalOpen(true)}
                                className=" text-white px-6 py-3 rounded-lg flex items-center space-x-2 shadow-lg "
                            >
                                + Add Field
                            </Button>
                        </div>
                    </div>

                    {/* Table section */}
                    <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                        <table className="w-full text-center">
                            <thead>
                            <tr className="bg-gradient-to-r from-gray-300 to-gray-300 text-gray-950">
                                <th className="p-4 font-semibold text-gray-600">Code</th>
                                <th className="p-4 font-semibold text-gray-600">Name</th>
                                <th className="p-4 font-semibold text-gray-600">Location</th>
                                <th className="p-4 font-semibold text-gray-600">Size</th>
                                <th className="p-4 font-semibold text-gray-600">Crops</th>
                                <th className="p-4 font-semibold text-gray-600">Staff</th>
                                <th className="p-4 font-semibold text-gray-600">Action</th>
                            </tr>
                            </thead>
                            <tbody className="bg-gray-50 text-gray-600">
                            {fields.map((field) => (
                                <tr key={field.fieldCode} className="border-b">
                                    <td className="p-4 flex items-center justify-center space-x-5">
                                        <span className="ml-3">{field.fieldCode}</span>
                                        <div className="flex space-x-2">
                                            {field.img_1 ? (
                                                <img
                                                    src={URL.createObjectURL(field.img_1)}
                                                    alt={`${field.fieldName} Preview 1`}
                                                    className="w-10 h-10 object-cover rounded"
                                                />
                                            ) : (
                                                <div
                                                    className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded">
                                                    <span className="text-xs text-gray-500">No Image</span>
                                                </div>
                                            )}
                                            {field.img_2 ? (
                                                <img
                                                    src={URL.createObjectURL(field.img_2)}
                                                    alt={`${field.fieldName} Preview 2`}
                                                    className="w-10 h-10 object-cover rounded"
                                                />
                                            ) : (
                                                <div
                                                    className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded">
                                                    <span className="text-xs text-gray-500">No Image</span>
                                                </div>
                                            )}
                                        </div>

                                    </td>

                                    <td className="p-4">{field.fieldName}</td>
                                    <td className="p-4">{field.fieldLocation}</td>
                                    <td className="p-4">{field.fieldSize}</td>
                                    <td className="p-4">{"Crops"}</td>
                                    <td className="p-4">{"Staff"}</td>
                                    <td className="p-4 space-x-2">
                                        <button
                                            className="text-blue-500 hover:underline"
                                            onClick={() => handleEditButtonClick(field)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="text-red-500 hover:underline"
                                            onClick={() => handleDeleteField(field.fieldCode)}
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

                {/* Add Field Modal */}
                {isAddModalOpen && (
                    <AddFieldForm
                        isOpen={isAddModalOpen}
                        onClose={() => setIsAddModalOpen(false)}
                    />
                )}

                {/* Edit Field Modal */}
                {isEditModalOpen && (
                    <EditFieldForm
                        isOpen={isEditModalOpen}
                        onClose={() => setIsEditModalOpen(false)}
                        fieldData={currentFieldData}
                    />
                )}

            </section>
        </div>
    );
};

export default Field;