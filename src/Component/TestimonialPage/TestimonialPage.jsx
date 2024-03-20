import  { useState, useEffect } from 'react';
import axios from 'axios';

const TestimonialPage = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
        if (response.data && response.data.success && response.data.user.testimonials) {
          setTestimonials(response.data.user.testimonials);
        } else {
          console.error('No testimonials found in the API response.');
        }
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetch();
  }, []);

  return (
    <div className="container mx-auto p-3 " id='testimonials'>
    <h2  className="text-center font-bold text-white text-4xl m-4">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map(testimonial => (
          <div key={testimonial._id} className="bg-teal-400 border rounded-2xl shadow-md p-4">
            <p className="mb-4">{testimonial.review}</p>
            <div className="flex items-center">
              <img src={testimonial.image.url} alt={testimonial.name} className="w-10 h-10 rounded-full mr-4" />
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p >{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialPage;
