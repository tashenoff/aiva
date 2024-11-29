import React from 'react';
import ScrollArrow from './ScrollArrow';
import WhatsAppButton from './WhatsAppButton'; // Импортируем компонент WhatsAppButton

function HeroSection() {
    return (
        <div id="home" className="hero relative h-[600px] bg-base-200">
            {/* Видео фон */}
            <video 
                className="absolute inset-0 w-full h-full object-cover"
                src="images/2video.mp4" // Замените путь на ваш файл
                autoPlay 
                loop 
                muted 
                playsInline
            ></video>

            {/* Затемнение поверх видео */}
            <div className="hero-overlay bg-black bg-opacity-80 absolute inset-0"></div>

            {/* Контент */}
            <div className="hero-content text-center relative z-10">
                <div className="w-full">
                    <h1 className="lg:text-5xl text-3xl font-bold">Натуральное масло Aiva – качество, которому можно доверять</h1>
                    <p className="py-6">Наше масло – это идеальный выбор для ваших кулинарных шедевров. <br/>Безупречно чистое, с мягким вкусом и полезными свойствами, оно станет незаменимым ингредиентом на вашей кухне.</p>
                    <WhatsAppButton />
                </div>
            </div>

            {/* Стрелка прокрутки */}
            <ScrollArrow className="bottom-5 absolute animate-bounce z-10" direction="down" targetId="services" />
        </div>
    );
}

export default HeroSection;
