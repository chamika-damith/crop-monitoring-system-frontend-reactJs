export interface CropModel{
    cropCode:string,
    cropCommonName:string,
    cropScientificName:string,
    cropCategory:string,
    cropField:string,
    cropSeason:string,
    cropImage:File | null;
}