import React from "react";

type Tprops = {
    name: string;
    rollno: number;
    day: string;
}
const Card=(props:Tprops) => {
    return (
        <div className=" p-6 rounded-lg shadow-md border border-gray-300 text-center mx-auto my-4 backdrop-blur-sm bg-gradient-to-r from-cyan-800 to-gray-300 w-1/4">
            
            <h1 className=" text-2xl font-bold underline text-black p-2"> GIAIC CARD </h1>

            <h1 className="text-2xl font-bold text-gray-800">Name: {props.name}</h1> 

            <h1 className="text-lg font-semibold text-gray-700">Roll Number: {props.rollno}</h1>

            <h1 className="text-md font-semibold text-gray-700">Day: {props.day}</h1>
        </div>
    );
}

export default Card;
