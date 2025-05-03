

class Spotify {
    instance: Spotify | null = null;

    constructor() {
        if(this.instance) return this.instance;
        this.instance = null;
    }


    static async getAccessTokenObj() {
        try {
            const response = await fetch("http://localhost:5173/spotify/getaccesstoken", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            })

            const data = await response.json();
            if(!data) {
                throw new Error("Access token data null or undefined:", data)
            }

            return data;
        }
        catch(error) {
            throw new Error(`Failed to get access token: ${error}`)
        }
    }


    static async getCurrentTrack() {
        try {
            const response = await fetch("http://localhost:5173/spotify/usertrack", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })

            if(!response) {
                throw new Error("Response failed");
            }

            const data = await response.json()
            return data;
        }
        catch(error) {
            throw new Error(`Failed to get current playing track: ${error}`)
        }
    }
}

export default Spotify;