/* eslint-disable react/no-unescaped-entities */
import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const UpcomingEvents = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className="text-center text-3xl mb-10 font-bold items-center justify-center  text-white bg-gray-900 rounded-xl">
            <h2 className='p-10'>Upcoming Events
                <hr className="w-28 h-2 mt-4  border-spacing-2 border-dotted bg-gray-500 justify-center border mx-auto " />
            </h2>
            <div className="flex mt-5 gap-5 justify-center mb-10 ">
                <button className="btn btn-outline bg-[#A25772] text-white">Saturday,Dec 14,2023 - 3:00 PM</button>
                <button className="btn btn-outline bg-[#A25772] text-white">Dec 20,Poetry Club</button>
                <button className="btn btn-outline bg-[#A25772] text-white">Dec 22,Sci-Fi Book Club</button>
            </div>
            <div>
                <>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        onAutoplayTimeLeft={onAutoplayTimeLeft}
                        className="mySwiper"
                    >
                        <div className='w-10'>
                            <SwiperSlide className='px-10 ml-5'>
                                <div className='grid grid-cols-2 gap-5 p-5'>
                                    <div>
                                        <h3 className='text-sm mb-5'>Author Q&A Session: <br /> Exploring Literary Worlds</h3>
                                        <p className='w-50 md:w-32  text-xs text-left'>Join us for an exclusive live Q&A session with award-winning authors as they delve into the depths of their literary creations. This event aims to bring readers closer to the minds behind their favorite books, providing insights into the imaginative process, character development, and the inspiration behind the worlds they have crafted. From fantasy realms to historical settings, explore diverse literary landscapes and interact with authors who breathe life into them. Do not miss this opportunity to ask your burning questions and gain a deeper understanding of the stories that captivate you. The session will be moderated and open to audience participation through live chat.</p>
                                    </div>
                                    <div>
                                        <img src="https://i.ibb.co/rGQRLST/swiper1.jpg" alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* slider 2 */}
                            <SwiperSlide>
                                <div className='grid grid-cols-2 gap-5 p-5'>
                                    <div>
                                        <h3 className='text-sm mb-5'>Book Club Discussion: <br /> Unraveling 'The Power of Words'</h3>
                                        <p className='w-50 md:w-32 text-xs text-left'>Embark on a literary journey with fellow book enthusiasts in our online book club discussion. This session focuses on 'The Power of Words,' a thought-provoking book that explores the impact of language, storytelling, and communication in society. Engage in a lively conversation, share your insights, and delve into the themes, characters, and narrative techniques of this compelling work. Whether you're a casual reader or a devoted bookworm, this discussion offers a platform to exchange perspectives and interpretations in a welcoming and inclusive environment. Come prepared to express your thoughts and explore the power of words together.</p>
                                    </div>
                                    <div>
                                        <img src="https://i.ibb.co/nBqr84j/Book-club.png" alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='grid grid-cols-2 gap-5 p-5'>
                                    <div>
                                        <h3 className='text-sm mb-5'>Writing Workshop: <br /> Crafting Compelling Characters</h3>
                                        <p className='w-50 md:w-32 text-xs text-left'>Calling all aspiring writers! Join our interactive workshop focused on the craft of creating compelling characters. Led by seasoned authors and writing experts, this session will delve into the nuances of character development, exploring techniques to breathe life into your fictional personas. From outlining personalities to establishing motivations and conflicts, participants will engage in practical exercises and discussions aimed at honing their character-building skills. Whether you're working on a novel, short stories, or any form of creative writing, this workshop promises valuable insights and guidance to bring depth and authenticity to your characters.</p>
                                    </div>
                                    <div>
                                        <img src="https://i.ibb.co/hFjvfwS/Writting-Workshop.jpg" alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                        <div className="autoplay-progress" slot="container-end">
                            <svg viewBox="0 0 48 48" ref={progressCircle}>
                                <circle cx="24" cy="24" r="20"></circle>
                            </svg>
                            <span ref={progressContent}></span>
                        </div>
                    </Swiper>
                </>
            </div>
        </div>
    );
};

export default UpcomingEvents;