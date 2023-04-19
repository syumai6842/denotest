import { serve } from "https://deno.land/std@0.183.0/http/server.ts";
import { serveDir, serveFile } from "https://deno.land/std@0.141.0/http/file_server.ts";

// deno-lint-ignore require-await
serve(async req => {
    const pathname = new URL(req.url).pathname;
    console.log(pathname);


    if (pathname == "/home") {
        return serveFile(req,"./static/index.html");
    }else if(pathname == "/login"){
        return serveFile(req,"./static/login.html");
    }else{
        return new Response("Not found", { status: 404 });
    }
},{
    port: 8000
});