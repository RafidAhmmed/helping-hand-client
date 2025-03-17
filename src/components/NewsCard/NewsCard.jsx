import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NewsCard = ({ id, image, title }) => {
  return (
    <div className="bg-white relative h-[400px] md:h-[500px] w-full rounded-xl border border-transparent shadow-lg pb-20 hover:scale-105 transition duration-500 cursor-pointer">
      <img 
        src={image} 
        alt={title} 
        className="h-[200px] md:h-[300px] w-full rounded-t-xl rounded-b-none object-cover"
      />
      {/* <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
        {index + 1}
      </div> */}
      <p className="text-center font-bold text-xl md:text-3xl p-5">{title}</p>
      <NavLink to={`/news/${id}`} className="bg-transparent rounded-full p-1 md:p-2 px-2 md:px-3 hover:bg-blue-500 hover:text-white hover:scale-105 transition duration-300 inline-block"> 
        More.. 
      </NavLink>
    </div>
  );
};

NewsCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};

export default NewsCard; 