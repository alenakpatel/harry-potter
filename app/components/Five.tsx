"use client"
import '../globals.css'
import Image from "next/image";
import {useState} from "react";
import Six from "./Six";


export default function QuestionFive({value}: { value: number }) {
    const imageStyling = "mx-10! w-[16vw]! h-[32vh]! inline! border-pink-950! rounded-t-md! border-6! object-fill! hover:cursor-pointer!"
    const labelStyling = "bg-pink-950! rounded-b-md! text-white! p-1! w-[16vw]! mx-auto! mb-10! font-bold! text-xl!"

    const [score, setScore] = useState(value);
    const [nextQ, setNextQ] = useState(true);


    function addScore(choice: number) {
        if (choice === 1) {
            setScore(value + 1);
        } else if (choice === 2) {
            setScore(value - 1);
        } else if (choice === 3) {
            setScore(value + 2);
        } else if (choice === 4) {
            setScore(value);
        }

        setNextQ(false)

    }

    return (
        <>{nextQ ? <div className="text-center">
            <h1 className="block! bg-pink-950! text-white! py-5! mb-6! text-4xl! font-bold! font-[MedievalSharp]!">Pick one of these words that you think best describes you:</h1>
            <div className="flex! flex-row! justify-center! items-center!">
                <div className="inline!">
                    <button onClick={() => addScore(1)}>
                        <Image src="/responsible.jpg" alt="The word responsible" width={200} height={200}
                               className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>Responsible</h3>
                </div>
                <div className="inline">
                    <button onClick={() => addScore(2)}>
                        <Image src="/loyal.jpg" alt="The word loyal" width={200} height={200} className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>Loyal</h3>
                </div>
            </div>
            <div className="flex flex-row justify-center items-center">
                <div className="inline">
                    <button onClick={() => addScore(3)}>
                        <Image src="/adventurous.jpg" alt="The word adventurous" width={200} height={200}
                               className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>Adventurous</h3>
                </div>
                <div className="inline">
                    <button onClick={() => addScore(4)}>
                        <Image src="/caring.jpg" alt="The word caring" width={200} height={200}
                               className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>Caring</h3>
                </div>
            </div>
        </div> : <Six value={score}/>
        }</>
    )
}