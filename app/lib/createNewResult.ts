"use server"

import getCollection, {RESULTS_COLLECTION} from "../db";


export default async function createNewResult(nickname: string, result: string):Promise<boolean> {
    console.log("createNewResult");
    const r = {
        nickname: nickname,
        result: result,
    }

    const resultsCollection = await getCollection(RESULTS_COLLECTION);


        if (await resultsCollection.find({nickname: `${r.nickname}`}).hasNext()){
            return false;
        } else {
            const res = await resultsCollection.insertOne({...r});
            if (!res.acknowledged) {
                throw new Error("DB insert failed");
            }
        }
    return true;
}