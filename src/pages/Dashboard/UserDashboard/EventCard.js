const EventCard = ({ imgSrc, title, description, tag }) => (
  <div className="bg-white shadow-md rounded-lg p-4">
    <img
      src={imgSrc}
      alt={title}
      className="h-40 w-full rounded-md object-cover"
    />
    <div className="mt-4">
      <div className="flex justify-between items-center">
        {/* Span for Tag */}
        <span className="text-xs text-red-500 uppercase bg-teal-100">
          {tag}
        </span>

        {/* Button for Buy Now */}
        <button className="bg-teal-500 text-white py-2 px-4 rounded-md">
          Buy Now
        </button>
      </div>

      <h3 className="text-lg font-semibold mt-2">{title}</h3>
      <p className="text-gray-600 mt-1">{description}</p>
    </div>
  </div>
);

export default EventCard;
