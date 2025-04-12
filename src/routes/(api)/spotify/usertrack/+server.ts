import { ACCESS_TOKEN } from "$env/static/private"


export async function POST() {
    try {
        const response = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
            headers: { 'Authorization': `Bearer ${ACCESS_TOKEN}` },
        })

        const data = await response.json()
        console.log(data)
        return new Response(JSON.stringify(data))
    }
    catch (e) {
        return new Response(e)
    }
}