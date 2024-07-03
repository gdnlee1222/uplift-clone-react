
import './Section.css'

const BannerBottom = () => {
  const handleClick = () => {
    
  };

  return (
    <div className="BannerBottom">
      <p>Ready to reach for your dreams?<span>Start today 🚀.</span></p>
      <button className="btn-primary-1" onClick={handleClick}>Sign Up</button>
    </div>
  );
};

const Section = () => (
  <div className="section">
    <BannerBottom />
  </div>
);

export default Section;
