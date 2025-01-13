import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import FieldModel from "@/components/FieldModel";

const EditFieldForm = ({ isOpen, onClose, onSubmit, field }) => {
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

    useEffect(() => {
        if (field) {
            setFormData({
                fieldCode: field.fieldCode || '',
                fieldName: field.fieldName || '',
                fieldLocation: field.fieldLocation || '',
                fieldSize: field.fieldSize || '',
                img_1: field.img_1 || null,
                img_2: field.img_2 || null
            });
        }
    }, [field]);

    const handleLocalInputChange = (e) => {
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

    const handleLocalSubmit = (e) => {
        e.preventDefault();

        const newErrors = {
            fieldName: formData.fieldName.length < 5 || formData.fieldName.length > 20,
            fieldLocation: formData.fieldLocation.length < 7,
            fieldSize: !formData.fieldSize || Number(formData.fieldSize) <= 0
        };

        if (!Object.values(newErrors).some(error => error)) {
            onSubmit({
                ...formData,
                fieldCode: field.fieldCode
            });
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={(open) => {
            if (!open) {
                onClose();
            }
        }}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-zinc-900">
                        Edit Field
                    </DialogTitle>
                </DialogHeader>

                <form onSubmit={handleLocalSubmit} className="space-y-6">
                    <FieldModel
                        formData={formData}
                        handleInputChange={handleLocalInputChange}
                        errors={errors}
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
                            Update Field
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default EditFieldForm;