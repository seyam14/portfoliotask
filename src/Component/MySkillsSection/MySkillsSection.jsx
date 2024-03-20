import  { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class MySkillsSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: []
    };
  }

  componentDidMount() {
    fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae")
      .then(response => response.json())
      .then(data => {
        this.setState({ skills: data.user.skills });
      })
      .catch(error => console.error("Error fetching skills:", error));
  }

  render() {
    const { skills } = this.state;

    const settings = {
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "linear"
    };

    return (
      <div className="mx-10" id='skills'>
        <h2 className="text-center font-bold text-white text-4xl m-4">Skills</h2>
        <Slider {...settings}>
          {skills.map(skill => (
            <div key={skill._id}>
              <img className="w-20 h-20" src={skill.image.url} alt={skill.name} />
              <p className="text-center text-white">{skill.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
