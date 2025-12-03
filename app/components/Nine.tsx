"use client"
import '../globals.css'
import Image from "next/image";
import {useState} from "react";
import Ten from "./Ten"
import {divStyling, headerStyling, imageStyling, labelStyling} from "@/app/components/One";


export default function QuestionNine({value}: { value: number }) {

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
            <h1 className={headerStyling}>If you could trade your first born for all the money in the world, but your first born doesn't have to be with your true love would you accept the deal?</h1>
            <div className={divStyling}>
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