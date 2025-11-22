"use client"

import Image from "next/image";
import {useState} from "react";
import Ten from "./Ten"


export default function QuestionNine({value}: { value: number }) {
    const imageStyling = "mx-10 w-[16vw] h-[32vh] inline border-pink-950 border-4 object-fill"

    const [score, setScore] = useState(value);
    const [nextQ, setNextQ] = useState(true);


    function addScore(choice: number) {
        if (choice === 1) {
            setScore(value - 1);
        } else if (choice === 2) {
            setScore(value + 1);
        }

        setNextQ(false)

    }

    return (
        <>{nextQ ? <div className="text-center mt-20">
            <h1 className="block mb-6">If you could trade your first born for all the money in the world, but your first
                born doesn't have to be with your true love would you accept the deal?</h1>
            <div className="flex flex-row justify-center items-center">
                <div className="inline">
                    <button onClick={() => addScore(1)}>
                        <Image src="/yes.jpg" alt="The word yes" width={200} height={200}
                               className={imageStyling}/>
                    </button>
                </div>
                <div className="inline">
                    <button onClick={() => addScore(2)}>
                        <Image src="/no.jpg" alt="The word no" width={200} height={200} className={imageStyling}/>
                    </button>

                </div>
            </div>
        </div> : <Ten value={score}/>}
        </>
    )
}