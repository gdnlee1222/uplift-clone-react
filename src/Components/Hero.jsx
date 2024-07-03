
import './Hero.css';

const Hero = () => {
    const handleClick = () => {
       
    };

    return (
        <div className="hero">
            <div className="container">
                <h1>Launch your career
                    <span>in software development</span></h1>
                <p>Affordable, high quality web development code camp. Learn to code full-stack with one-on-one coaching and the support career mentors.</p>
                <button className="btn-primary" onClick={handleClick}>Apply Now</button>
            </div>
        </div>
    );
};

export default Hero;
