import { Link } from "react-router-dom";

const Newsletter = () => {
   return (
    <>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical p-6 max-w-5xl mx-auto">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-6 w-6 text-pink-600"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-8 md:text-end">
            <time className="font-mono italic text-sm text-gray-600">1454</time>
            <div className="text-lg font-black text-gray-900">Gutenberg's Printing Press</div>
            The invention of the printing press by Johannes Gutenberg revolutionized access to books, making literature widely available for the first time and igniting the Renaissance.
          </div>
          <hr />
        </li>

        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-6 w-6 text-pink-600"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end md:mb-8">
            <time className="font-mono italic text-sm text-gray-600">1731</time>
            <div className="text-lg font-black text-gray-900">Library of the University of Pennsylvania</div>
            One of the first university libraries in the United States was founded, contributing to education and knowledge preservation in early America.
          </div>
          <hr />
        </li>

        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-6 w-6 text-pink-600"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-8 md:text-end">
            <time className="font-mono italic text-sm text-gray-600">1870</time>
            <div className="text-lg font-black text-gray-900">Public Library Movement</div>
            The rise of public libraries began, promoting free access to books and knowledge for everyone, a cornerstone for community education worldwide.
          </div>
          <hr />
        </li>

        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-6 w-6 text-pink-600"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end md:mb-8">
            <time className="font-mono italic text-sm text-gray-600">1971</time>
            <div className="text-lg font-black text-gray-900">Introduction of Digital Libraries</div>
            The concept of digital libraries emerged, making books and resources available online, transforming how people access knowledge globally.
          </div>
          <hr />
        </li>

        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-6 w-6 text-pink-600"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-8 md:text-end">
            <time className="font-mono italic text-sm text-gray-600">2007</time>
            <div className="text-lg font-black text-gray-900">eBook Revolution</div>
            The launch of e-readers and eBooks changed reading habits worldwide, enabling instant access to millions of titles anywhere and anytime.
          </div>
        </li>
      </ul>

     <div className="flex justify-center  rounded-full m-12">
  <Link to="/login" className="relative group">
    <span className="relative z-10 block px-8 py-3 text-white font-semibold uppercase tracking-wider transition-all duration-300 bg-transparent hover:text-orange-200">
      Log In to Elara Library
    </span>
    <span
      className="absolute  inset-0 rounded-md border-l-2 border-transparent bg-gradient-to-r from-pink-800 via-gray-500 to-gray-50 
      bg-[length:200%_200%] bg-left animate-[gradient-move_3s_linear_infinite] hover:bg-transparent
      "
    ></span>
  </Link>
</div>

    </>
  );
};


export default Newsletter;
