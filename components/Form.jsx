import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit, headText='', textareaHeadText='', tagsHeadText='' }) => {
  return (
    <section className='w-full max-w-full flex-start flex-col mb-6'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type}</span>
      </h1>
      <p className='desc text-left max-w-md'>
        {headText}
      </p>

      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            {textareaHeadText}
          </span>

          <textarea
            value={post.comment}
            onChange={(e) => setPost({ ...post, comment: e.target.value })}
            placeholder={`Napisz swój ${type} tutaj`}
            required
            className='form_textarea '
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            <span className='font-normal'>
              {tagsHeadText}
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type='text'
            placeholder='#Tag'
            required
            className='form_input'
          />
        </label>

        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm'>
            Anuluj
          </Link>

          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          >
            {submitting ? `Zapisywanie...` : 'Zapisz'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
