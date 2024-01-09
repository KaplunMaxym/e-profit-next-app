import { NextResponse } from 'next/server';
import {makeRequestService} from "@/services/makeRequestService";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const search = searchParams.get('search');
        const minsalary = searchParams.get('minsalary');
        const maxsalary = searchParams.get('maxsalary');
        const region_id = searchParams.get('region_id');
        const condition = searchParams.get('condition');
        const city_id = searchParams.get('city_id');
        const page = searchParams.get('page');
        const limit = searchParams.get('limit');
        const res =  await makeRequestService('GET',
            `/api/vacancy?search=${search}&minsalary=${minsalary}&maxsalary=${maxsalary}&region_id=${region_id}&condition=${condition}&city_id=${city_id}&page=${page}&limit=${limit}`)
        return NextResponse.json(res.vacancies.data)
    }catch (e) {
        return NextResponse.json('error:')
    }
}