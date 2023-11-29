"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";

const CreateComment = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ comment: "", tag: "" });

  const createComment = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/comment/new", {
        method: "POST",
        body: JSON.stringify({
          comment: post.comment,
          userId: session?.user.id,
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
    <Form
      type='Kometarz'
      headText='Jeżeli masz pomysł jak usprawnić aplikację, opisz go poniżej. Daj też znać jak według Ciebie sprawuje się wyszukiwarka. Twój komentarz jest dla mnie ważny! :)'
      textareaHeadText=''
      tagsHeadText=''
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createComment}
    />
  );
};

export default CreateComment;
