import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const NewsDetail = () => {
  const { id } = useParams();
  // const [article, setArticle] = useState(null);
  const [news, setNews] = useState([]);

  // Sample news data with content
//   const newsData = [
//     {
//       id: 1,
//       image: '/Photo/gaza.jpg',
//       title: 'Emergency Relief: Gaza Crisis Response',
//       date: 'March 15, 2024',
//       content: `Our organization has launched an emergency relief campaign in response to the humanitarian crisis in Gaza. The initiative focuses on providing essential medical supplies, food, and shelter to affected families.

// We are working closely with local partners to ensure aid reaches those most in need. The campaign has already distributed:
// • Emergency medical kits to 1,000+ families
// • Food packages to 2,500+ households
// • Temporary shelter materials to 500+ displaced families

// Your continued support makes this vital work possible. We remain committed to providing humanitarian assistance to those affected by this crisis.`
//     },
//     {
//       id: 2,
//       image: '/Photo/flood1.png',
//       title: 'Flood Relief Efforts in Bangladesh',
//       date: 'March 10, 2024',
//       content: `In response to the devastating floods in Bangladesh, our team has mobilized to provide immediate assistance to affected communities. The flooding has displaced thousands of families and damaged critical infrastructure.

// Our relief efforts include:
// • Distribution of clean water and purification tablets
// • Emergency food supplies to affected areas
// • Medical camps for preventing water-borne diseases
// • Temporary housing solutions for displaced families

// We are coordinating with local authorities and other NGOs to maximize the impact of our relief efforts. The situation remains critical, but with your support, we continue to make a difference.`
//     },
//     {
//       id: 3,
//       image: '/Photo/flood3.webp',
//       title: 'Community Support Initiative Launched',
//       date: 'March 5, 2024',
//       content: `We are proud to announce the launch of our new Community Support Initiative, aimed at building resilient communities through sustainable development programs.

// The initiative focuses on:
// • Skills training for youth
// • Women's empowerment programs
// • Small business development support
// • Educational resources for children

// This comprehensive approach will help create lasting positive change in vulnerable communities. Join us in this important mission to build stronger, more resilient communities.`
//     },
//     {
//       id: 4,
//       image: '/Photo/gaza.jpg',
//       title: 'Medical Aid Distribution Complete',
//       date: 'March 1, 2024',
//       content: `We have successfully completed our latest medical aid distribution campaign, reaching over 5,000 individuals in need. The campaign focused on providing essential medical supplies and healthcare services to underserved communities.

// Key achievements:
// • Distributed vital medications to chronic patients
// • Provided medical equipment to local clinics
// • Conducted health screenings for preventive care
// • Trained local healthcare workers

// This success would not have been possible without the generous support of our donors and volunteers.`
//     },
//     {
//       id: 5,
//       image: '/Photo/flood1.png',
//       title: 'Volunteer Training Program Success',
//       date: 'February 25, 2024',
//       content: `Our recent volunteer training program has successfully prepared 100 new volunteers for humanitarian work. The comprehensive training covered essential skills and knowledge needed for effective community service.

// Training highlights:
// • Emergency response protocols
// • First aid certification
// • Community engagement strategies
// • Project management basics

// These newly trained volunteers will strengthen our capacity to respond to humanitarian crises and support community development initiatives.`
//     },
//     {
//       id: 6,
//       image: '/Photo/flood3.webp',
//       title: 'New Partnership Announcement',
//       date: 'February 20, 2024',
//       content: `We are excited to announce our new partnership with Global Health Initiative, which will enhance our ability to provide medical care to underserved communities.

// This partnership will enable:
// • Expanded medical outreach programs
// • Enhanced healthcare training capabilities
// • Improved access to medical supplies
// • Stronger emergency response capacity

// Together, we will work to improve healthcare access and outcomes in vulnerable communities around the world.`
//     }
//   ];

  useEffect(() => {
    // Find the article that matches the ID from the URL
    // const foundArticle = newsData.find(article => article.id === parseInt(id));
    fetch(`http://localhost:8000/api/news/${id}`)
    .then(res => res.json())
    .then(data => setNews(data))
    .catch(err => console.log(err))

    // setArticle(foundArticle);
  }, [id]);

  if (!news) {
    return (
      <div className="w-full min-h-screen bg-slate-200 pt-28 flex items-center justify-center">
        <p className="text-xl text-gray-600">news not found</p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-slate-200 pt-28 px-4 md:px-8 lg:px-16 pb-16">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <img 
          src={news.image} 
          alt={news.title} 
          className="w-full h-[300px] md:h-[400px] object-cover"
        />
        <div className="p-6 md:p-8">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
            {news.title}
          </h1>
          <p className="text-gray-600 mb-6">{news.date}</p>
          <div className="prose max-w-none">
          <>
  {news?.content?.split(/\n+/).map((paragraph, index) => (
    <p key={index} className="mb-4 text-gray-700 text-lg leading-relaxed">
      {paragraph}
    </p>
  ))}
</>

          </div>
        </div>
      </div>
      {/* <h1>news detail</h1> */}
    </div>
  );
};

export default NewsDetail; 