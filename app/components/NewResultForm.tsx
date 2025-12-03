"use client"
import {useState} from "react";
import createNewResult from "@/app/lib/createNewResult";



export default function NewResultForm({house}: { house: string }) {

    const [nickname, setNickname] = useState("");
    const [bool, setBool] = useState(true);
    async function addResult() {
        const status = await createNewResult(nickname, house)
        setBool(status)
    }


    return (
        <div>
            <input className="border-1 border-black rounded m-2!" onChange={(e) => setNickname(e.target.value)} value={nickname} placeholder={"Nickname"}/>
            <input className="border-1 border-black rounded " readOnly={true} value={house}/>
            <button className="bg-white border-2 border-black m-2! hover: cursor-pointer" onClick={addResult}>Submit</button>
            {!bool ? <p>Nickname in use</p> : null}
        </div>
    )
}