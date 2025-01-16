import React, {useEffect, useState} from 'react'
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import CropInputModel from "@/components/crop/CropInputModel";
import {Button} from "@/components/ui/button";
import {CropModel} from "@/model/CropModel";
import { updateCrop} from "@/redux/CropSlice";
import {useDispatch} from "react-redux";

const EditCropForm = ({ isOpen, onClose, cropsData }) => {
    const [cropCode, setCropCode] = useState("");
    const [cropName, setCropName] = useState("");
    const [cropScientificName, setCropScientificName] = useState("");
    const [cropCategory, setCropCategory] = useState("");
    const [cropField, setCropField] = useState("");
    const [cropSeason, setCropSeason] = useState("");
    const [cropImage,setCropImage ] = useState<File | null>(null);

    useEffect(() => {
        if (isOpen && cropsData) {
            setCropCode(cropsData.cropCode);
            setCropName(cropsData.cropCommonName);
            setCropScientificName(cropsData.cropScientificName);
            setCropCategory(cropsData.cropCategory);
            setCropField(cropsData.cropField);
            setCropSeason(cropsData.cropSeason);
            setCropImage(cropsData.cropImage);
        }
    }, [isOpen, cropsData]);


    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const cropModel = new CropModel(
            cropCode,
            cropName,
            cropScientificName,
            cropCategory,
            cropField,
            cropSeason,
            cropImage
        );
        console.log('Form updated:', cropModel);
        dispatch(updateCrop(cropModel));
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
                    <DialogTitle className="text-2xl font-bold text-zinc-900">Edit Crop</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <CropInputModel setCropCode={setCropCode} setCropName={setCropName} setCropScientificName={setCropScientificName}
                                    setCropCategory={setCropCategory} setCropField={setCropField} setCropSeason={setCropSeason} setCropImage={setCropImage}
                                    cropCode={cropCode} cropName={cropName} cropScientificName={cropScientificName} cropCategory={cropCategory}
                                    cropField={cropField} cropSeason={cropSeason} cropImage={cropImage}
                    />
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
                            Save Crop
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
export default EditCropForm
