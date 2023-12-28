import img1 from '../assets/habitacion1.jpg';
import img2 from '../assets/habitacion2.jpg';
import img3 from '../assets/habitacion3.jpg';
const Rooms = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-gray-800 mx-auto my-20 pt-16 px-4 grid lg:grid-cols-3 gap-4'>
      <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
        <h3 className='text-2xl font-bold text-white'>Fine Interior Rooms</h3>
        <p className='pt-4 text-white'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error ipsam
          rerum iusto excepturi similique minus?
        </p>
        <div className='grid grid-cols-2 col-span-2 gap-2'>
        <img
        className='object-cover w-full h-full'
          src= {img1}
          alt='/'
        />
        <img
        className='row-span-2 object-cover w-full h-full'
          src={img2}
          alt='/'
        />
        <img
        className='object-cover w-full h-full'
          src={img3}
          alt='/'

          
        />
      </div>
      </div>

      
    </div>
  );
};

export default Rooms;