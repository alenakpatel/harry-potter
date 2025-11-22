"use client"
import Link from "next/link";
import {useState} from "react";



export default function Home() {
    const [score, setScore] = useState(0);

    return (
    <>
        <h1>Sorting Quiz</h1>
        <Link href="/quiz">Get Started!</Link>
    </>
  );
}
