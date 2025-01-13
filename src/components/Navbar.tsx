import {constants} from "../assets/constants.ts";
import {useState} from "react";

const Navbar = () => {
    const [showMenu,setMenu] = useState(false);
    return (
        <div>
            <nav className="bg-white shadow">
                <div className="container mx-auto max-w-7xl sm:px-6">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img className="h-14 w-14" src={constants.logo} alt="Green Shadow (Pvt) Ltd."/>
                            </div>
                            <div
                                className="flex ml-5 rounded-md shadow-sm items-center ring-1 ring-inset ring-gray-300 sm:max-w-md">
                                <i className="fa-solid fa-magnifying-glass ml-2 mr-1 text-gray-500 cursor-pointer"></i>
                                <input type="text"
                                       className="block flex-1 w-32 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 sm:text-sm/6 sm:w-72"
                                       placeholder="Search..."/>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-5 flex items-center md:ml-6">
                                <button type="button"
                                        className="relative rounded-full mr-3 bg-gray-50 p-1 text-gray-700 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="sr-only">View notifications</span>
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                         stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"/>
                                    </svg>
                                </button>
                                <div id="profileModal"
                                     className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 hidden">
                                    <div className="bg-white rounded-lg p-6 w-96">
                                        <h2 className="text-lg font-bold mb-4">User Profile</h2>
                                        <form id="profileForm">
                                            <div className="mb-4">
                                                <label htmlFor="email"
                                                       className="block text-sm font-medium text-gray-700">Email</label>
                                                <input type="email" id="Profileemail" name="email"
                                                       className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                                       required/>
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="password"
                                                       className="block text-sm font-medium text-gray-700">Password</label>
                                                <input type="password" id="Profilepassword" name="password"
                                                       className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                                       required/>
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="Profilerole"
                                                       className="block text-sm font-medium text-gray-700">Role</label>
                                                <select id="Profilerole" name="Profilerole"
                                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2">
                                                    <option value="">Select Role</option>
                                                    <option value="USER">User</option>
                                                    <option value="ADMIN">Admin</option>
                                                    <option value="MANAGER">Manager</option>
                                                </select>
                                            </div>

                                            <button type="submit"
                                                    className="w-full bg-blue-500 text-white rounded-md p-2">Save
                                            </button>
                                            <button type="button" id="ProfilecloseModal"
                                                    className="mt-2 w-full bg-red-500 text-white rounded-md p-2">Close
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <div className="relative ml-3 group">
                                    <div>
                                        <button
                                            type="button"
                                            className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                            aria-controls="user-menu-button"
                                            aria-expanded="false"
                                            aria-haspopup="true"
                                        >
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src={constants.profilePicture}
                                                alt="profile pic"
                                            />
                                        </button>
                                    </div>
                                    <div
                                        className="absolute right-0 z-10  w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden group-hover:block"
                                        role="menu"
                                        aria-orientation="vertical"
                                        aria-labelledby="user-menu-button"
                                        id="user-menu"
                                    >
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700"
                                            role="menuitem"
                                            id="user-menu-item-0"
                                        >
                                            Your Profile
                                        </a>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700"
                                            role="menuitem"
                                            id="signOut"
                                        >
                                            Sign out
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button type="button"
                                    className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    aria-controls="mobile-menu" aria-expanded="false"
                                    onClick={() => setMenu(!showMenu)}>
                                <span className="sr-only">Open main menu</span>
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                     stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`${showMenu ? "block" : "hidden"} md-hidden`} id="mobile-menu">
                    <div className="border-t border-gray-700 pb-3 pt-4">
                        <div className="group flex items-center">
                            <a href="#" className="text-gray-600 hover:text-gray-900">
                                <div
                                    className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-200">
                                    <i className="fa-solid fa-house"></i>
                                </div>
                            </a>
                            <div
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-700 hover:text-white">
                                Dashboard
                            </div>
                        </div>

                        <div className="group flex items-center">
                            <a href="#" className="text-gray-600 hover:text-gray-900">
                                <div
                                    className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-200">
                                    <i className="fas fa-seedling"></i>
                                </div>
                            </a>
                            <div
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-700 hover:text-white">
                                Field
                            </div>
                        </div>

                        <div className="group flex items-center">
                            <a href="#" className="text-gray-600 hover:text-gray-900">
                                <div
                                    className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-200">
                                    <i className="fas fa-leaf"></i>
                                </div>
                            </a>
                            <div
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-700 hover:text-white">
                                Crop
                            </div>
                        </div>

                        <div className="group flex items-center">
                            <a href="#" className="text-gray-600 hover:text-gray-900">
                                <div
                                    className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-200">
                                    <i className="fas fa-users"></i>
                                </div>
                            </a>
                            <div
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-700 hover:text-white">
                                Staff
                            </div>
                        </div>

                        <div className="group flex items-center">
                            <a href="#" className="text-gray-600 hover:text-gray-900">
                                <div
                                    className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-200">
                                    <i className="fas fa-tractor"></i>
                                </div>
                            </a>
                            <div
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-700 hover:text-white">
                                Vehicle
                            </div>
                        </div>

                        <div className="group flex items-center">
                            <a href="#" className="text-gray-600 hover:text-gray-900">
                                <div
                                    className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-200">
                                    <i className="fas fa-tools"></i>
                                </div>
                            </a>
                            <div
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-700 hover:text-white">
                                Equipment
                            </div>
                        </div>

                        <div className="group flex items-center">
                            <a href="#" className="text-gray-600 hover:text-gray-900">
                                <div
                                    className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-200">
                                    <i className="fas fa-clipboard-list"></i>
                                </div>
                            </a>
                            <div
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-700 hover:text-white">
                                Log
                            </div>
                        </div>

                        <div className="mt-3 space-y-1 px-2">
                            <a href="#"
                               className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Your
                                Profile</a>
                            <a href="#"
                               className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Sign
                                out</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar
