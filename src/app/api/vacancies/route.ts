import { NextResponse } from 'next/server';
import {makeRequestService} from "@/services/makeRequestService";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const page = searchParams.get('page');
        const limit = searchParams.get('limit');
        const res =  await makeRequestService('GET', `/api/vacancy?page=${page}&limit=${limit}`)
        return NextResponse.json(res.vacancies.data)
    } catch (e) {
        return NextResponse.json('error:')
    }
}