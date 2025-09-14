import dbConnect from "@lib/mongodb"
import Contact from "@models/Contact"

export async function POST(req) {
    try {
        await dbConnect()
        const data = await req.json()
        const contact = await Contact.create(data)
        return new Response(JSON.stringify({ message: "Message saved!" }), { status: 201 })
    } catch (error) {
        console.error(error)   // 🔹 ye console log me error ka reason milega
        return new Response(JSON.stringify({ error: "Failed to save message" }), { status: 500 })
    }
}
