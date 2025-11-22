"use client"

import Image from "next/image";
import {useState} from "react";
import Nine from "./Nine"


export default function QuestionEight({value}: { value: number }) {
    const imageStyling = "mx-10 w-[16vw] h-[32vh] inline border-pink-950 border-4 object-fill"
    const labelStyling = "w-[16vw] mx-auto mb-10"

    const [score, setScore] = useState(value);
    const [nextQ, setNextQ] = useState(true);


    function addScore(choice: number) {
        if (choice === 1) {
            setScore(value + 1);
        } else if (choice === 2) {
            setScore(value - 1);
        } else if (choice === 3) {
            setScore(value);
        } else if (choice === 4) {
            setScore(value + 2);
        }

        setNextQ(false)

    }

    return (
        <>{nextQ ? <div className="text-center mt-20">
            <h1 className="block mb-6">If you could solve only one of these world problems today, which would you
                choose:</h1>
            <div className="flex flex-row justify-center items-center">
                <div className="inline">
                    <button onClick={() => addScore(1)}>
                        <Image src="/climate.jpeg" alt="Climate Change" width={200} height={200}
                               className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>Climate Change</h3>
                </div>
                <div className="inline">
                    <button onClick={() => addScore(2)}>
                        <Image src="/food.jpg" alt="Food Insecurity" width={200} height={200} className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>Food Insecurity</h3>
                </div>
            </div>
            <div className="flex flex-row justify-center items-center">
                <div className="inline">
                    <button onClick={() => addScore(3)}>
                        <Image src="/healthcare.jpg" alt="Healthcare Access" width={200} height={200}
                               className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>Healthcare Access</h3>
                </div>
                <div className="inline">
                    <button onClick={() => addScore(4)}>
                        <Image src="/armed.jpg" alt="Armed Violence" width={200} height={200} className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>Armed Violence</h3>
                </div>
            </div>
        </div> : <Nine value={score}/>}
        </>
    )
}