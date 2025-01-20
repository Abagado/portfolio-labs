import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gradient-to-b from-green-100 to-white px-5 py-12">
      {/* Заголовок */}
      <h1 className="text-5xl font-extrabold text-green-600 mb-8">Связаться со мной</h1>

      {/* Описание */}
      <p className="text-lg text-gray-700 text-center max-w-2xl mb-10 leading-relaxed">
        Если у вас есть вопросы, предложения или просто хотите поздороваться, я всегда рада общению! 
        Используйте любой удобный способ связи.
      </p>

      {/* Контактные данные */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow">
          <FaEnvelope className="text-4xl text-green-600 mb-4" />
          <h2 className="text-xl font-bold text-gray-800">Электронная почта</h2>
          <p className="text-gray-600">sokirkina.dv@dvfu.ru</p>
        </div>
        <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow">
          <FaPhoneAlt className="text-4xl text-blue-500 mb-4" />
          <h2 className="text-xl font-bold text-gray-800">Телефон</h2>
          <p className="text-gray-600">+7 (950) 907-46-08</p>
        </div>
        <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow">
          <FaMapMarkerAlt className="text-4xl text-red-500 mb-4" />
          <h2 className="text-xl font-bold text-gray-800">Местоположение</h2>
          <p className="text-gray-600">Владивосток, Россия</p>
        </div>
      </div>

      {/* Символическое сообщение */}
      <div className="mt-12 text-lg text-gray-700 text-center">
        Или найдите меня в социальных сетях! 😊
      </div>

      {/* Декоративные элементы */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-5 left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-40 blur-2xl"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 bg-blue-300 rounded-full opacity-50 blur-3xl"></div>
      </div>
    </div>
  );
};

export default Contact;

