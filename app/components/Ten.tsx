"use client"
import '../globals.css'
import Image from "next/image";
import {useState} from "react";
import {useRouter} from "next/navigation"
import getResult from "../lib/getResult";


export default function QuestionTen({value}: { value: number }) {
    const imageStyling = "mx-10! w-[16vw]! h-[32vh]! inline! border-pink-950! rounded-t-md! border-6! object-fill! hover:cursor-pointer!"
    const labelStyling = "bg-pink-950! rounded-b-md! text-white! p-1! w-[16vw]! mx-auto! mb-10! font-bold! text-xl!"

    const [score, setScore] = useState(value);
    const router = useRouter();




    function addScore(choice: number) {
        if (choice === 1) {
            setScore(value);
        } else if (choice === 2) {
            setScore(value + 1);
        } else if (choice === 3) {
            setScore(value + 2);
        } else if (choice === 4) {
            setScore(value - 1);
        }

        const house = getResult(score);
        router.push(`/results/${house}`);

    }

    return (
        <div className="text-center">
            <h1 className="block! bg-pink-950! text-white! py-5! mb-6! text-4xl! font-bold! font-[MedievalSharp]!">If the world was split into factions based on the technological powerhouses where would you want to live:</h1>
            <div className="flex! flex-row! justify-center! items-center!">
                <div className="inline!">
                    <button onClick={() => addScore(1)}>
                        <Image src="/google.png" alt="Google Logo" width={200} height={200}
                               className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>Google Land</h3>
                </div>
                <div className="inline">
                    <button onClick={() => addScore(2)}>
                        <Image src="/lockheed.jpg" alt="Lockheed Martin logo" width={200} height={200}
                               className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>Lockheed Martin Metropolis</h3>
                </div>
            </div>
            <div className="flex flex-row justify-center items-center">
                <div className="inline">
                    <button onClick={() => addScore(3)}>
                        <Image src="/apple1.png" alt="App Logo" width={200} height={200} className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>Appletopia</h3>
                </div>
                <div className="inline">
                    <button onClick={() => addScore(4)}>
                        <Image src="/palentir.jpg" alt="Palentir Logo" width={200} height={200}
                               className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>Palentiria</h3>
                </div>
            </div>
        </div>
    )
}