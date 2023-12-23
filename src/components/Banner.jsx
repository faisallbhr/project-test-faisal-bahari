import { useState, useEffect } from 'react';
import bannerImage from '../assets/banner.jpg'

const Banner = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="relative overflow-hidden">
            <div className="relative h-screen overflow-hidden">
                <div
                    className="absolute -top-1/4 left-0 w-full h-full bg-white bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${bannerImage})`, // Ganti dengan URL gambar Anda
                        transform: `translateY(${scrollY * 0.4}px) skewY(-10deg)`, // Efek parallax dan miring
                    }}
                ></div>
                <div className="absolute inset-0"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h1 className='font-bold text-9xl'>Ideas</h1>
                    <p className='text-3xl'>Where all our great things begin</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;

