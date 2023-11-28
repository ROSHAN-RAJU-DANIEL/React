import React, { useState } from "react";
import FavouritesIcon from "../assets/Favourite.svg";
import DeletedIcon from "../assets/Trash.svg";
import AppLogo from "../assets/AppLogo.svg";
import SearchIcon from "../assets/SearchIcon.svg";
import Folder from "../assets/Folder.svg";
import MainFolder from "../assets/MainFolder.svg";
import NewNoteIcon from "./NewNoteIcon";
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedNoteItem, setCreatingNote, setView, setSearchText } from '../redux/slice'

const LeftSidebar = () => {
    const dispatch = useDispatch();
    const showFavorites = useSelector((state) => state.notes.showFavorites);
    const showDeleted = useSelector((state) => state.notes.showDeleted);
    const selectedFolder = useSelector((state) => state.notes.selectedFolder);
    const searchText = useSelector((state) => state.notes.searchText);
    const [searchMode, setSearchMode] = useState(false);

    const [folderMessage, setFolderMessage] = useState("");

    const handleNewNoteClick = () => {
        if (showFavorites || showDeleted) {
            setFolderMessage("Select a folder before creating a new note");
            setTimeout(() => {
                setFolderMessage("");
            }, 2000);
        } else {
            dispatch(setCreatingNote(true));
            dispatch(setSelectedNoteItem(null));
        }
    };

    const onFolderClick = (folder) => {
        dispatch(setView(folder));
        dispatch(setSelectedNoteItem(null));
    };

    return (
        <div className="w-[250px] h-100% bg-[#0a0a0a] p-4">
            <div className="flex items-center justify-between mt-2 mb-6">
                <div className="flex items-center">
                    <span className="text-white text-xl font-kaushan mr-2">Nowted</span>
                    <img src={AppLogo} alt="Nowted Logo" className="w-3 h-3 mr-2 mb-3" />
                </div>
                <img
                    src={SearchIcon}
                    alt="search"
                    className="w-4 h-4 mr-2 cursor-pointer"
                    onClick={() => setSearchMode(true)}
                />
            </div>
            <>
                {searchMode ? (
                    <div>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchText}
                            onChange={(e) => dispatch(setSearchText(e.target.value))}
                            className="w-40 p-2 bg-[#0a0a0a] text-white text-sm border-b-2 border-[#312EB5] focus:outline-none focus:border-[#312EB5]"
                        />
                        <button
                            onClick={() => {
                                setSearchMode(false);
                                dispatch(setSearchText(""));
                            }}
                            className="text-white text-xs ml-2 cursor-pointer"
                        >
                            X
                        </button>
                    </div>
                ) : (
                    <NewNoteIcon onClick={() => handleNewNoteClick()} />
                )}
            </>
            {folderMessage && <div className=" mt-2 ml-2 text-sm text-red-400">{folderMessage}</div>}
            <div className="mb-4 mt-12 p-2">
                <div className="flex items-center justify-between text-[#737373] font-bold text-sm mb-6">
                    Folders
                    <img src={MainFolder} alt="MainFolder" className="w-4 h-4" />
                </div>
                <ul className="font-source-sans-pro text-[#737373] text-base font-bold cursor-pointer">
                    <li
                        className={`w-[250px] h-[30px] flex items-center mb-4 cursor-pointer transition-colors duration-300 hover:text-[#2c2c2c] ${selectedFolder === 'Personal' ? 'text-[#312EB5]' : ''
                            }`}
                        onClick={() => onFolderClick('Personal')}
                    >
                        <img src={Folder} alt="Folder" className="w-4 h-4 mr-2" />
                        Personal
                    </li>
                    <li
                        className={`w-[250px] h-[30px] flex items-center mb-4 cursor-pointer transition-colors duration-300 hover:text-[#2c2c2c] ${selectedFolder === 'Work' ? 'text-[#312EB5]' : ''
                            }`}
                        onClick={() => onFolderClick('Work')}
                    >
                        <img src={Folder} alt="Folder" className="w-4 h-4 mr-2" />
                        Work
                    </li>
                    <li
                        className={` w-[250px] h-[30px] flex items-center mb-4 cursor-pointer transition-colors duration-300 hover:text-[#2c2c2c] ${selectedFolder === 'Travel' ? 'text-[#312EB5]' : ''
                            }`}
                        onClick={() => onFolderClick('Travel')}
                    >
                        <img src={Folder} alt="Folder" className="w-4 h-4 mr-2" />
                        Travel
                    </li>
                    <li
                        className={` w-[250px] h-[30px] flex items-center mb-4 cursor-pointer transition-colors duration-300 hover:text-[#2c2c2c] ${selectedFolder === 'Events' ? 'text-[#312EB5]' : ''
                            }`}
                        onClick={() => onFolderClick('Events')}
                    >
                        <img src={Folder} alt="Folder" className="w-4 h-4 mr-2" />
                        Events
                    </li>
                    <li
                        className={`w-[250px] h-[30px] flex items-center mb-4  cursor-pointer transition-colors duration-300 hover:text-[#2c2c2c] ${selectedFolder === 'Finances' ? 'text-[#312EB5]' : ''
                            }`}
                        onClick={() => onFolderClick('Finances')}
                    >
                        <img src={Folder} alt="Folder" className="w-4 h-4 mr-2" />
                        Finances
                    </li>
                </ul>
            </div>
            <div className="mb-4 mt-10 p-2">
                <div className="text-[#737373]  font-bold text-sm mb-6">More</div>
                <ul className="font-source-sans-pro text-[#737373] text-base font-bold group">
                    <li className={`w-[250px] h-[30px] flex items-center mb-4 cursor-pointer transition-colors duration-300 hover:text-[#2c2c2c] ${showFavorites ? 'text-[#312EB5]' : ''}`} onClick={() => onFolderClick('Favourites')}>
                        <img src={FavouritesIcon} alt="Favourites" className="w-4 h-4 mr-2" />
                        Favourites
                    </li>
                    <li className={`w-[250px] h-[30px] flex items-center mb-4 cursor-pointer transition-colors duration-300 hover:text-[#2c2c2c] ${showDeleted ? 'text-[#312EB5]' : ''}`} onClick={() => onFolderClick('Trash')}>
                        <img src={DeletedIcon} alt="Deleted" className="w-4 h-4 mr-2" />
                        Trash
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default LeftSidebar;
