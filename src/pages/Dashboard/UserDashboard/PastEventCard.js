const PastEventCard = ({ imgSrc, title, description, tag }) => (
  <div className="bg-white shadow-md rounded-lg p-4">
    <img
      src={imgSrc}
      alt={title}
      className="h-40 w-full rounded-md object-cover"
    />
    <div className="mt-4">
      <span className="text-xs bg-red-100 text-red-600 uppercase">{tag}</span>
      <h3 className="text-lg font-semibold mt-2">{title}</h3>
      <p className="text-gray-600 mt-1">{description}</p>
    </div>
  </div>
);

export default PastEventCard;
