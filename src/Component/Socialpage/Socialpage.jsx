
import  { useState, useEffect } from 'react';

const SocialPage = () => {
  const [socialHandles, setSocialHandles] = useState([]);

  useEffect(() => {
    fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
      .then(response => response.json())
      .then(data => setSocialHandles(data.user.social_handles.filter(handle => handle.enabled)))
      .catch(error => console.error('Error fetching social handles:', error));
  }, []);

  return (
    <div className="container mx-auto" id='social'>
    <h2 className="text-center font-bold text-white text-4xl m-4">Social Handles</h2>
      <div className=" bottom-0 left-0 right-0 bg-teal-400 shadow-md p-4 flex justify-center items-center">
        {socialHandles.map((handle, index) => (
          <div key={index} className="mx-4">
            <img src={handle.image.url} alt={handle.platform} className="w-10 h-10" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialPage;
