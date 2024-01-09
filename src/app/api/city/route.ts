import { NextResponse } from 'next/server';
import {makeRequestService} from "@/services/makeRequestService";

export async function GET() {
    try {
        const res =  await makeRequestService('GET', '/api/city')
        return NextResponse.json(res.locations)
    } catch (e) {
        return NextResponse.json('error:')
    }
}