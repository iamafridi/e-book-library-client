
const LatestBookCard = ({latestBook}) => {

    const {name,description,photo,author_name} = latestBook;

    return (
        <div className="max-w-xs p-6 rounded-md shadow-md bg-gray-50 text-gray-900">
            <img src={photo} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
            <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracki uppercase text-orange-600">{author_name}</span>
                <h2 className="text-xs font-semibold tracki">{name}</h2>
            </div>
            <p className="text-gray-800 text-xs">{description}</p>
        </div>
    );
};

export default LatestBookCard;