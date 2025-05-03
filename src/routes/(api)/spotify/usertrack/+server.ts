import Spotify from "$lib/tools/Spotify.js"

export async function GET({ cookies }) {
    try {

        let access_token = cookies.get("access_token")
        if(!access_token) {
            const data = await Spotify.getAccessTokenObj();
            cookies.set("access_token", data.access_token, {
                httpOnly: false,
                maxAge: data.expires_in,
                path: "/"

            })
            access_token = data.access_token;
        }


        if(!access_token) {
            return new Response(`Failed to get access token: ${access_token}`, { status: 500 })
        }
        
        const response = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
            method: "GET",
            headers: { 'Authorization': `Bearer ${access_token}` },
        })

        const data = await response.json()
        return new Response(JSON.stringify(data), {
            headers: { "Content-Type": "application/json" }
        });
    }
    catch (error) {
        return new Response(`Failed to get current track: ${error}`, { status: 500 })
    }
}