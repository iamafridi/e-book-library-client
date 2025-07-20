const About = () => {
  return (
    <section className="px-4 py-10 md:py-16 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto shadow-xl rounded-lg overflow-hidden">
        <div className="relative">
          <img
            src="https://i.ibb.co/HBbYfyQ/ryunosuke-kikuno-FKqx-Z58b-Vj-U-unsplash.jpg"
            alt="Library Banner"
            className="w-full h-64 sm:h-96 object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
        </div>

        <div className="bg-white px-6 md:px-10 py-10 -mt-16 relative z-10 rounded-t-lg">
          <div className="mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">The Elara Library</h1>
            <p className="text-sm text-gray-500 mt-1">
              By{" "}
              <a
                href="https://iamafrididev.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-pink-600 hover:text-pink-800 transition"
              >
                Afridi Akbar Ifty ↗
              </a>
            </p>
          </div>

          <div className="text-base sm:text-lg leading-relaxed text-gray-700 space-y-4">
            <p>
              Welcome to <strong>Elara Library</strong>, an online sanctuary for bibliophiles curated by Afridi Akbar Ifty! Our digital shelves offer a treasure trove of knowledge and entertainment across diverse genres and subjects.
            </p>
            <p>
              At Elara Library, we believe in the power of words to inspire, educate, and transport readers to new worlds. Whether you seek the thrill of mystery, the wisdom of history, the creativity of fiction, or the insight of non-fiction, our collection has something for everyone.
            </p>
            <p>
              Explore our extensive catalog featuring classics, bestsellers, academic resources, and niche publications. Discover captivating narratives from celebrated authors or hidden gems waiting to be unearthed.
            </p>
            <p>
              Join our community of book lovers—where discussions thrive, recommendations abound, and the joy of storytelling is celebrated. Elara Library is more than just a repository; it’s a vibrant hub of imagination and knowledge.
            </p>
            <p>
              Embark on your literary journey with Elara Library, where every page turned is an adventure and every story deepens your love for the written word.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
