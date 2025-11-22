"use client"

import Image from "next/image";
import {useState} from "react";
import Four from "./Four";


export default function QuestionThree({value}: { value: number }) {
    const imageStyling = "mx-10 w-[16vw] h-[32vh] inline border-pink-950 border-4 object-fill"
    const labelStyling = "w-[16vw] mx-auto mb-10"

    const [score, setScore] = useState(value);
    const [nextQ, setNextQ] = useState(true);


    function addScore(choice: number) {
        if (choice === 1) {
            setScore(value - 1);
        } else if (choice === 2) {
            setScore(value + 2);
        } else if (choice === 3) {
            setScore(value);
        } else if (choice === 4) {
            setScore(value + 1);
        }

        setNextQ(false)

    }

    return (
        <>{nextQ ? <div className="text-center mt-20">
            <h1 className="block mb-6">Choose one of these classic movies</h1>
            <div className="flex flex-row justify-center items-center">
                <div className="inline">
                    <button onClick={() => addScore(1)}>
                        <Image src="/godfather.jpg" alt="The Godfather" width={200} height={200}
                               className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>The Godfather</h3>
                </div>
                <div className="inline">
                    <button onClick={() => addScore(2)}>
                        <Image src="/exorcist.jpg" alt="The Exorcist" width={200} height={200}
                               className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>The Exorcist</h3>
                </div>
            </div>
            <div className="flex flex-row justify-center items-center">
                <div className="inline">
                    <button onClick={() => addScore(3)}>
                        <Image src="/wizard.jpg" alt="The Wizard of Oz" width={200} height={200}
                               className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>The Wizard of Oz</h3>
                </div>
                <div className="inline">
                    <button onClick={() => addScore(4)}>
                        <Image src="/twelve.jpg" alt="12 Angry Men" width={200} height={200} className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>12 Angry Men</h3>
                </div>
            </div>
        </div> : <Four value={score}/>}
        </>
    )
}