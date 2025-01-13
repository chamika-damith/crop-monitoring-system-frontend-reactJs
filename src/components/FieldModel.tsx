import React from 'react'
import {Card, CardContent} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";

const FieldModel = (props:any) => {
    return (
        <div>
            <Card className="border border-zinc-200">
                <CardContent className="pt-6">
                    <div className="space-y-6">
                        {/* Field Code */}
                        <div className="space-y-2">
                            <Label htmlFor="fieldCode" className="text-sm font-medium text-zinc-700">
                                Field Code
                            </Label>
                            <Input
                                type="text"
                                id="fieldCode"
                                className="bg-zinc-100/50 text-zinc-500"
                                onChange={props.handleInputChange}
                                placeholder="Auto-generated field code"
                                value={props.formData.fieldCode}
                            />
                        </div>

                        {/* Field Name */}
                        <div className="space-y-2">
                            <Label htmlFor="fieldName" className="text-sm font-medium text-zinc-700">
                                Field Name
                            </Label>
                            <Input
                                type="text"
                                id="fieldName"
                                className={`${props.errors.fieldName ? 'border-red-500 focus:ring-red-500' : 'border-zinc-200 focus:ring-zinc-200'}`}
                                placeholder="Enter field name (5-20 chars)"
                                value={props.formData.fieldName}
                                onChange={props.handleInputChange}
                                required
                            />
                            {props.errors.fieldName && (
                                <p className="text-xs text-red-500 mt-1">
                                    Field name is required: Minimum 5, Max 20 characters, Spaces Allowed.
                                </p>
                            )}
                        </div>

                        {/* Location */}
                        <div className="space-y-2">
                            <Label htmlFor="fieldLocation" className="text-sm font-medium text-zinc-700">
                                Location
                            </Label>
                            <Input
                                type="text"
                                id="fieldLocation"
                                className={`${props.errors.fieldLocation ? 'border-red-500 focus:ring-red-500' : 'border-zinc-200 focus:ring-zinc-200'}`}
                                placeholder="Enter location (min 7 chars)"
                                value={props.formData.fieldLocation}
                                onChange={props.handleInputChange}
                                required
                            />
                            {props.errors.fieldLocation && (
                                <p className="text-xs text-red-500 mt-1">
                                    Location is required: Minimum 7 characters.
                                </p>
                            )}
                        </div>

                        {/* Size */}
                        <div className="space-y-2">
                            <Label htmlFor="fieldSize" className="text-sm font-medium text-zinc-700">
                                Size (in sq. ft)
                            </Label>
                            <Input
                                type="number"
                                id="fieldSize"
                                className={`${props.errors.fieldSize ? 'border-red-500 focus:ring-red-500' : 'border-zinc-200 focus:ring-zinc-200'}`}
                                placeholder="Enter field size (positive number)"
                                value={props.formData.fieldSize}
                                onChange={props.handleInputChange}
                                required
                            />
                            {props.errors.fieldSize && (
                                <p className="text-xs text-red-500 mt-1">
                                    Size is required and must be a positive number.
                                </p>
                            )}
                        </div>

                        {/* Image Upload 1 */}
                        <div className="space-y-2">
                            <Label htmlFor="fieldImage" className="text-sm font-medium text-zinc-700">
                                Upload Image 1
                            </Label>
                            <Input
                                type="file"
                                id="img_1"
                                accept="image/*"
                                className="border-zinc-200 file:bg-zinc-100 file:text-zinc-700 file:border-0 file:rounded-lg file:px-4 file:py-1 hover:file:bg-zinc-200 cursor-pointer"
                                onChange={props.handleInputChange}
                            />
                        </div>

                        {/* Image Upload 2 */}
                        <div className="space-y-2">
                            <Label htmlFor="fieldImage2" className="text-sm font-medium text-zinc-700">
                                Upload Image 2
                            </Label>
                            <Input
                                type="file"
                                id="img_2"
                                accept="image/*"
                                className="border-zinc-200 file:bg-zinc-100 file:text-zinc-700 file:border-0 file:rounded-lg file:px-4 file:py-1 hover:file:bg-zinc-200 cursor-pointer"
                                onChange={props.handleInputChange}
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
export default FieldModel
