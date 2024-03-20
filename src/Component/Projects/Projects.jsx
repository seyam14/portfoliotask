import  { useState, useEffect } from 'react';
import axios from 'axios'; 

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
        setProjects(response.data.user.projects);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetch();
  }, []);

  useEffect(() => {
    setVisibleProjects(projects.slice(0, 4));
  }, [projects]);

  const handleSeeMore = () => {
    setVisibleProjects(projects);
    setShowMore(true);
  };

  const handleSeeLess = () => {
    setVisibleProjects(projects.slice(0, 4));
    setShowMore(false);
  };

  return (
    <div className="container mx-auto px-2 py-4" id='projects'>
      <h2 className="text-center font-bold text-white text-4xl m-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {visibleProjects.map((project) => (
          <div key={project._id} className="card bordered shadow-lg bg-teal-400">
            <figure>
              <img src={project.image.url} alt={project.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.title}</h2>
              <p>{project.description}</p>
              <div className="flex">
                <ul>
                  {project.techStack.map((tech, index) => (
                    <li key={index} className="tag">{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <a href={project.githuburl} className="btn btn-primary">GitHub</a>
              {project.liveurl && <a href={project.liveurl} className="btn btn-primary">Live Demo</a>}
            </div>
          </div>
        ))}
      </div>
      {!showMore ? (
        <div className="flex justify-center mt-4">
          <button onClick={handleSeeMore} className="btn btn-active btn-neutral">See More</button>
        </div>
      ) : (
        <div className="flex justify-center mt-4">
          <button onClick={handleSeeLess} className="btn btn-active btn-neutral">See Less</button>
        </div>
      )}
    </div>
  );
};

export default Projects;
