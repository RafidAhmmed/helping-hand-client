import { useState, useEffect } from 'react';
import NewsCard from '../../components/NewsCard/NewsCard';
// import { createLogger } from 'vite';

const News = () => {
  // Sample news data
  // const [news] = useState([
  //   {
  //     id: 1,
  //     image: '/Photo/gaza.jpg',
  //     title: 'Emergency Relief: Gaza Crisis Response',
  //     link: '/news/1'
  //   },
  //   {
  //     id: 2,
  //     image: '/Photo/flood1.png',
  //     title: 'Flood Relief Efforts in Bangladesh',
  //     link: '/news/2'
  //   },
  //   {
  //     id: 3,
  //     image: '/Photo/flood3.webp',
  //     title: 'Community Support Initiative Launched',
  //     link: '/news/3'
  //   },
  //   {
  //     id: 4,
  //     image: '/Photo/gaza.jpg',
  //     title: 'Medical Aid Distribution Complete',
  //     link: '/news/4'
  //   },
  //   {
  //     id: 5,
  //     image: '/Photo/flood1.png',
  //     title: 'Volunteer Training Program Success',
  //     link: '/news/5'
  //   },
  //   {
  //     id: 6,
  //     image: '/Photo/flood3.webp',
  //     title: 'New Partnership Announcement',
  //     link: '/news/6'
  //   }
  // ]);

  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/news/")
    .then(res => res.json())
    .then(data => setNews(data))
    .catch(err => console.log(err))
  }, []);
  // console.log("news 123 ",news[0].id);
  // const ID = news.id;

  // console.log(news);

  return (
    <div className="w-full h-auto text-center pt-28 p-10 bg-slate-200 min-h-screen">
      <h1 className="font-bold text-xl md:text-3xl">Latest News</h1>
      <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-10 pb-6 md:pb-10">
        {console.log(news)}
        {news.map((item) => (
          <NewsCard
            key={item.id}
            image={item.image}
            title={item.title}
            link={item.link}
            // index={index}
            id={item.id}
          />
        ))}
      </div>
      {news.length === 0 && (
        <p className="text-gray-500 text-lg">No news articles available.</p>
      )}
    </div>
  );
};

export default News;
