"use server"

import getCollection, {RESULTS_COLLECTION} from "@/app/db";

export default async function getSaved({nickname}: {nickname: string}): Promise<string|null> {

        const resultCollection = await getCollection(RESULTS_COLLECTION);

        const data = await resultCollection.findOne({nickname: nickname});

        if (!data){
            return null;
        }

        return data.result[0].toUpperCase() + data.result.slice(1, data.result.length)



}