import Comment from "@models/comment";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { userId, comment, tag } = await request.json();

    try {
        await connectToDB();
        const newComment = new Comment({ creator: userId, comment, tag });

        await newComment.save();
        return new Response(JSON.stringify(newComment), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new comment", { status: 500 });
    }
}
