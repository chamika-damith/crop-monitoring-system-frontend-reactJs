import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {Label} from "@/components/ui/label";

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
                ...field
            });
        }
    }, [field]);

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

        setErrors(newErrors);
        return !Object.values(newErrors).some(error => error);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            onSubmit(formData);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-8 max-w-md w-full">
                <h2 className="text-2xl font-bold mb-6">Edit Field</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <Label htmlFor="fieldName" className="text-sm font-medium text-zinc-700">
                            Field Name
                        </Label>
                        <Input
                            type="text"
                            id="fieldName"
                            value={formData.fieldName}
                            onChange={handleInputChange}
                            placeholder="Field Name"
                            className={errors.fieldName ? 'border-red-500' : ''}
                        />
                        {errors.fieldName && (
                            <p className="text-red-500 text-sm">Field name must be between 5 and 20 characters</p>
                        )}
                    </div>

                    <div>
                        <Label htmlFor="fieldLocation" className="text-sm font-medium text-zinc-700">
                            Location
                        </Label>
                        <Input
                            type="text"
                            id="fieldLocation"
                            value={formData.fieldLocation}
                            onChange={handleInputChange}
                            placeholder="Field Location"
                            className={errors.fieldLocation ? 'border-red-500' : ''}
                        />
                        {errors.fieldLocation && (
                            <p className="text-red-500 text-sm">Location must be at least 7 characters</p>
                        )}
                    </div>

                    <div>
                        <Label htmlFor="fieldSize" className="text-sm font-medium text-zinc-700">
                            Size (in sq. ft)
                        </Label>
                        <Input
                            type="number"
                            id="fieldSize"
                            value={formData.fieldSize}
                            onChange={handleInputChange}
                            placeholder="Field Size"
                            className={errors.fieldSize ? 'border-red-500' : ''}
                        />
                        {errors.fieldSize && (
                            <p className="text-red-500 text-sm">Field size must be greater than 0</p>
                        )}
                    </div>

                    <div>
                        <Label htmlFor="fieldImage" className="text-sm font-medium text-zinc-700">
                            Upload Image 1
                        </Label>
                        <Input
                            type="file"
                            id="img_1"
                            onChange={handleInputChange}
                            className="mb-2"
                        />
                    </div>

                    <div>
                        <Label htmlFor="fieldImage2" className="text-sm font-medium text-zinc-700">
                            Upload Image 2
                        </Label>
                        <Input
                            type="file"
                            id="img_2"
                            onChange={handleInputChange}
                            className="mb-2"
                        />
                    </div>

                    <div className="flex justify-end space-x-4">
                        <Button
                            type="button"
                            onClick={onClose}
                            variant="outline"
                        >
                            Cancel
                        </Button>
                        <Button type="submit">
                            Save Changes
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditFieldForm;