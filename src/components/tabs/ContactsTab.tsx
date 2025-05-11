
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const ContactsTab = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
    setFormData({ name: "", email: "", message: "" });
    alert("Сообщение отправлено! Мы свяжемся с вами в ближайшее время.");
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-center text-[#9b87f5]">Контакты</h2>
      
      <Card className="shadow-md">
        <CardContent className="pt-6">
          <ContactInfo />
          
          <div className="mt-6 pt-6 border-t">
            <h4 className="font-medium mb-3">Свяжитесь с нами</h4>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-600">Имя</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border rounded-md" 
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border rounded-md" 
                    required
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-600">Сообщение</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 w-full p-2 border rounded-md" 
                  rows={4}
                  required
                ></textarea>
              </div>
              <Button type="submit" className="bg-[#9b87f5] hover:bg-[#8A76E5]">Отправить</Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const ContactInfo = () => {
  const contactItems = [
    { icon: "MapPin", title: "Адрес", content: "г. Москва, ул. Пушкина, д. 10" },
    { icon: "Phone", title: "Телефон", content: "+7 (999) 123-45-67" },
    { icon: "Mail", title: "Email", content: "info@nailstudio.ru" },
    { icon: "Clock", title: "Часы работы", content: "Пн-Пт: 10:00 - 20:00\nСб-Вс: 11:00 - 18:00" }
  ];

  return (
    <div className="space-y-4">
      {contactItems.map((item, index) => (
        <div key={index} className="flex items-start gap-3">
          <Icon name={item.icon} className="h-5 w-5 text-[#9b87f5] shrink-0 mt-1" />
          <div>
            <h4 className="font-medium">{item.title}</h4>
            <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactsTab;
