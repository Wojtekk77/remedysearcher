"use client";

import { useState, useEffect } from "react";

import RemedySearchResultCard from "./RemedySearchResultCard";

const RemedySearchResultCardList = ({ remedies }) => {
  return (
    <div className='mt-1 prompt_layout'>
      {remedies.map((remedy, i) => (
        <RemedySearchResultCard
          key={remedy.remedyName}
          remedy={remedy}
          first={i === 0}
          last={i === remedies.length - 1}
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
    setIsSubmitting(true);
    e.preventDefault();
    try {
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

  const handleScript = async (e) => {
    setIsSubmitting(true);
    e.preventDefault();
    try {
      let response = await fetch("/api/scripts", {
        method: "POST",
        body: JSON.stringify({
          mind: searchProps.mind,
        }),
      });
      response = await response.json();
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
          placeholder='pewność siebie'
          value={searchProps.mind}
          onChange={(e) => setSearchProps({ ...searchProps, mind: e.target.value })}
          required
          className='search_input peer'
        />
        <button
          type='submit'
          disabled={submitting}
          className='mt-5 px-7 py-2 text-sm bg-primary-orange rounded-full text-white'
        >
          {submitting ? `Wyszukiwanie...` : 'Wyszukaj'}
        </button>
      </form>

      {/* All Prompts */}
      {remedies?.length ? (
        <RemedySearchResultCardList
          remedies={remedies}
        />
      ):
        <p>Zacznij wyszukiwanie</p> 
      }

        <button
          type='submit'
          disabled={submitting}
          onClick={handleScript}
          className='mt-5 px-7 py-2 text-sm bg-primary-orange rounded-full text-white'
        >
          {submitting ? `Czekanie na skrypt...` : 'Opdal skrypt'}
        </button>

      {/* // : (
      //   <PromptCardList data={allPosts} handleTagClick={handleTagClick} />
      // )} */}
    </section>
  );
};

export default Searcher;