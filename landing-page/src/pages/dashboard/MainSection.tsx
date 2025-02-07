import video1 from '../../assets/videos/27669-365224683_tiny.mp4';
import video2 from '../../assets/videos/28660-370964594_tiny.mp4';

const MainSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-tighter">
            Selular oferece 
            <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text"> smartphones modernos</span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 maax-w-4xl">
        A Selular cria smartphones modernos para oferecer 
        a você uma experiência intuitiva, fluida e inovadora 
        em cada toque.
        </p>
        <div className="flex justify-center my-10">
            <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md">
                Conheça
            </a>
        </div>
        <div className="flex mt-10 justify-center">
            <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
                <source src={video1} type="video/mp4" />
            </video>
            <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
                <source src={video2} type="video/mp4" />
            </video>
        </div>
    </div>
  )
}

export default MainSection