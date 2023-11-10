import React from "react";
import FavouritesIcon from "../assets/Favourite.svg";
import DeletedIcon from "../assets/Trash.svg";
import ArchivedIcon from "../assets/Archived.svg";
import AppLogo from "../assets/AppLogo.svg";
import SearchIcon from "../assets/SearchIcon.svg";
import Folder from "../assets/Folder.svg"
import { useDispatch } from 'react-redux';
import { setShowFavorites } from '../redux/slice'

const LeftSidebar = () => {
    const dispatch = useDispatch();
    const onShowFavoritesClick = () => {
        dispatch(setShowFavorites(true));
    };
    return (
        <div className="w-[250px] h-screen bg-[#0a0a0a] p-4">
            <div className="flex items-center justify-between mt-2 ml-2 mb-6">
                <div className="flex items-center">
                    <span className="text-white text-xl font-kaushan mr-2">Nowted</span>
                    <img src={AppLogo} alt="Nowted Logo" className="w-3 h-3 mr-2 mb-3" />
                </div>
                <img src={SearchIcon} alt="search" className="w-4 h-4 mr-8" />
            </div>
            <div className="bg-[#2c2c2c] p-2 mb-4 rounded-lg">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full bg-transparent text-white focus:outline-none"
                />
            </div>
            <div className="mb-4 mt-6 p-2">
                <div className="text-[#737373]  font-bold text-base mb-6">Folders</div>
                <ul className="font-source-sans-pro text-[#737373] text-sm font-bold cursor-pointer">
                    <li className="flex items-center  mb-4 ">
                        <img src={Folder} alt="Folder" className="w-4 h-4 mr-2" />
                        Personal
                    </li>
                    <li className="flex items-center mb-4">
                        <img src={Folder} alt="Folder" className="w-4 h-4 mr-2" />
                        Work
                    </li>
                    <li className="flex items-center mb-4">
                        <img src={Folder} alt="Folder" className="w-4 h-4 mr-2" />
                        Travel
                    </li>
                    <li className="flex items-center mb-4">
                        <img src={Folder} alt="Folder" className="w-4 h-4 mr-2" />
                        Events
                    </li>
                    <li className="flex items-center mb-4">
                        <img src={Folder} alt="Folder" className="w-4 h-4 mr-2" />
                        Finance
                    </li>
                </ul>
            </div>
            <div className="mb-4 mt-10 p-2">
                <div className="text-[#737373] font-bold mb-6">More</div>
                <ul className="font-source-sans-pro text-[#737373] text-sm font-bold group">
                    <li className="flex items-center mb-4 cursor-pointer transition-colors duration-300 hover:bg-[#2c2c2c]" onClick={onShowFavoritesClick}>
                        <img src={FavouritesIcon} alt="Favourites" className="w-4 h-4 mr-2" />
                        Favourites
                    </li>
                    <li className="flex items-center mb-4 cursor-pointer transition-colors duration-300 hover:bg-[#2c2c2c]">
                        <img src={DeletedIcon} alt="Deleted" className="w-4 h-4 mr-2" />
                        Trash
                    </li>
                    <li className="flex items-center mb-4 cursor-pointer transition-colors duration-300 hover:bg-[#2c2c2c]">
                        <img src={ArchivedIcon} alt="Archived" className="w-4 h-4 mr-2" />
                        Archived
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default LeftSidebar;
