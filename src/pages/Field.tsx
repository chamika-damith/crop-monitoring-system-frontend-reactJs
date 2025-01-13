import React, { useState } from 'react';
import AddFieldForm from "@/components/AddFieldForm";
import {useDispatch, useSelector} from "react-redux";
import {addField, deleteField} from "@/redux/FieldSlice";
import {RootState} from "@/store/store";

const Field = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const dispatch = useDispatch();
    const fields = useSelector((state:RootState)=>state.field)

    const [formData, setFormData] = useState({
        fieldCode: '',
        fieldName: '',
        fieldLocation: '',
        fieldSize: '',
        img_1: null,
        img_2: null
    });


    const [errors, setErrors] = useState({
        fieldName: false,
        fieldLocation: false,
        fieldSize: false,
        img_1: false,
        img_2: false
    });

    const handleInputChange = (e) => {
        const { id, value, type, files } = e.target;

        setFormData(prev => ({
            ...prev,
            [id]: type === 'file' ? files[0] : value
        }));

        if (errors[id]) {
            setErrors(prev => ({
                ...prev,
                [id]: false
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {
            fieldName: formData.fieldName.length < 5 || formData.fieldName.length > 20,
            fieldLocation: formData.fieldLocation.length < 7,
            fieldSize: !formData.fieldSize || Number(formData.fieldSize) <= 0
        };

        return !Object.values(newErrors).some(error => error);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log('Form submitted:', formData)
            dispatch(addField(formData))
            setIsAddModalOpen(false);
            resetForm();
        }
    };

    const handleEditField = (field) => {
        console.log("Editing field:", field);
    };

    const handleDeleteField = (fieldCode) => {
        console.log("Deleting field with code:", fieldCode);
        dispatch(deleteField(fieldCode));
    };


    const resetForm = () => {
        setFormData({
            fieldCode: '',
            fieldName: '',
            fieldLocation: '',
            fieldSize: '',
            img_1: null,
            img_2: null
        });
        setErrors({
            fieldName: false,
            fieldLocation: false,
            fieldSize: false,
            img_1: false,
            img_2: false
        });
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
                            <div className="flex space-x-4">
                                <div className="flex ml-5 rounded-md shadow-sm items-center ring-1 ring-inset ring-gray-300 sm:max-w-md">
                                    <i className="fa-solid fa-magnifying-glass ml-2 mr-1 text-gray-500 cursor-pointer"></i>
                                    <input
                                        type="text"
                                        className="block flex-1 w-32 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 sm:text-sm/6 sm:w-72"
                                        placeholder="Search..."
                                    />
                                </div>
                            </div>
                            <button
                                onClick={() => setIsAddModalOpen(true)}
                                className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 shadow-lg hover:opacity-90 transition duration-200"
                            >
                                <span className="text-lg font-bold">+</span>
                                <span>Add Field</span>
                            </button>
                        </div>
                    </div>

                    {/* Table section */}
                    <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                        <table className="w-full text-center">
                            <thead>
                            <tr className="bg-gradient-to-r from-indigo-200 to-blue-200 text-gray-700">
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
                                            onClick={() => handleEditField(field)}
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
                        onSubmit={handleSubmit}
                        formData={formData}
                        handleInputChange={handleInputChange}
                        errors={errors}
                        resetForm={resetForm}
                    />
                )}
            </section>
        </div>
    );
};

export default Field;