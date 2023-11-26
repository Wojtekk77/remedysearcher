"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useCollapse } from 'react-collapsed'
import DOMPurify from 'dompurify';
import {
	FaBeer,
	FaBrain,
	FaHandPointRight,
	FaSadTear,
	FaSmileBeam,
  FaChevronDown,
  FaChevronUp,
} from 'react-icons/fa';

const RemedyMobilePropsExpandedDesc = ({ remedyValue }) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <div key={`${remedyValue.remedyName}_${remedyValue.word}`}>
      <button {...getToggleProps()}>
        {isExpanded 
          ? <div className='flex justify-between items-start gap-6'>{`${remedyValue.word}: ${remedyValue.sentenceNumbers?.length}`}<FaChevronUp style={{marginTop: 5}} /></div>
          : <div className='flex justify-between items-start gap-6'>{`${remedyValue.word}: ${remedyValue.sentenceNumbers?.length}`}<FaChevronDown style={{marginTop: 5}} /></div>
        }
      </button>
      <section {...getCollapseProps()}>
        {
          <div {...getToggleProps()} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(remedyValue.description) }} />
        }
      </section>
    </div>
  )
};

const RemedyMobileProps = ({ remedy }) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  const remedyProps = Object.values(remedy).map(remedyValue => {
    if (typeof remedyValue !== 'object') {
      return null;
    }
    return <RemedyMobilePropsExpandedDesc key={`${remedyValue.remedyName}_xd`} remedyValue={remedyValue} />
  });
  return <div>{remedyProps}</div>
}

const RemedySearchResultCard = ({ remedy, first, last }) => {
  const { remedyName, totalPoints } = remedy;
  
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
          <div className='full-width'>
            <div className='full-width grid grid-cols-1 gap-4 flex-1 flex'>
              <h3 className='font-satoshi font-semibold text-gray-900'>
                {remedyName}: {totalPoints}
              </h3>
            </div>
            <div>
              <RemedyMobileProps remedy={remedy} />
              {/* <p className='font-inter text-sm text-gray-500'>
                jakis tekst inter
              </p> */}
            </div>
          </div>

        </div>

      </div>

      {/* <p className='my-4 font-satoshi text-sm text-gray-700'>tu był post prompt czylui chyba tekst</p> */}
      {/* <p
        className='font-inter text-sm blue_gradient cursor-pointer'
        // onClick={() => handleTagClick && handleTagClick(post.tag)}
      >
        #{post.tag}  TutajTagiByłyJakieś
      </p> */}
      { first && !last && (
        <p className='font-inter text-sm text-gray-500 mt-4'>
          {remedy.remedyName.toUpperCase()} posiada najwięcej odnośników do słów kluczowych.
        </p>
      )}
      { last && !first && (
        <p className='font-inter text-sm text-gray-500 mt-4'>
          {remedy.remedyName.toUpperCase()} posiada najmniej odnośników do słów kluczowych
        </p>
      )}
      { last && first && (
        <p className='font-inter text-sm text-gray-500 mt-4'>
          {remedy.remedyName.toUpperCase()} To jedyne remedium które zawiera odnośniki do wszystkich słów kluczowych.
        </p>
      )}
    </div>
  );
};

export default RemedySearchResultCard;
