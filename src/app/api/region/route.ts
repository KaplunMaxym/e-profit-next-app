import { NextResponse } from 'next/server';
import {makeRequestService} from "@/services/makeRequestService";

export async function GET(req: Request) {
    try {
        const res =  await makeRequestService('GET', '/api/region')
        return NextResponse.json(res.locations)
    } catch (e) {
        return NextResponse.json('error:')
    }
}