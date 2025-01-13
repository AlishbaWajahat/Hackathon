import { NextRequest ,NextResponse } from "next/server";
import data from '@/app/Data/data.json'

export function GET(){
    return NextResponse.json((data))

}