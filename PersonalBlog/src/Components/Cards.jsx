import PropTypes from "prop-types";

function Cards(props) {
  return (
    <div className="card hover:shadow-lg" key={props.id}>
      <img
        src={props.image}
        alt="me on the bridge"
        className="w-full h-32 sm:h-48 object-cover"
      />
      <div className="m-4">
        <span className="font-bold">{props.title}</span>
        <span className="block text-gray-500 text-sm">{props.author}</span>
      </div>
      <div className="badge">
        <svg
          className="h-5 inline-block"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{props.duration}</span>
      </div>
    </div>
  );
}

Cards.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Cards;
