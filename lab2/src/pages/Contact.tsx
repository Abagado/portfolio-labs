import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: typeof errors = {};
    if (!name.trim()) newErrors.name = "Введите ваше имя.";
    if (!email.trim()) {
      newErrors.email = "Введите ваш email.";
    } else if (!validateEmail(email)) {
      newErrors.email = "Введите корректный email.";
    }
    if (!message.trim()) newErrors.message = "Введите сообщение.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

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

      {/* Форма обратной связи */}
      <div className="mt-12 w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Или отправьте форму
        </h2>
        {isSubmitted && (
          <div className="text-green-600 text-lg font-medium mb-6 text-center">
            Спасибо за ваше сообщение! Я свяжусь с вами в ближайшее время.
          </div>
        )}
        <form onSubmit={handleSubmit} className="bg-white shadow-lg p-6 rounded-lg space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Имя
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full mt-1 p-2 border rounded-lg ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full mt-1 p-2 border rounded-lg ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium">
              Сообщение
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`w-full mt-1 p-2 border rounded-lg ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
              rows={4}
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;


