import React, {useState} from 'react'
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import AddCropForm from "@/components/crop/AddCropFrom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store/store";
import {deleteCrop} from "@/redux/CropSlice";
import EditCropForm from "@/components/crop/EditCropForm";

const Crop = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const crops = useSelector((state:RootState)=>state.crop)
    const dispatch = useDispatch();
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [currentCropData, setCurrentCropData] = useState(null);


    const handleDeleteCrop = (cropCode) => {
        console.log("Deleting field with code:", cropCode);
        dispatch(deleteCrop(cropCode));
    };

    const handleEditButtonClick = (field) => {
        setCurrentCropData(field);
        setIsEditModalOpen(true);
    };
    return (
        <div className="w-full p-6 space-y-2 md:space-y-0 md:px-8">
            <section id="crop-section">
                <div id="crop">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h1 className="text-2xl font-bold">Crop</h1>
                            <p className="text-gray-500">Manage your crop and view</p>
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
                                + Add Crop
                            </Button>
                        </div>
                    </div>

                    <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                        <table className="w-full text-center">
                            <thead>
                            <tr className="bg-gradient-to-r from-gray-300 to-gray-300 text-gray-700">
                                <th className="p-4 font-semibold text-gray-600">Code</th>
                                <th className="p-4 font-semibold text-gray-600">
                                    Common Name
                                </th>
                                <th className="p-4 font-semibold text-gray-600">
                                    Scientific Name
                                </th>
                                <th className="p-4 font-semibold text-gray-600">
                                    Category
                                </th>
                                <th className="p-4 font-semibold text-gray-600">Season</th>
                                <th className="p-4 font-semibold text-gray-600">Field</th>
                                <th className="p-4 font-semibold text-gray-600">Action</th>
                            </tr>
                            </thead>
                            <tbody className="bg-gray-50 text-gray-600">
                            {crops.map((crop) => (
                                <tr key={crop.cropCode} className="border-b">
                                    <td className="p-4 flex items-center justify-center space-x-5">
                                        <span className="ml-3">{crop.cropCode}</span>
                                        <div className="flex space-x-2">
                                            {crop.cropImage ? (
                                                <img
                                                    src={URL.createObjectURL(crop.cropImage)}
                                                    alt={`${crop.cropCommonName} Preview 1`}
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

                                    <td className="p-4">{crop.cropCommonName}</td>
                                    <td className="p-4">{crop.cropScientificName}</td>
                                    <td className="p-4">{crop.cropCategory}</td>
                                    <td className="p-4">{crop.cropSeason}</td>
                                    <td className="p-4">{crop.cropField}</td>
                                    <td className="p-4 space-x-2">
                                        <button
                                            className="text-blue-500 hover:underline"
                                            onClick={() => handleEditButtonClick(crop)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="text-red-500 hover:underline"
                                            onClick={() => handleDeleteCrop(crop.cropCode)}
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
                    <AddCropForm
                        isOpen={isAddModalOpen}
                        onClose={() => setIsAddModalOpen(false)}
                    />
                )}

                {isEditModalOpen && (
                    <EditCropForm
                        isOpen={isEditModalOpen}
                        onClose={() => setIsEditModalOpen(false)}
                        cropsData={currentCropData}
                    />
                )}
            </section>
        </div>
    )
}
export default Crop
