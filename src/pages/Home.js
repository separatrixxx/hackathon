import React from "react";
import Header from '../components/Header'

function Home() {
    return (
        <div className="flex flex-col w-full h-screen">
            <Header />
            <div id="map" className="w-full h-5/6"></div>
        </div>
    );
}

export default Home;
