import img1 from "../assets/hotel1.jpg";
import img2 from "../assets/hotel2.jpg";
import img3 from "../assets/hotel4.jpg";
import img4 from "../assets/hotel5.jpg";
import img5 from "../assets/hotel6.jpg";

const Hero = () => {
  return (
    <div className='relative w-full h-screen overflow-hidden'>
      <div className='absolute inset-0 flex animate-slide transition-width duration-2000'>
        <img
          className='w-full h-full object-cover'
          src={img1}
          alt='Background 1'
        />
        <img
          className='w-full h-full object-cover'
          src={img2}
          alt='Background 2'
        />
        <img
          className='w-full h-full object-cover'
          src={img3}
          alt='Background 3'
        />
        <img
          className='w-full h-full object-cover'
          src={img4}
          alt='Background 4'
        />
        <img
          className='w-full h-full object-cover'
          src={img5}
          alt='Background 5'
        />
        <img
          className='w-full h-full object-cover'
          src={img1}
          alt='Background 1'
        />
      </div>
      <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
          <p>All Inclusive</p>
          <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>
            Private Beaches & Getaways
          </h1>
          <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ut quis
            est, id consequuntur sequi ipsum vitae sit non exercitationem.
          </p>
          <button className='bg-white text-black hover:bg-gray-800 hover:text-white transition duration-300 ease-in-out'>Reserve Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;