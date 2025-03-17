import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProjectCard = ({ image, title, link }) => {
  return (
    <div className="relative h-[400px] md:h-[500px] w-full rounded-xl border border-transparent shadow-lg pb-20 hover:scale-105 transition duration-700 cursor-pointer bg-white">
      <img 
        src={image} 
        alt={title} 
        className="h-[200px] md:h-[300px] w-full rounded-t-xl rounded-b-none object-cover"
      />
      <p className="text-center font-bold text-xl md:text-3xl p-5">{title}</p>
      <Link 
        to={link} 
        className="bg-transparent rounded-full p-1 md:p-2 px-2 md:px-3 hover:bg-blue-500 hover:text-white hover:scale-105 transition duration-300 inline-block"
      >
        More..
      </Link>
    </div>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default ProjectCard; 