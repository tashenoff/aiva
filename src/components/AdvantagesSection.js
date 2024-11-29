import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faHandshake, faTruck, faFileAlt, faTag, faUsers } from '@fortawesome/free-solid-svg-icons';

function AdvantagesSection() {
    const advantages = [
        {
            text: "Высокое качество",
            description: "Масла 'AIVA' изготавливаются прессовым методом из сырья без ГМО, химикатов и пестицидов. Без искусственных добавок и примесей.",
            icon: faCheckCircle,
        },
        {
            text: "Долгосрочное сотрудничество",
            description: "ТОО 'AIVA.KZ' заинтересовано в поставках растительных масел в КНР на долгосрочной основе.",
            icon: faHandshake,
        },
        {
            text: "Гибкая логистика",
            description: "Поставки наливом или в таре (1-5 литров), наземным и морским транспортом: флекси-танки, цистерны, вагоны, контейнеры. Сроки доставки – 27-47 дней.",
            icon: faTruck,
        },
        {
            text: "Документальное сопровождение",
            description: "Предоставляем полный пакет документов: таможенная декларация, инвойс, транспортные документы, сертификаты и т.д.",
            icon: faFileAlt,
        },
        {
            text: "Private Label",
            description: "Возможность поставки продукции под торговый бренд заказчика – 'Private label'.",
            icon: faTag,
        },
        {
            text: "Профессиональная команда",
            description: "Наши специалисты с многолетним опытом обеспечивают высокое качество сервиса и поддержку на каждом этапе работы.",
            icon: faUsers,
        }
    ];

    return (
        <div id="adv" className="py-10 bg-base-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-6">
                    Почему выбирают масла "AIVA"
                </h2>
                <p className="text-center py-5">
                    Растительные масла "AIVA" производятся по заказу ТОО "AIVA.KZ" ведущими производителями России. Это масла высокого качества, созданные для долгосрочного сотрудничества и удобной доставки.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-5">
                    {advantages.map((advantage, index) => (
                        <div
                            key={index}
                            className="card bg-base-200 shadow-md p-4 flex flex-col items-center text-center"
                        >
                            <FontAwesomeIcon icon={advantage.icon} className="text-primary text-3xl mb-3" />
                            <h3 className="text-lg font-semibold mb-2">{advantage.text}</h3>
                            <p className="text-sm text-gray-600">{advantage.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AdvantagesSection;
