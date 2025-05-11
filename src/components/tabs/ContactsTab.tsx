
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";

const ContactsTab = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь можно добавить логику отправки формы
    console.log("Form submitted:", formData);
    // Очистка формы после отправки
    setFormData({ name: "", email: "", phone: "", message: "" });
    alert("Сообщение отправлено! Мы свяжемся с вами в ближайшее время.");
  };

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-center text-[#9b87f5]">Наши контакты</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Левая колонка - информация о контактах */}
        <div>
          <Card className="shadow-md h-full">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-[#9b87f5]">Студия маникюра "НейлСтудия"</h3>
              <ContactInfo />
              
              <Separator className="my-6" />
              
              <div>
                <h4 className="font-medium mb-4 text-[#9b87f5]">Мы на карте</h4>
                <div className="rounded-md overflow-hidden h-[250px] bg-gray-100 relative">
                  {/* Здесь можно добавить iframe с картой, например Яндекс или Google карт */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <Icon name="Map" className="h-16 w-16 text-gray-300" />
                    <span className="sr-only">Карта</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-medium mb-3 text-[#9b87f5]">Мы в социальных сетях</h4>
                <div className="flex space-x-4">
                  <SocialLink icon="Instagram" url="#" />
                  <SocialLink icon="Facebook" url="#" />
                  <SocialLink icon="Telegram" url="#" />
                  <SocialLink icon="Vk" url="#" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Правая колонка - форма обратной связи */}
        <div>
          <Card className="shadow-md h-full">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-[#9b87f5]">Напишите нам</h3>
              <p className="text-gray-600 mb-6">Оставьте сообщение, и мы свяжемся с вами в ближайшее время</p>
              
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="text-sm text-gray-600 block mb-1">Имя</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b87f5] focus:border-transparent" 
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-600 block mb-1">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b87f5] focus:border-transparent" 
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 block mb-1">Телефон</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b87f5] focus:border-transparent" 
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-gray-600 block mb-1">Сообщение</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b87f5] focus:border-transparent" 
                    rows={5}
                    required
                  ></textarea>
                </div>
                <div className="pt-2">
                  <Button 
                    type="submit" 
                    className="w-full bg-[#9b87f5] hover:bg-[#8A76E5] transition-colors"
                  >
                    Отправить сообщение
                  </Button>
                </div>
                <p className="text-xs text-gray-500 text-center mt-2">
                  Нажимая кнопку "Отправить", вы соглашаетесь с нашей политикой обработки персональных данных
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Блок с часто задаваемыми вопросами */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-6 text-center text-[#9b87f5]">Часто задаваемые вопросы</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FaqItem 
            question="Нужна ли предварительная запись?" 
            answer="Да, мы работаем только по предварительной записи, чтобы избежать очередей и уделить каждому клиенту максимум внимания. Записаться можно онлайн или по телефону."
          />
          <FaqItem 
            question="Какие способы оплаты вы принимаете?" 
            answer="Мы принимаем оплату наличными, банковскими картами, а также переводы через системы быстрых платежей."
          />
          <FaqItem 
            question="Что делать, если я опаздываю на запись?" 
            answer="Если вы опаздываете, пожалуйста, предупредите нас по телефону. В случае опоздания более чем на 15 минут, мы вправе сократить время процедуры или перенести запись."
          />
          <FaqItem 
            question="Можно ли отменить запись?" 
            answer="Да, запись можно отменить не позднее чем за 3 часа до назначенного времени. Для отмены свяжитесь с нами по телефону."
          />
        </div>
      </div>
    </div>
  );
};

const ContactInfo = () => {
  const contactItems = [
    { icon: "MapPin", title: "Адрес", content: "г. Москва, ул. Тверская, д. 15, офис 305" },
    { icon: "Phone", title: "Телефон", content: "+7 (495) 123-45-67" },
    { icon: "Mail", title: "Email", content: "hello@nailstudio.ru" },
    { icon: "Clock", title: "Часы работы", content: "Пн-Пт: 9:00 - 21:00\nСб-Вс: 10:00 - 20:00" }
  ];

  return (
    <div className="space-y-5">
      {contactItems.map((item, index) => (
        <div key={index} className="flex items-start gap-3">
          <div className="bg-[#F0EBFF] p-2.5 rounded-md mt-0.5">
            <Icon name={item.icon} className="h-5 w-5 text-[#9b87f5]" />
          </div>
          <div>
            <h4 className="font-medium">{item.title}</h4>
            <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

type SocialLinkProps = {
  icon: string;
  url: string;
};

const SocialLink = ({ icon, url }: SocialLinkProps) => (
  <a 
    href={url} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="bg-[#F0EBFF] p-2.5 rounded-full hover:bg-[#E5DEFF] transition-colors"
  >
    <Icon name={icon} className="h-5 w-5 text-[#9b87f5]" />
  </a>
);

type FaqItemProps = {
  question: string;
  answer: string;
};

const FaqItem = ({ question, answer }: FaqItemProps) => (
  <Card className="shadow-sm border-[#E5DEFF]">
    <CardContent className="pt-4">
      <h4 className="font-medium text-[#9b87f5] mb-2">{question}</h4>
      <p className="text-gray-600 text-sm">{answer}</p>
    </CardContent>
  </Card>
);

export default ContactsTab;
