import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  // Sample project data with detailed information
  const projectsData = [
    {
      id: 1,
      image: '/Photo/gaza.jpg',
      title: 'Gaza Humanitarian Aid Project',
      status: 'Active',
      startDate: 'January 2024',
      targetCompletion: 'December 2024',
      description: `The Gaza Humanitarian Aid Project is our comprehensive response to the ongoing humanitarian crisis. This project aims to provide essential support to affected communities through multiple channels.

Key Objectives:
• Provide emergency medical assistance
• Ensure access to clean water and sanitation
• Distribute food and essential supplies
• Offer psychological support services

Current Progress:
We have successfully reached over 5,000 families with emergency aid packages and established three mobile medical clinics. Our team continues to work tirelessly to expand our reach and impact.

How You Can Help:
• Volunteer for our distribution teams
• Donate essential supplies
• Spread awareness about the crisis
• Support our fundraising campaigns`
    },
    {
      id: 2,
      image: '/Photo/flood1.png',
      title: 'Bangladesh Flood Recovery',
      status: 'Active',
      startDate: 'February 2024',
      targetCompletion: 'August 2024',
      description: `The Bangladesh Flood Recovery project focuses on helping communities rebuild after devastating floods. Our comprehensive approach addresses both immediate needs and long-term recovery.

Project Components:
• Emergency shelter construction
• Water system rehabilitation
• Agricultural recovery support
• Community resilience training

Current Achievements:
- 200 temporary shelters built
- 15 water systems restored
- 500 families received agricultural support
- 10 community disaster preparedness workshops completed

Future Plans:
We aim to expand our support to neighboring affected areas and implement more sustainable flood prevention measures.`
    },
    {
      id: 3,
      image: '/Photo/flood3.webp',
      title: 'Clean Water Initiative',
      status: 'Ongoing',
      startDate: 'December 2023',
      targetCompletion: 'December 2024',
      description: `Our Clean Water Initiative aims to provide sustainable access to clean water in underserved communities. This project combines infrastructure development with community education.

Project Scope:
• Well construction and rehabilitation
• Water filtration system installation
• Hygiene education programs
• Local maintenance training

Impact So Far:
- 25 wells constructed
- 10,000+ people gained access to clean water
- 30 local technicians trained
- 50% reduction in water-borne diseases

Sustainability Measures:
We ensure project longevity through community ownership and ongoing technical support.`
    },
    {
      id: 4,
      image: '/Photo/gaza.jpg',
      title: 'Medical Supply Distribution',
      status: 'Active',
      startDate: 'March 2024',
      targetCompletion: 'September 2024',
      description: `The Medical Supply Distribution project ensures essential medical supplies reach communities in need. We work with healthcare facilities and mobile clinics to improve medical care access.

Distribution Network:
• 50 partner clinics
• 20 mobile medical units
• 100 community health workers
• 5 regional distribution centers

Current Progress:
- Delivered supplies to 30 clinics
- Equipped 15 mobile units
- Trained 75 health workers
- Established 3 distribution centers

Next Steps:
Expanding our network and increasing the variety of medical supplies available.`
    },
    {
      id: 5,
      image: '/Photo/flood1.png',
      title: 'Education Support Program',
      status: 'Active',
      startDate: 'January 2024',
      targetCompletion: 'December 2024',
      description: `The Education Support Program provides educational resources and support to underprivileged students. We believe education is key to breaking the cycle of poverty.

Program Components:
• School supply distribution
• Scholarship programs
• Teacher training workshops
• Digital learning resources

Achievements:
- 1,000 students received supplies
- 50 scholarships awarded
- 100 teachers trained
- 20 schools equipped with computers

Future Goals:
Expanding the program to reach more schools and implement more technology-based learning solutions.`
    },
    {
      id: 6,
      image: '/Photo/flood3.webp',
      title: 'Community Development',
      status: 'Ongoing',
      startDate: 'February 2024',
      targetCompletion: 'February 2025',
      description: `Our Community Development project focuses on building sustainable, resilient communities through various initiatives and programs.

Key Focus Areas:
• Economic empowerment
• Skills training
• Infrastructure improvement
• Environmental sustainability

Current Initiatives:
- 10 vocational training programs
- 5 community centers established
- 20 small business grants awarded
- 15 environmental projects launched

Long-term Vision:
Creating self-sufficient communities that can sustain and grow their own development initiatives.`
    }
  ];

  useEffect(() => {
    // Find the project that matches the ID from the URL
    const foundProject = projectsData.find(project => project.id === parseInt(id));
    setProject(foundProject);
  }, [id]);

  if (!project) {
    return (
      <div className="w-full min-h-screen bg-slate-200 pt-28 flex items-center justify-center">
        <p className="text-xl text-gray-600">Project not found</p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-slate-200 pt-28 px-4 md:px-8 lg:px-16 pb-16">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-[300px] md:h-[400px] object-cover"
        />
        <div className="p-6 md:p-8">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
            {project.title}
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-100 p-3 rounded">
              <p className="text-sm text-gray-600">Status</p>
              <p className="font-semibold text-gray-800">{project.status}</p>
            </div>
            <div className="bg-gray-100 p-3 rounded">
              <p className="text-sm text-gray-600">Start Date</p>
              <p className="font-semibold text-gray-800">{project.startDate}</p>
            </div>
            <div className="bg-gray-100 p-3 rounded">
              <p className="text-sm text-gray-600">Target Completion</p>
              <p className="font-semibold text-gray-800">{project.targetCompletion}</p>
            </div>
          </div>
          <div className="prose max-w-none">
            {project.description.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail; 