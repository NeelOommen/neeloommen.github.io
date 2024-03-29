import Head from 'next/head'
import Image from 'next/image'
import TechLogo from '../components/TechLogo'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Neel Ittyerah Oommen</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@800&display=swap" rel="stylesheet"></link>
        <styles>

        </styles>
      </Head>

      <main>
      <div className="bg-black h-full w-full flex flex-col overflow-x-clip snap-y snap-mandatory scrollbar-hide scroll-smooth">
          <div className="relative h-screen flex justify-center items-center snap-center">
              <div className="absolute w-72 md:w-80 lg:w-96 h-72 md:h-80 lg:h-96 bg-cyan-400    blur-3xl rounded-full mix-blend-lighten animate-bgAnim"></div>
              <div className="absolute w-72 md:w-80 lg:w-96 h-72 md:h-80 lg:h-96 bg-yellow-400  blur-3xl rounded-full mix-blend-lighten animate-bgAnim animation-delay-2000"></div>
              <div className="absolute w-72 md:w-80 lg:w-96 h-72 md:h-80 lg:h-96 bg-purple-400  blur-3xl rounded-full mix-blend-lighten animate-bgAnim animation-delay-4000"></div>
              <div className="absolute w-72 md:w-80 lg:w-96 h-72 md:h-80 lg:h-96 bg-pink-400    blur-3xl rounded-full mix-blend-lighten animate-bgAnim animation-delay-6000"></div>
              <div className="transform hover:scale-110 hover:text-yellow-200 text-white text-7xl md:text-8xl lg:text-9xl font-workSansFont transition duration-300">Neel<br/>Ittyerah<br/>Oommen</div>
          </div>

          <div className="relative h-screen w-screen flex justify-center items-center px-[2vw] snap-center">
              <div className="absolute w-72 md:w-80 lg:w-96 h-72 md:h-80 lg:h-96 md:right-8 bg-cyan-400   blur-2xl mix-blend-lighten animate-squareBgAnim"></div>
              <div className="absolute w-72 md:w-80 lg:w-96 h-72 md:h-80 lg:h-96 md:right-8 bg-yellow-400 blur-2xl mix-blend-lighten animate-squareBgAnim animation-delay-2000"></div>
              <div className="absolute w-72 md:w-80 lg:w-96 h-72 md:h-80 lg:h-96 md:right-8 bg-purple-400 blur-2xl mix-blend-lighten animate-squareBgAnim animation-delay-4000"></div>
              <div className="absolute w-72 md:w-80 lg:w-96 h-72 md:h-80 lg:h-96 md:right-8 bg-pink-400   blur-2xl mix-blend-lighten animate-squareBgAnim animation-delay-6000"></div>   
              <div className="absolute left-0 w-screen">
                <div className="flex flex-col md:flex-row space-y-16 md:space-y-0">
                  <div className="flex flex-col space-y-4 md:space-y-8 md:w-1/2 md:h-screen px-2 md:px-4 justify-center">
                    <div className="transform left-2 md:left-4 text-white text-7xl md:text-8xl lg:text-9xl font-workSansFont font-bold hover:text-cyan-200 transition duration-300">Hey!</div>
                    <div className="transform left-2 md:left-4 text-2xl md:text-3xl lg:text-4xl text-white">My name is <span className="hover:text-yellow-200 transition duration-300">Neel Ittyerah Oommen!</span></div>
                    <div className="text-white text-1xl lg:text-2xl">I am currently a 3rd Year Computer Science Student at <span className="transform hover:text-purple-400 duration-300">VIT Vellore.</span></div>
                    <div className="transform left-2 md:left-4 text-1xl md:text-2xl text-white">I like to code (with experience in
                      <span className="hover:text-purple-400 transform duration-300"> C</span>/
                      <span className="hover:text-cyan-400 transform duration-300">C++</span>/
                      <span className="hover:text-yellow-400 transform duration-300">Python</span>/
                      <span className="hover:text-pink-400 transform duration-300">JavaScript</span>/
                      <span className="hover:text-orange-400 transform duration-300">Java</span>
                      ),<br/> as well as playing and listening to 
                      <span className="hover:text-purple-400 transform duration-300"> music</span>, playing 
                      <span className="hover:text-cyan-400 transform duration-300"> CSGO</span> and watching 
                      <span className="hover:text-yellow-400 transform duration-300"> F1</span>.</div>
                    </div>
                  <div className="flex justify-center items-center md:w-1/2 md:h-screen">
                  <div className='transform w-[300px] md:w-[350px] lg:w-[480px] hover:scale-110  left-4 rounded-xl shadow-2xl duration-300 overflow-hidden'>
                    {/* <CustomImage key={1} imageSrc={'../static/images/profile_image.jpg'}/> */}
                    <img src='../static/images/profile_image.jpg'/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-topSVG aspect-svgTransitions w-full bg-center bg-no-repeat bg-cover mt-8'></div>
          <div className='bg-bottomSVG aspect-svgTransitions w-full bg-center bg-no-repeat bg-cover'></div>
          

          {/* Information Section */}
          <div className='relative w-screen bg-gradient-to-t from-yellow-400 via-pink-400 to-purple-400 py-10'>
            <div className="transform left-2 md:left-4 text-white text-4xl md:text-5xl lg:text-6xl font-workSansFont pl-5 pt-5 font-bold hover:text-cyan-200 transition duration-300">Technologies & Courses</div>
            {/* Scroll Section */}
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6'>
              <TechLogo imagePath={'../cppLogo.png'} redirectURL={'https://cplusplus.com/'}/>
              <TechLogo imagePath={'../cLogo.png'} redirectURL={'https://www.w3schools.com/c/c_intro.php'}/>
              <TechLogo imagePath={'../javaLogo.png'} redirectURL={'https://www.java.com/en/'}/>
              <TechLogo imagePath={'../javaScriptLogo.png'} redirectURL={'https://www.javascript.com/'}/>
              <TechLogo imagePath={'../pythonLogo.png'} redirectURL={'https://www.python.org/'}/>
              <TechLogo imagePath={'../postgresLogo.png'} redirectURL={'https://www.postgresql.org/'}/>
              <TechLogo imagePath={'../mysqlLogo.png'} redirectURL={'https://www.mysql.com/'}/>
              <TechLogo imagePath={'../htmlLogo.png'} redirectURL={'https://developer.mozilla.org/en-US/docs/Web/HTML'}/>
              <TechLogo imagePath={'../cssLogo.png'} redirectURL={'https://developer.mozilla.org/en-US/docs/Web/CSS'}/>
              <TechLogo imagePath={'../tailwindLogo.png'} redirectURL={'https://tailwindcss.com/'}/>
              <TechLogo imagePath={'../expressLogo.png'} redirectURL={'https://expressjs.com/'}/>
              <TechLogo imagePath={'../nodeLogo.png'} redirectURL={'https://nodejs.org/en/'}/>
              <TechLogo imagePath={'../nextLogo.png'} redirectURL={'https://nextjs.org/'}/>
            </div>
          </div>
        </div>
        
      </main>

    </div>
  )
}
