import { createClient } from "https://esm.sh/@supabase/supabase-js";
import { load } from "https://deno.land/std/dotenv/mod.ts";

const config = await load();
const url = config["SUPABASE_URL"];
const key = config["SUPABASE_KEY"];
const supabase = createClient(url, key);

export async function get(tablename: string){
    const {data,error} = await supabase.from(tablename).select("*");
    if(error){
        console.log(error);
        return undefined;
    }
    return data;
}

export function logging(log:string){
    console.log(log);
}