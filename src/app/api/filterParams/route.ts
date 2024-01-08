import { NextResponse } from 'next/server';
import {makeRequestService} from "@/services/makeRequestService";

export async function GET() {
    try {
        const res = await makeRequestService('GET', `/api/filterParams`);
        return NextResponse.json(res.vacancies.data)
    }catch (e) {
        return NextResponse.json('error:')
    }
}