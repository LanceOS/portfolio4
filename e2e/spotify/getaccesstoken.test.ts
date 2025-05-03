import { test, expect, request } from "@playwright/test";

test("Get authorization token", async ({ request }) => {


    const response = await request.post('http://localhost:5173/spotify/getaccesstoken',{
        headers: {
            'Content-Type': 'application/json'
        },
    })

    expect(response.status()).toBe(200);

    const data = await response.json()
    console.log(data)
    expect(data).toHaveProperty("access_token")
    expect(data).toBeTruthy()
})