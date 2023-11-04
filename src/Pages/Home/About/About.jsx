import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <div className='lg:w-1/2 relative '>
          <img src={person} className="w-3/4 h-96  rounded-lg shadow-2xl" />
          <img src={parts} className="w-1/2 h-72 absolute right-24 top-1/2 rounded-lg border-8 border-white shadow-2xl" />
          </div>
          <div className='lg:w-1/2 space-y-2 p-4'>
            <h3 className='text-[#FF3811] text-3xl font-bold'>About Us</h3>
            <h1 className="text-5xl text-black font-bold">We are qualified & of experience in this field</h1>
            <p className="py-6 text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            <p className='py-6 text-[#737373] '>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            <button className="btn text-white bg-[#FF3811] mr-5">Get More Info</button>
          </div>
        </div>
      </div>
    );
};

export default About;