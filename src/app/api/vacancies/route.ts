import { NextResponse } from 'next/server';
import {getServerSession} from "next-auth";
import {authConfig} from "@/configs/auth";
import axios from "axios";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const pageQuery = searchParams.get('page');
        const limitQuery = searchParams.get('limit');
        // const baseURL = process.env.BASE_URL as string
        const apiKey =  process.env.API_KEY as string
        const session: any = await getServerSession(authConfig)
        const token: string|null  = (session?.user?.email.token) ?? null;
        const headers = {
            'api-key': apiKey,
            'Content-Type': 'application/json',
            'token': token
        };
        const res = await axios.get(
            `http://testapi.siteweb.org.ua/api/vacancy?page=${pageQuery}&limit=${limitQuery}`,
            // body,
            {headers},
        );
        // return res.data.response
        return NextResponse.json(res.data)
    } catch (e) {
        return NextResponse.json('errpr:')
    }
}