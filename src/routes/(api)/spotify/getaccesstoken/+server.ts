import { CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN } from "$env/static/private";



export async function POST() {

    const params = new URLSearchParams
    params.append('grant_type', 'refresh_token');
    params.append('refresh_token', REFRESH_TOKEN);
    params.append('client_id', CLIENT_ID);
    params.append('client_secret', CLIENT_SECRET);


    try {
        const result = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: params
        });

        const data = await result.json();
        return new Response(JSON.stringify(data), {
            headers: { "Content-Type": "application/json" }
        });
    }
    catch (error) {
        console.log(error)
    }
}