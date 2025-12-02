"use client"
import '../globals.css'
import Image from "next/image";
import {useState} from "react";
import Eight from "./Eight"


export default function QuestionSeven({value}: { value: number }) {
    const imageStyling = "mx-10! w-[16vw]! h-[32vh]! inline! border-pink-950! rounded-t-md! border-6! object-fill! hover:cursor-pointer!"
    const labelStyling = "bg-pink-950! rounded-b-md! text-white! p-1! w-[16vw]! mx-auto! mb-10! font-bold! text-xl!"

    const [score, setScore] = useState(value);
    const [nextQ, setNextQ] = useState(true);


    function addScore(choice: number) {
        if (choice === 1) {
            setScore(value);
        } else if (choice === 2) {
            setScore(value + 1);
        } else if (choice === 3) {
            setScore(value - 1);
        } else if (choice === 4) {
            setScore(value + 2);
        }

        setNextQ(false)

    }

    return (
        <>{nextQ ? <div className="text-center">
            <h1 className="block! bg-pink-950! text-white! py-5! mb-6! text-4xl! font-bold! font-[MedievalSharp]!">If you had to get rid of one of these classics which would you choose:</h1>
            <div className="flex! flex-row! justify-center! items-center!">
                <div className="inline!">
                    <button onClick={() => addScore(1)}>
                        <Image src="/catcher.png" alt="The Catcher in the Rye" width={200} height={200}
                               className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>The Catcher in the Rye</h3>
                </div>
                <div className="inline">
                    <button onClick={() => addScore(2)}>
                        <Image src="/pride.jpg" alt="Pride & Prejudice" width={200} height={200}
                               className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>Pride & Prejudice</h3>
                </div>
            </div>
            <div className="flex flex-row justify-center items-center">
                <div className="inline">
                    <button onClick={() => addScore(3)}>
                        <Image src="/animal.jpg" alt="Animal farm" width={200} height={200} className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>Animal Farm</h3>
                </div>
                <div className="inline">
                    <button onClick={() => addScore(4)}>
                        <Image src="/gatsby.jpg" alt="The Great Gatsby" width={200} height={200}
                               className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>The Great Gatsby</h3>
                </div>
            </div>
        </div> : <Eight value={score}/>}
        </>
    )
}