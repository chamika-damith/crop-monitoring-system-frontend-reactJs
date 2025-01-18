import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { addCrop } from "@/redux/CropSlice";
import { CropModel } from "@/model/CropModel";
import CropInputModel from "@/components/crop/CropInputModel";

const AddCropForm = ({ isOpen, onClose }) => {
    const [cropCode, setCropCode] = useState("");
    const [cropName, setCropName] = useState("");
    const [cropScientificName, setCropScientificName] = useState("");
    const [cropCategory, setCropCategory] = useState("");
    const [cropField, setCropField] = useState("");
    const [cropSeason, setCropSeason] = useState("");
    const [cropImage, setCropImage] = useState<File | null>(null);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const cropModel = new CropModel(
            cropCode,
           cropScientificName,
            cropCategory,
            cropField,
            cropName,
            cropSeason,
            cropImage
        );
        console.log('Form submitted:', cropModel);
        dispatch(addCrop(cropModel));
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
                    <DialogTitle className="text-2xl font-bold text-zinc-900">Add New Crop</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <CropInputModel setCropCode={setCropCode} setCropName={setCropName} setCropScientificName={setCropScientificName}
                                    setCropCategory={setCropCategory} setCropField={setCropField} setCropSeason={setCropSeason} setCropImage={setCropImage}/>
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
                            Add Crop
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default AddCropForm;