import React from 'react'
import {Card, CardContent} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {useSelector} from "react-redux";
import {RootState} from "@/store/store";

const CropInputModel = (props) => {
    const fields = useSelector((state:RootState)=>state.field);
    return (
        <Card className="border border-zinc-200">
            <CardContent className="pt-2">
                <div className="space-y-4">
                    <div>
                        <Label htmlFor="cropCode" className="text-sm font-medium text-zinc-700">Crop Code</Label>
                        <Input type="text" id="cropCode"
                               className="border border-gray-300 rounded w-full p-2"
                               placeholder="Enter crop code"
                               value={props.cropCode}
                               onChange={(e) => props.setCropCode(e.target.value)}
                               required/>
                    </div>
                    <div>
                        <Label htmlFor="cropName" className="block mb-2">Crop Common Name</Label>
                        <Input type="text" id="cropName"
                               className="border border-gray-300 rounded w-full p-2"
                               placeholder="Enter common crop name"
                               value={props.cropName}
                               onChange={(e) => props.setCropName(e.target.value)}
                               required/>
                    </div>
                    <div>
                        <Label htmlFor="cropScientificName" className="block mb-2">Crop Scientific Name</Label>
                        <Input type="text" id="cropScientificName"
                               className="border border-gray-300 rounded w-full p-2"
                               placeholder="Enter scientific name"
                               value={props.cropScientificName}
                               onChange={(e) => props.setCropScientificName(e.target.value)}
                               required/>
                    </div>
                    <div>
                        <Label htmlFor="cropCategory" className="block mb-2">Category</Label>
                        <select id="cropCategory"
                                className="border border-gray-300 rounded w-full p-2"
                                value={props.cropCategory}
                                onChange={(e) => props.setCropCategory(e.target.value)}
                                required>
                            <option value="">Select Category</option>
                            <option value="Grain">Grain</option>
                            <option value="Vegetable">Vegetable</option>
                            <option value="Fruit">Fruit</option>
                            <option value="Legume">Legume</option>
                            <option value="Root">Root</option>
                            <option value="Herb">Herb</option>
                        </select>
                    </div>
                    <div>
                        <Label htmlFor="cropField" className="block mb-2">Field</Label>
                        <select id="cropField"
                                className="border border-gray-300 rounded w-full p-2"
                                value={props.cropField}
                                onChange={(e) => props.setCropField(e.target.value)}
                                required>
                            <option value="">Select Field</option>
                            {fields.map((field,index) =>{
                                return <option value={field.fieldCode} key={index}>{field.fieldCode}</option>
                            })}
                        </select>
                    </div>
                    <div>
                        <Label htmlFor="cropSeason" className="text-sm font-medium text-zinc-700">Season</Label>
                        <select id="cropSeason"
                                className="border border-gray-300 rounded w full p-2"
                                value={props.cropSeason}
                                onChange={(e) => props.setCropSeason(e.target.value)}
                                required>
                            <option value="">Select Season</option>
                            <option value="Spring">Spring</option>
                            <option value="Summer">Summer</option>
                            <option value="Fall">Fall</option>
                            <option value="Winter">Winter</option>
                        </select>
                    </div>
                    <div>
                        <Label htmlFor="cropImage" className="text-sm font-medium text-zinc-700">Upload Image</Label>
                        <Input type="file" id="cropImage"
                               accept="image/*"
                               className="border border-gray-300 rounded w-full p-2"
                               onChange={(e) => props.setCropImage(e.target.files[0])}/>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
export default CropInputModel
