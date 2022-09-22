import React from "react";
import Header from '../components/Header'

function Home() {
    return (
        <div className="flex flex-col w-full h-screen">
            <Header />
            <div className="h-5/6 mx-1 md:mx-5 rounded-xl overflow-hidden">
                <div id="container" className="w-full h-screen"></div>
            </div>
        </div>
    );
}

export default Home;
