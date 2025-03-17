import { useState } from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

const Projects = () => {
  // Sample project data
  const [projects] = useState([
    {
      id: 1,
      image: '/Photo/gaza.jpg',
      title: 'Gaza Humanitarian Aid Project',
      link: '/projects/1'
    },
    {
      id: 2,
      image: '/Photo/flood1.png',
      title: 'Bangladesh Flood Recovery',
      link: '/projects/2'
    },
    {
      id: 3,
      image: '/Photo/flood3.webp',
      title: 'Clean Water Initiative',
      link: '/projects/3'
    },
    {
      id: 4,
      image: '/Photo/gaza.jpg',
      title: 'Medical Supply Distribution',
      link: '/projects/4'
    },
    {
      id: 5,
      image: '/Photo/flood1.png',
      title: 'Education Support Program',
      link: '/projects/5'
    },
    {
      id: 6,
      image: '/Photo/flood3.webp',
      title: 'Community Development',
      link: '/projects/6'
    }
  ]);

  return (
    <div className="w-full h-auto text-center pt-28 p-10 bg-slate-200 min-h-screen">
      <h1 className="font-bold text-xl md:text-3xl">Latest Projects</h1>
      <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-10 pb-6 md:pb-10">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            title={project.title}
            link={project.link}
          />
        ))}
      </div>
      {projects.length === 0 && (
        <p className="text-gray-500 text-lg">No projects available.</p>
      )}
    </div>
  );
};

export default Projects; 