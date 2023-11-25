"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const RemedySearchResultCard = ({ remedyName }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const [copied, setCopied] = useState("");

  // const handleProfileClick = () => {
  //   console.log(post);

  //   if (post.creator._id === session?.user.id) return router.push("/profile");

  //   router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
  // };

  // const handleCopy = () => {
  //   setCopied(post.prompt);
  //   navigator.clipboard.writeText(post.prompt);
  //   setTimeout(() => setCopied(false), 3000);
  // };

  return (
    <div className='prompt_card'>
      <div className='flex justify-between items-start gap-5'>
        <div
          className='flex-1 flex justify-start items-center gap-3 cursor-pointer'
          // onClick={handleProfileClick}
        >
          <div className='flex flex-col'>
            <h3 className='font-satoshi font-semibold text-gray-900'>
              {remedyName}
            </h3>
            <p className='font-inter text-sm text-gray-500'>
              Jakiś tekst? Może wyszukiwane słowa?
            </p>
          </div>
        </div>

      </div>

      <p className='my-4 font-satoshi text-sm text-gray-700'>tu był post prompt czylui chyba tekst</p>
      <p
        className='font-inter text-sm blue_gradient cursor-pointer'
        // onClick={() => handleTagClick && handleTagClick(post.tag)}
      >
        {/* #{post.tag} */} TutajTagiByłyJakieś
      </p>
    </div>
  );
};

export default RemedySearchResultCard;
