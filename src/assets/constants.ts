import logo from '../assets/logo.png'
import profilePicture from '../assets/profilePic.png'
import {Leaf, Sprout, Tractor, Users} from "lucide-react";

export const constants = {
    logo,
    profilePicture,
}

export const cards = [
    { Icon: Sprout, label: "FIELD", value: "350", bgColor: "bg-emerald-50", iconColor: "text-primary", hoverBg: "hover:bg-emerald-100" },
    { Icon: Leaf, label: "CROP", value: "930", bgColor: "bg-teal-50", iconColor: "text-indigo-500", hoverBg: "hover:bg-teal-100" },
    { Icon: Users, label: "STAFF", value: "1100", bgColor: "bg-cyan-50", iconColor: "text-green-500", hoverBg: "hover:bg-cyan-100" },
    { Icon: Tractor, label: "VEHICLE", value: "500", bgColor: "bg-sky-50", iconColor: "text-rose-500", hoverBg: "hover:bg-sky-100" }
];