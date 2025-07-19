const LatestBookCard = ({ latestBook }) => {
  const { name, description, photo, author_name } = latestBook;

  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md p-6 rounded-md shadow-md bg-gray-50 text-gray-900 mx-auto">
      <img
        src={photo}
        alt={name}
        className="object-cover object-center w-full rounded-md h-48 sm:h-64 md:h-72 bg-gray-500"
      />
      <div className="mt-4 mb-2">
        <span className="block text-xs sm:text-sm font-medium uppercase tracking-wide text-orange-600">
          {author_name}
        </span>
        <h2 className="text-sm sm:text-lg font-semibold tracking-wide">{name}</h2>
      </div>
      <p className="text-gray-800 text-xs sm:text-sm line-clamp-3">{description}</p>
    </div>
  );
};

export default LatestBookCard;
