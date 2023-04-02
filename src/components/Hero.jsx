import Spline from '@splinetool/react-spline';
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* <div className='flex flex-col justify-center items-center mt-5'> */}
        {/* </div> */}

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello, I'm <span className='text-[#FFC6D3]'>Manan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a CSD Undergrad<br className='sm:block hidden' />
            at IIIT Delhi
          </p>
        </div>
      </div>

      <Spline scene="https://prod.spline.design/6P83xwabrGtXaZSI/scene.splinecode" />


      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
        </a>
      </div>
    </section>
  );
};

export default Hero;
