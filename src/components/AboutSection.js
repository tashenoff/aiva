import React from 'react';
import oilImage from './about/s3.png';

const AboutSection = () => {
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-2">
                <div>
                    <img src={oilImage} alt="Aiva масло" />
                </div>
                <p className="p-5">
                Торгово-логистическая компания ТОО "AIVA.KZ"
является поставщиком растительного масла «AIVA», и других видов пищевых масел.
                </p>
            </div>
        </div>
    );
};

export default AboutSection;
