"use client"
import '../globals.css'
import Image from "next/image";
import {useState} from "react";
import Ten from "./Ten"


export default function QuestionNine({value}: { value: number }) {
    const imageStyling = "mx-10! w-[16vw]! h-[32vh]! inline! border-pink-950! rounded-t-md! border-6! object-fill! hover:cursor-pointer!"
    const labelStyling = "bg-pink-950! rounded-b-md! text-white! p-1! w-[16vw]! mx-auto! mb-10! font-bold! text-xl!"

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
        <>{nextQ ? <div className="text-center">
            <h1 className="block! bg-pink-950! text-white! py-5! mb-6! text-4xl! font-bold! font-[MedievalSharp]!">If you could trade your first born for all the money in the world, but your first born doesn't have to be with your true love would you accept the deal?</h1>
            <div className="flex! flex-row! justify-center! items-center!">
                <div className="inline!">
                    <button onClick={() => addScore(1)}>
                        <Image src="/yes.jpg" alt="The word yes" width={200} height={200}
                               className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>Yes</h3>
                </div>
                <div className="inline">
                    <button onClick={() => addScore(2)}>
                        <Image src="/no.jpg" alt="The word no" width={200} height={200} className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>No</h3>
                </div>
            </div>
        </div> : <Ten value={score}/>}
        </>
    )
}