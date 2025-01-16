import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { FieldModel } from "@/model/FieldModel";
import { updateField } from "@/redux/FieldSlice";
import { useDispatch } from "react-redux";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import FieldInputModel from "@/components/field/FieldInputModel";

const EditFieldForm = ({ isOpen, onClose, fieldData }) => {
    const [fieldCode, setFieldCode] = useState("");
    const [fieldName, setFieldName] = useState("");
    const [fieldLocation, setFieldLocation] = useState("");
    const [fieldSize, setFieldSize] = useState("");
    const [img_1, setImg_1] = useState<File | null>(null);
    const [img_2, setImg_2] = useState<File | null>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isOpen && fieldData) {
            setFieldCode(fieldData.fieldCode);
            setFieldName(fieldData.fieldName);
            setFieldLocation(fieldData.fieldLocation);
            setFieldSize(fieldData.fieldSize);
            setImg_1(fieldData.img_1);
            setImg_2(fieldData.img_2);
        }
    }, [isOpen, fieldData]);

    function handleSubmit(e) {
        e.preventDefault();
        const fieldModel = new FieldModel(
            fieldCode,
            fieldName,
            fieldLocation,
            fieldSize,
            img_1,
            img_2
        );
        dispatch(updateField(fieldModel));
        onClose();
    }

    return (
        <Dialog open={isOpen} onOpenChange={(open) => {
            if (!open) {
                onClose();
            }
        }}>
            <DialogContent className="bg-white rounded-lg p-8 max-w-md w-full">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-zinc-900">Edit Field</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <FieldInputModel
                        setFieldCode={setFieldCode}
                        setFieldName={setFieldName}
                        setFieldLocation={setFieldLocation}
                        setFieldSize={setFieldSize}
                        setImg_1={setImg_1}
                        setImg_2={setImg_2}
                        fieldCode={fieldCode}
                        fieldName={fieldName}
                        fieldLocation={fieldLocation}
                        fieldSize={fieldSize}
                        img_1={img_1}
                        img_2={img_2}
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
                            className="bg-zinc-900 text-white hover:bg-z inc-800"
                        >
                            Save Field
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default EditFieldForm;