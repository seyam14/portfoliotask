import { useEffect, useState } from 'react';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
      .then(response => response.json())
      .then(data => {
        if (data && data.user && data.user.services) {
          setServices(data.user.services);
        }
      })
      .catch(error => {
        console.error('Error fetching user services:', error);
      });
  }, []);

  return (
    <section className="services-section wow fadeInUp p-2 mx-10" id='services'>
        <h2  className="text-center font-bold text-white text-4xl m-4">Services</h2>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-teal-400 border rounded-xl shadow-lg p-4">
              <div className="text-center mb-4">
                <img className="mx-auto w-24 h-24" src={service.image.url} alt="service_icon" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                <p >{service.desc}</p>
                <p><span className='font-bold '>Price:</span>{service.charge}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
 