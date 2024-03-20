import { useState, useEffect } from 'react';

const Hero = () => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    const UserData = async () => {
      try {
        const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
        if (response.ok) {
          const data = await response.json();
          setUserData(data.user.about);
        } else {
          throw new Error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    UserData();
  }, []);

  return (
    <section className="hero-section bg-teal-400 py-12 p-4" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          {userData && (
            <div className="hero-text md:w-1/2 md:pr-10 text-center md:text-left">
              <span className="text-lg ">Hi, I am</span>
              <h1 className="text-4xl font-bold  mb-4">{userData.name}</h1>
              <h3 className="text-xl mb-4">{userData.title}</h3>
              <p >{userData.description}</p>
              <div className="hero-btn-container mt-6">
                <a href="" className="btn btn-primary mr-4 py-2 px-4 rounded-md text-white hover:bg-blue-600 transition duration-300">
                  Download CV
                </a>
                <a href="" className="btn btn-secondary py-2 px-4 rounded-md text-white border border-gray-700 transition duration-300">
                  Contact
                </a>
              </div>
            </div>
          )}
          <div className="hero-img md:w-1/2 pl-10">
            {userData && (
              <img src={userData.avatar.url} alt={userData.name} className="mx-auto md:mx-0 profile-picture w-60 rounded-xl sm:ml-12 md:mr-12 lg:mr-16" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
