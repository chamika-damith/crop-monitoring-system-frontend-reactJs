import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const FieldInputModel = (props) => {
    return (
        <div>
            <Card className="border border-zinc-200">
                <CardContent className="pt-2">
                    <div className="space-y-4">
                        {/* Field Code */}
                        <div>
                            <Label htmlFor="fieldCode" className="text-sm font-medium text-zinc-700">
                                Field Code
                            </Label>
                            <Input
                                type="text"
                                id="fieldCode"
                                className="bg-zinc-100/50 text-zinc-500"
                                onChange={(e) => props.setFieldCode(e.target.value)}
                                placeholder="Auto-generated field code"
                                value={props.fieldCode}
                            />
                        </div>

                        {/* Field Name */}
                        <div>
                            <Label htmlFor="fieldName" className="text-sm font-medium text-zinc-700">
                                Field Name
                            </Label>
                            <Input
                                type="text"
                                id="fieldName"
                                className={'border-zinc-200 focus:ring-zinc-200'}
                                placeholder="Enter field name (5-20 chars)"
                                onChange={(e) => props.setFieldName(e.target.value)}
                                required
                                value={props.fieldName}
                            />
                        </div>

                        {/* Location */}
                        <div>
                            <Label htmlFor="fieldLocation" className="text-sm font-medium text-zinc-700">
                                Location
                            </Label>
                            <Input
                                type="text"
                                id="fieldLocation"
                                className={'border-zinc-200 focus:ring-zinc-200'}
                                placeholder="Enter location (min 7 chars)"
                                onChange={(e) => props.setFieldLocation(e.target.value)}
                                required
                                value={props.fieldLocation}
                            />
                        </div>

                        {/* Size */}
                        <div>
                            <Label htmlFor="fieldSize" className="text-sm font-medium text-zinc-700">
                                Size (in sq. ft)
                            </Label>
                            <Input
                                type="number"
                                id="fieldSize"
                                className={'border-zinc-200 focus:ring-zinc-200'}
                                placeholder="Enter field size (positive number)"
                                onChange={(e) => props.setFieldSize(e.target.value)}
                                required
                                value={props.fieldSize}
                            />
                        </div>

                        {/* Image Upload 1 */}
                        <div>
                            <Label htmlFor="img_1" className="text-sm font-medium text-zinc-700">
                                Upload Image 1
                            </Label>
                            <Input
                                type="file"
                                id="img_1"
                                accept="image/*"
                                className="border-zinc-200 file:bg-zinc -100 file:text-zinc-700 file:border-0 file:rounded-lg file:px-4 file:py-1 hover:file:bg-zinc-200 cursor-pointer"
                                onChange={(e) => {
                                    const file = e.target.files ? e.target.files[0] : null;
                                    props.setImg_1(file);
                                }}
                            />
                            {props.img_1 && <p className="text-sm text-zinc-500">Selected: {props.img_1.name}</p>}
                        </div>

                        {/* Image Upload 2 */}
                        <div>
                            <Label htmlFor="img_2" className="text-sm font-medium text-zinc-700">
                                Upload Image 2
                            </Label>
                            <Input
                                type="file"
                                id="img_2"
                                accept="image/*"
                                className="border-zinc-200 file:bg-zinc-100 file:text-zinc-700 file:border-0 file:rounded-lg file:px-4 file:py-1 hover:file:bg-zinc-200 cursor-pointer"
                                onChange={(e) => {
                                    const file = e.target.files ? e.target.files[0] : null;
                                    props.setImg_2(file);
                                }}
                            />
                            {props.img_2 && <p className="text-sm text-zinc-500">Selected: {props.img_2.name}</p>}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default FieldInputModel;