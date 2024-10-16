import Comment from "@models/comment";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const comment = await Comment.findById(params.id).populate("creator")
        if (!comment) return new Response("Comment Not Found", { status: 404 });

        return new Response(JSON.stringify(comment), { status: 200 })

    } catch (error) {
        return new Response(`Internal Server Error ${error}`, { status: 500 });
    }
}

export const PATCH = async (request, { params }) => {
    const { comment, tag } = await request.json();

    try {
        await connectToDB();

        // Find the existing comment by ID
        const existingComment = await Comment.findById(params.id);

        if (!existingComment) {
            return new Response("Comment not found", { status: 404 });
        }

        // Update the comment with new data
        existingComment.comment = comment;
        existingComment.tag = tag;

        await existingComment.save();

        return new Response("Successfully updated the Comments", { status: 200 });
    } catch (error) {
        return new Response(`Internal Server Error ${error}`, { status: 500 });
    }
};

export const DELETE = async (request, { params }) => {
    try {
        await connectToDB();

        // Find the comment by ID and remove it
        await Comment.findByIdAndRemove(params.id);

        return new Response("Comment deleted successfully", { status: 200 });
    } catch (error) {
        return new Response(`Internal Server Error ${error}`, { status: 500 });
    }
};
