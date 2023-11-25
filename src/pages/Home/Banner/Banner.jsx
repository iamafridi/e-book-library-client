import { Link } from 'react-router-dom';
import video from '../../../assets/video/VideoBackgroundLibrary.mp4'

const Banner = () => {
    return (
        <div className='mt-4 mb-10 '>
            <div id="video-container ">
                <div className=' lg:m-10 items-center justify-center lg:mx-40'>
                    <div className=" border  my-[20vh] lg:my-[40vh]  lg:mx-auto rounded-xl bg-white absolute flex h-10 w-full min-w-[200px] lg:max-w-[50rem]">
                        <input
                            type="email"
                            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder=" "
                            required
                        />
                        <button
                            className="!absolute right-1 top-1 z-10 select-none rounded-xl bg-pink-950 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
                            type="button"
                            data-ripple-light="true"
                        >
                            Search

                        </button>
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 text-gray-400 " >
                            Search the book you are looking for...
                        </label>
                    </div>
                    <div className=" absolute flex h-12 w-full min-w-[200px] justify-center my-[28vh] lg:my-[50vh]  lg:mx-auto lg:max-w-[50rem]">
                        <Link to='/login'>
                            <button type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-xl text-sm px-5 py-2.5 text-center me-2 mb-2">Get Started</button></Link>
                        <Link to='/about'>
                            <button type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-xl text-sm px-5 py-2.5 text-center me-2 mb-2">Learn More</button></Link>
                    </div>
                </div>
                <video className='rounded' autoPlay loop muted src={video}></video>


            </div>
        </div>
    );
};

export default Banner;