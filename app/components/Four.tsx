"use client"

import Image from "next/image";
import {useState} from "react";
import Five from "./Five";


export default function QuestionFour({value}: { value: number }) {
    const imageStyling = "mx-10 w-[16vw] h-[32vh] inline border-pink-950 border-4 object-fill"
    const labelStyling = "w-[16vw] mx-auto mb-10"

    const [score, setScore] = useState(value);
    const [nextQ, setNextQ] = useState(true);


    function addScore(choice: number) {
        if (choice === 1) {
            setScore(value + 2);
        } else if (choice === 2) {
            setScore(value - 1);
        } else if (choice === 3) {
            setScore(value);
        } else if (choice === 4) {
            setScore(value + 1);
        }

        setNextQ(false)

    }

    return (
        <>{nextQ ? <div className="text-center mt-20">
            <h1 className="block mb-6">If you had to get rid of one sense, which would it be:
            </h1>
            <div className="flex flex-row justify-center items-center">
                <div className="inline">
                    <button onClick={() => addScore(1)}>
                        <Image src="/sight.jpg" alt="Eye" width={200} height={200}
                               className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>Sight</h3>
                </div>
                <div className="inline">
                    <button onClick={() => addScore(2)}>
                        <Image src="/touch.jpg" alt="Hand touching water" width={200} height={200}
                               className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>Touch</h3>
                </div>
            </div>
            <div className="flex flex-row justify-center items-center">
                <div className="inline">
                    <button onClick={() => addScore(3)}>
                        <Image src="/taste.jpg" alt="Mouth eating a fruit" width={200} height={200}
                               className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>Taste</h3>
                </div>
                <div className="inline">
                    <button onClick={() => addScore(4)}>
                        <Image src="/hearing.jpg" alt="Ear" width={200} height={200} className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>Hearing</h3>
                </div>
            </div>
        </div> : <Five value={score}/>}
        </>
    )
}