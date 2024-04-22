"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form";

const UpdateComment = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const commentId = searchParams.get("id");

  const [post, setPost] = useState({ comment: "", tag: "", });
  const [submitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getCommentDetails = async () => {
      const response = await fetch(`/api/comment/${commentId}`);
      const data = await response.json();

      setPost({
        comment: data.comment,
        tag: data.tag,
      });
    };

    if (commentId) getCommentDetails();
  }, [commentId]);

  const updateComment = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!commentId) return alert("Missing CommentId!");

    try {
      const response = await fetch(`/api/comment/${commentId}`, {
        method: "PATCH",
        body: JSON.stringify({
          comment: post.comment,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Suspense>
      <Form
        type='Edit'
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={updateComment}
      />
    </Suspense>
  );
};

export default UpdateComment;
