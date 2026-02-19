import { NextResponse } from "next/server";
import { readFile } from 'fs/promises';
import path from 'path';

export async function POST(){
    try{
        const filepath = path.join(process.cwd(),"datasets",`dataset.json`);
        const filedata = await readFile(filepath,"utf-8");
        return NextResponse.json(JSON.parse(filedata));
    }catch(err){
        console.log("failed to send filedata" , err);
        return NextResponse.json({error:"this is catch of try/catch in route.js "},{status:403})
    }
}