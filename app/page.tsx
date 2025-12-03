"use client"
import './globals.css'
import Link from "next/link";
import {useState} from "react";
import getSaved from "@/app/lib/getSaved";
import {useRouter} from "next/navigation";


export default function Home() {
    const [nickname, setNickname] = useState("");

    const router = useRouter();

    async function getResult() {
        const data = await getSaved({nickname});
        router.push(`results/${data}`)
    }

    return (
        <div className="bg-[url(/hogwarts.jpeg)] bg-cover h-[100vh] flex flex-col items-center justify-center">
            <div className="flex flex-col items-center">
                <video width="470px" height="220px" muted autoPlay style={{marginBottom: '-110px'}}>
                    <source src="/harry.webm" type="video/webm"/>
                    Your browser does not support the video tag.
                </video>

                <Link href="/quiz" className="bg-pink-950 text-white p-4 rounded font-[MedievalSharp] text-lg hover:bg-pink-900 cursor-pointer" style={{marginBottom: '40px'}}>
                    Find out your House!
                </Link>
                <div className="flex flex-col items-center w-[300px]">
                    <input
                        className="w-full h-10 p-2 mb-2 bg-white border-2 border-black rounded text-center"
                        placeholder="For Past Result: Enter Nickname"
                        onChange={(e) => setNickname(e.target.value)}
                        value={nickname}
                    />
                    <button
                        className="w-full p-2 bg-pink-950 text-white border-2 border-pink-950 rounded font-[MedievalSharp] hover:bg-pink-900 cursor-pointer"
                        onClick={getResult}
                    >
                        Get Result
                    </button>
                </div>
            </div>
        </div>
    );
}