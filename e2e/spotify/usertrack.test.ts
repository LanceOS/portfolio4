import { test, expect, request } from "@playwright/test";

test("Get current playing track", async ({ request }) => {


    const response = await request.get('http://localhost:5173/spotify/usertrack',{
        headers: {
            'Content-Type': 'application/json'
        },
    })

    expect(response.status()).toBe(200);

    const data = await response.json()
    console.log(data)
    expect(data).toHaveProperty("actions")
    expect(data).toBeTruthy()
})