import Hero from "../Hero/Hero";
import MySkillsSection from "../MySkillsSection/MySkillsSection";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import Socialpage from "../Socialpage/Socialpage";
import TestimonialPage from "../TestimonialPage/TestimonialPage";


const Home = () => {
    return (
        <div> 
            <Hero></Hero>
            <Services></Services>
            <Projects></Projects>
            <MySkillsSection></MySkillsSection>
            <TestimonialPage></TestimonialPage>  
            <Socialpage></Socialpage> 
        </div>
    );
};

export default Home;