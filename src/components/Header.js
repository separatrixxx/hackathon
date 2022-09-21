import React from "react";
import {RiRouteLine} from "react-icons/ri";

function Header() {
    return (
        <div className="flex justify-start p-5">
            <input id="city_to" className="block shadow-inner w-28 md:w-64 h-8 md:h-10 rounded-xl pl-2 md:pl-5 p-1
            focus:outline-none text-gray-800 focus:border-sky-400 focus:ring-2 hover:ring-2 ring-1 ring-sky-400
            text-xs md:text-base bg-white mr-1 md:mr-5 ease-in-out duration-300" placeholder="Куда поехать" type="text" />
            <button id="main_btn" className="flex justify-center items-center w-10 h-10 hover:bg-sky-400 rounded-full
            text-2xl text-sky-400 hover:text-white drop-shadow-2xl transition-all ease-in-out duration-300">
                <RiRouteLine />
            </button>
        </div>
    );
}

export default Header;
