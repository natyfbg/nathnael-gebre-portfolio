import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'The project management tools developed by the team exceeded our expectations. The user interface is intuitive and the real-time collaboration features really help keep everyone on the same page. Their attention to detail and quick turnaround time made them a pleasure to work with.'
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: 'Our new e-commerce platform was developed with exceptional skill and care. The team implemented a robust and flexible backend that can handle our increasing transaction volumes with ease. Their proactive approach to solving problems was invaluable to the timely launch of our site.'
  },
  {
    avatar: AVTR3,
    name: 'Jamespite',
    review: 'The custom CMS developed for our content portal is fantastic. It’s not only scalable but also easy to use, allowing our editorial team to publish content faster and more efficiently than ever before. The developer’s support has been outstanding throughout the process.'
  },
  {
    avatar: AVTR4,
    name: 'Mary Johnson',
    review: 'The redesign of our corporate website was a huge success, thanks to the team. They delivered a modern, responsive site that not only looks great but also performs flawlessly across all devices. Their creative solutions and professional attitude made the entire process smooth and enjoyable.'
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials-container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => (
          <SwiperSlide key={index} className="testimonial">
            <div className="client-avatar">
              <img src={avatar} alt={`Avatar of ${name}`} />
            </div>
            <h5 className="client-name">{name}</h5>
            <small className="client-review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
