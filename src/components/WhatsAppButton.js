import React from 'react';

function WhatsAppButton() {
    const whatsappNumber = "+77757712070"; // Определяем переменную с номером телефона для WhatsApp

    const handleClick = () => {
        const message = "Здравствуйте!"; // Сообщение по умолчанию, которое будет отправлено
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, "_blank"); // Открываем ссылку в новой вкладке
    };

    return (
        <button 
            onClick={handleClick}
            className="btn btn-success mt-4"
        >
            Связаться в WhatsApp
        </button>
    );
}

export default WhatsAppButton;
