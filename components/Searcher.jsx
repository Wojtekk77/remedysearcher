"use client";

import { useState, useEffect } from "react";

import RemedySearchResultCard from "./RemedySearchResultCard";

const RemedySearchResultCardList = ({ data }) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((remedy) => (
        <RemedySearchResultCard
          key={remedy._id}
          remedyName={remedy.remedyName}
        />
      ))}
    </div>
  );
};

const Searcher = () => {

  const [allPosts, setAllPosts] = useState([]);

  // Search states
  const [remedies, setRemedies] = useState([]);
  const [searchProps, setSearchProps] = useState({ mind: "", general: "", specyfic: "", positiveModalities: "", negativeModalities: "" });
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [submitting, setIsSubmitting] = useState(false);



  const handleSubmit = async (e) => {
    console.log('handle submit')
    e.preventDefault();
    try {
      console.log(searchProps.mind, 'searchProps.mind')
      let response = await fetch("/api/remedies", {
        method: "POST",
        body: JSON.stringify({
          mind: searchProps.mind,
          // general: form.data.general,
          // specyfic: form.data.specyfic,
          // positiveModalities: form.data.positiveModalities,
          // negativeModalities: form.data.negativeModalities,
        }),
      });
      response = await response.json();
      setRemedies(response.remedies);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className='feed'>
      <form onSubmit={handleSubmit} className='relative w-full text-center'>
        <input
          type='text'
          placeholder='Search for a tag or a username'
          value={searchProps.mind}
          onChange={(e) => setSearchProps({ ...searchProps, mind: e.target.value })}
          required
          className='search_input peer'
        />
        <button
          type='submit'
          disabled={submitting}
          className='mt-5 px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
        >
          {submitting ? `Wyszukiwanie...` : 'Wyszukaj Searcher'}
        </button>
      </form>

      {/* All Prompts */}
      {remedies?.length ? (
        <RemedySearchResultCardList
          data={remedies}
        />
      ):
        <p>Nie znaleziono remediów</p> 
      }
      {/* // : (
      //   <PromptCardList data={allPosts} handleTagClick={handleTagClick} />
      // )} */}
    </section>
  );
};

export default Searcher;
