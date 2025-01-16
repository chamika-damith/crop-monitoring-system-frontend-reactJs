import React, {useState} from 'react';
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import FieldInputModel from "@/components/field/FieldInputModel";
import {addField} from "@/redux/FieldSlice";
import {useDispatch} from "react-redux";
import {FieldModel} from "@/model/FieldModel";

const AddFieldForm = ({isOpen, onClose}) => {

    const [fieldCode, setFieldCode] = useState("");
    const [fieldName, setFieldName] = useState("");
    const [fieldLocation, setFieldLocation] = useState("");
    const [fieldSize, setFieldSize] = useState("");
    const [img_1, setImg_1] = useState<File | null>(null);
    const [img_2, setImg_2] = useState<File | null>(null);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const fieldModel = new FieldModel(
            fieldCode,
            fieldName,
            fieldLocation,
            fieldSize,
            img_1,
            img_2
        );
        console.log('Form submitted:', fieldModel)
        dispatch(addField(fieldModel))
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
                    <DialogTitle className="text-2xl font-bold text-zinc-900">Add New Field</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <FieldInputModel setFieldCode={setFieldCode} setFieldName={setFieldName}
                                     setFieldLocation={setFieldLocation} setFieldSize={setFieldSize}
                                     setImg_1={setImg_1} setImg_2={setImg_2}
                    />

                    <div className="flex justify-end space-x-4">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={()=>{
                                onClose();
                            }}
                            className="border-zinc-200 text-zinc-700 hover:bg-zinc-100"
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            className="bg-zinc-900 text-white hover:bg-zinc-800"
                        >
                            Add Field
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default AddFieldForm;