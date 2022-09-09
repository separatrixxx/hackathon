import React from 'react';

function NotFound () {

    return (
        <div className="scroll-smooth bg-white w-full h-screen flex flex-col justify-center items-center p-5">
            <a href="/" className="mt-10 md:mt-16 text-xl md:text-5xl text-gray-800 text-center hover:text-gray-500
            transition-colors duration-500 font-black">Такой страницы не существует :(</a>
        </div>
    );
}

export default NotFound;