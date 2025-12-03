"use client"
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
        <>

            <div className="flex flex-row bg-[url(/hogwarts.jpeg)] bg-cover h-[100vh] ">
                <div className="flex flex-col justify-center bg-pink-950 w-[25vw] h-[70%]">
                    <p className="text-white">Enter your nickname to get a past result:</p>
                    <input className="block! h-8 p-2 m-2! bg-white border-black"
                           onChange={(e) => setNickname(e.target.value)} value={nickname}/>
                    <button className="p-2 bg-white border-black" onClick={getResult}>Get Result</button>
                </div>
                <div className="flex flex-row mx-auto! text-center!">

                    <video width="470px" height="220px" muted autoPlay className="mx-auto! mt-0!">
                        <source src="/harry.webm" type="video/webm"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="flex flex-row my-auto!">
                <Link href="/quiz" className="bg-pink-950 text-white h-10 my-1/2! p-4 m-4 rounded">Find out your House!</Link>
                </div>
                </div>
        </>
    );
}
