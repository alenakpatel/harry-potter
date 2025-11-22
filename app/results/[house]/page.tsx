"use client"

import {useParams} from "next/navigation";

export default function House(){
    const house = useParams<{house: string}>();

    return (
        <div className="text-center my-90">
            <h1 className="font-bold text-5xl">{house.house}</h1>
        </div>
    )
}