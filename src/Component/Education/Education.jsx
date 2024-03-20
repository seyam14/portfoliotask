import  { useState, useEffect } from 'react';
import axios from 'axios';

const Education = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
        setUserData(response.data.user);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  const educationEntries = userData.timeline.filter(entry => entry.forEducation);

  return (
    <div className="container mx-auto px-4 py-8" id='education'>
    <h2 className="text-center font-bold text-white text-4xl m-4">Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {educationEntries.map((entry) => (
          <div key={entry._id} className="bg-teal-400 shadow-lg rounded-xl border">
            <div className="p-4">
              <h2 className="text-xl font-semibold">{entry.jobTitle}</h2>
              <p className="text-gray-600">{entry.company_name} - {entry.jobLocation}</p>
              <p className="mt-2">{entry.summary}</p>
              <ul className="list-disc list-inside mt-2">
                {entry.bulletPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              <p className="mt-2">Start Date: {new Date(entry.startDate).toLocaleDateString()}</p>
              <p>End Date: {new Date(entry.endDate).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
