"use client"

import Image from "next/image";
import {useState} from "react";
import Seven from "./Seven"


export default function QuestionSix({value}: { value: number }) {
    const imageStyling = "mx-10 w-[16vw] h-[32vh] inline border-pink-950 border-4 object-fill"

    const [score, setScore] = useState(value);
    const [nextQ, setNextQ] = useState(true);


    function addScore(choice: number) {
        if (choice === 1) {
            setScore(value);
        } else if (choice === 2) {
            setScore(value - 1);
        } else if (choice === 3) {
            setScore(value + 1);
        } else if (choice === 4) {
            setScore(value + 2);
        }

        setNextQ(false)

    }

    return (
        <>{nextQ ? <div className="text-center mt-20">
            <h1 className="block mb-6">Pick the word you think others would describe you as:
            </h1>
            <div className="flex flex-row justify-center items-center">
                <div className="inline">
                    <button onClick={() => addScore(1)}>
                        <Image src="/compassionate.jpg" alt="The word compassionate" width={200} height={200}
                               className={imageStyling}/>
                    </button>
                </div>
                <div className="inline">
                    <button onClick={() => addScore(2)}>
                        <Image src="/determined.jpg" alt="The word determined" width={200} height={200}
                               className={imageStyling}/>
                    </button>
                </div>
            </div>
            <div className="flex flex-row justify-center items-center">
                <div className="inline">
                    <button onClick={() => addScore(3)}>
                        <Image src="/honest.jpg" alt="The word honest" width={200} height={200}
                               className={imageStyling}/>
                    </button>
                </div>
                <div className="inline">
                    <button onClick={() => addScore(4)}>
                        <Image src="/impulsive.jpg" alt="The word impulsive" width={200} height={200}
                               className={imageStyling}/>
                    </button>
                </div>
            </div>
        </div> : <Seven value={score}/>}
        </>
    )
}