import { CLIENT_ID, CLIENT_SECRET_ID, CODE, REFRESH_TOKEN } from "$env/static/private";



export async function POST() {

    const params = new URLSearchParams
    params.append('grant_type', 'refresh_token');
    params.append('refresh_token', REFRESH_TOKEN);
    params.append('client_id', CLIENT_ID);
    params.append('client_secret', CLIENT_SECRET_ID);


    try {
        const result = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: params
        });

        const { access_token } = await result.json();
        console.log(access_token)
        return new Response(access_token);
    }
    catch (error) {
        console.log(error)
    }
}