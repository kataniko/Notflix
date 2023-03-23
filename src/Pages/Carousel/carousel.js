import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import api from '../../Services/api';
import { Link } from 'react-router-dom';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styless.css";
import { motion } from 'framer-motion';
import { EffectCoverflow, Pagination } from "swiper";


export default function App() {

    const [films, setFilms] = useState([]);

    useEffect(() => {

        async function loadFilms() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "878f50dfcec80fb4a31c7bf1527cc55d",
                    language: "en",
                    page: 1,
                }
            })
            setFilms(response.data.results.slice(0, 10))
        }

        loadFilms();

    }, [])

    return (
        <>
            <motion.div initial={{ z: 0, opacity: 0, scale: 1, }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 5, }}>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >

                    {films.map((film) => {
                        return (
                            <SwiperSlide >
                                <Link className='logo' to={`/film/${film.id}`}>
                                    <img className="borders" src={`https://image.tmdb.org/t/p/original/${film.poster_path}`} alt={film.title} />
                                </Link>
                            </SwiperSlide>
                        )
                    })}

                </Swiper>
            </motion.div>
        </>
    );
}
