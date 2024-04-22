"use client";

import { Suspense } from "react";

import UpdateCommentSuspense from './suspenseUpdateComment';

const UpdateComment = () => {
 
  return (
    <Suspense>
      <UpdateCommentSuspense />
    </Suspense>
  );
};

export default UpdateComment;
