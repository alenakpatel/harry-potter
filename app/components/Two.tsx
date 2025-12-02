"use client"

import Image from "next/image";
import {useState} from "react";
import Three from "../components/Three";


export default function QuestionTwo({value}: { value: number }) {
    const imageStyling = "mx-10! w-[16vw]! h-[32vh]! inline! border-pink-950! rounded-t-md! border-6! object-fill! hover:cursor-pointer!"
    const labelStyling = "bg-pink-950! rounded-b-md! text-white! p-1! w-[16vw]! mx-auto! mb-10! font-bold! text-xl!"

    const [score, setScore] = useState(value);
    const [nextQ, setNextQ] = useState(true);


    function addScore(choice: number) {
        if (choice === 1) {
            setScore(value + 2);
        } else if (choice === 2) {
            setScore(value);
        } else if (choice === 3) {
            setScore(value - 1);
        } else if (choice === 4) {
            setScore(value + 1);
        }

        setNextQ(false)

    }

    return (
        <> {nextQ ? <div className="text-center">
                <h1 className="block! bg-pink-950! text-white! py-5! mb-6! text-4xl! font-bold! font-[MedievalSharp]!">Select a season</h1>
                <div className="flex! flex-row! justify-center! items-center!">
                    <div className="inline!">
                        <button onClick={() => addScore(1)}>
                            <Image src="/spring.jpg" alt="Spring" width={200} height={200}
                                   className={imageStyling}/>
                        </button>
                        <h3 className={labelStyling}>Spring</h3>
                    </div>
                    <div className="inline">
                        <button onClick={() => addScore(2)}>
                            <Image src="/summer.jpg" alt="Summer" width={200} height={200} className={imageStyling}/>
                        </button>
                        <h3 className={labelStyling}>Summer</h3>
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center">
                    <div className="inline">
                        <button onClick={() => addScore(3)}>
                            <Image src="/fall.jpg" alt="Fall" width={200} height={200} className={imageStyling}/>
                        </button>
                        <h3 className={labelStyling}>Fall</h3>
                    </div>
                    <div className="inline">
                        <button onClick={() => addScore(4)}>
                            <Image src="/winter.jpg" alt="Winter" width={200} height={200} className={imageStyling}/>
                        </button>
                        <h3 className={labelStyling}>Winter</h3>
                    </div>
                </div>
            </div> :
            <Three value={score}/>}
        </>
    )
}