
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-[#F9F5FF]">
      {/* Header */}
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#9b87f5]">НейлСтудия</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-[#9b87f5] transition-colors" onClick={() => setActiveTab("home")}>Главная</a>
            <a href="#" className="text-gray-600 hover:text-[#9b87f5] transition-colors" onClick={() => setActiveTab("booking")}>Записаться</a>
            <a href="#" className="text-gray-600 hover:text-[#9b87f5] transition-colors" onClick={() => setActiveTab("services")}>Услуги</a>
            <a href="#" className="text-gray-600 hover:text-[#9b87f5] transition-colors" onClick={() => setActiveTab("contacts")}>Контакты</a>
          </nav>
          <Button variant="outline" className="md:hidden">
            <Icon name="Menu" className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="home" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-4 w-full max-w-md mx-auto mb-8">
            <TabsTrigger value="home">Главная</TabsTrigger>
            <TabsTrigger value="booking">Запись</TabsTrigger>
            <TabsTrigger value="services">Услуги</TabsTrigger>
            <TabsTrigger value="contacts">Контакты</TabsTrigger>
          </TabsList>
          
          <TabsContent value="home" className="space-y-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-semibold mb-4 text-[#9b87f5]">Добро пожаловать в НейлСтудию</h2>
              <p className="text-gray-600 mb-8">Мы предлагаем качественные услуги маникюра в уютной атмосфере. Наши мастера - настоящие профессионалы своего дела.</p>
              <Button 
                size="lg" 
                className="bg-[#9b87f5] hover:bg-[#8A76E5] text-white"
                onClick={() => setActiveTab("booking")}
              >
                Записаться онлайн
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Clock" className="h-5 w-5 text-[#9b87f5]" />
                    Экономия времени
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Удобная онлайн-запись без необходимости звонить и подстраиваться под график работы администратора.</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Sparkles" className="h-5 w-5 text-[#9b87f5]" />
                    Профессионализм
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Мастера с многолетним опытом работы и постоянным повышением квалификации.</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Palette" className="h-5 w-5 text-[#9b87f5]" />
                    Широкий выбор
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Разнообразные виды маникюра, дизайна и палитра из сотен оттенков.</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="booking">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold mb-6 text-center text-[#9b87f5]">Онлайн-запись</h2>
              <p className="text-center text-gray-600 mb-8">Выберите удобную дату и время для вашего визита</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Выберите дату</CardTitle>
                    <CardDescription>Доступные даты отмечены на календаре</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border mx-auto"
                    />
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Выберите время и услугу</CardTitle>
                    <CardDescription>Доступное время для выбранной даты</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {date ? (
                      <>
                        <div className="grid grid-cols-3 gap-2">
                          {["10:00", "11:30", "13:00", "14:30", "16:00", "17:30"].map((time) => (
                            <Button 
                              key={time} 
                              variant="outline" 
                              className="hover:bg-[#E5DEFF] hover:text-[#9b87f5] hover:border-[#9b87f5]"
                            >
                              {time}
                            </Button>
                          ))}
                        </div>
                        <div className="mt-4">
                          <h4 className="text-sm font-medium mb-2">Выберите услугу:</h4>
                          <select className="w-full p-2 border rounded-md">
                            <option>Маникюр классический (800 ₽)</option>
                            <option>Маникюр с покрытием гель-лак (1500 ₽)</option>
                            <option>Маникюр с дизайном (1800 ₽)</option>
                            <option>Укрепление ногтей (900 ₽)</option>
                          </select>
                        </div>
                        <Button className="w-full bg-[#9b87f5] hover:bg-[#8A76E5] mt-4">
                          Продолжить запись
                        </Button>
                      </>
                    ) : (
                      <div className="text-center py-10 text-gray-500">
                        <Icon name="Calendar" className="h-12 w-12 mx-auto mb-2 opacity-50" />
                        <p>Пожалуйста, сначала выберите дату</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="services">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold mb-6 text-center text-[#9b87f5]">Наши услуги</h2>
              <p className="text-center text-gray-600 mb-8">Мы предлагаем широкий спектр услуг маникюра</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="shadow-md border-[#E5DEFF]">
                  <CardHeader>
                    <CardTitle>Маникюр классический</CardTitle>
                    <CardDescription>От 800 ₽</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Обработка кутикулы, подпиливание и придание формы ногтям без покрытия.</p>
                    <Button 
                      className="mt-4 bg-[#9b87f5] hover:bg-[#8A76E5]"
                      onClick={() => setActiveTab("booking")}
                    >
                      Записаться
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="shadow-md border-[#E5DEFF]">
                  <CardHeader>
                    <CardTitle>Маникюр с покрытием гель-лак</CardTitle>
                    <CardDescription>От 1500 ₽</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Маникюр с покрытием гель-лаком на выбор из более чем 100 оттенков.</p>
                    <Button 
                      className="mt-4 bg-[#9b87f5] hover:bg-[#8A76E5]"
                      onClick={() => setActiveTab("booking")}
                    >
                      Записаться
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="shadow-md border-[#E5DEFF]">
                  <CardHeader>
                    <CardTitle>Маникюр с дизайном</CardTitle>
                    <CardDescription>От 1800 ₽</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Маникюр с покрытием гель-лаком и дизайном ногтей на выбор.</p>
                    <Button 
                      className="mt-4 bg-[#9b87f5] hover:bg-[#8A76E5]"
                      onClick={() => setActiveTab("booking")}
                    >
                      Записаться
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="shadow-md border-[#E5DEFF]">
                  <CardHeader>
                    <CardTitle>Укрепление ногтей</CardTitle>
                    <CardDescription>От 900 ₽</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Укрепление натуральных ногтей гелем или акрилом.</p>
                    <Button 
                      className="mt-4 bg-[#9b87f5] hover:bg-[#8A76E5]"
                      onClick={() => setActiveTab("booking")}
                    >
                      Записаться
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="contacts">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-semibold mb-6 text-center text-[#9b87f5]">Контакты</h2>
              
              <Card className="shadow-md">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Icon name="MapPin" className="h-5 w-5 text-[#9b87f5] shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium">Адрес</h4>
                        <p className="text-gray-600">г. Москва, ул. Пушкина, д. 10</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Icon name="Phone" className="h-5 w-5 text-[#9b87f5] shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium">Телефон</h4>
                        <p className="text-gray-600">+7 (999) 123-45-67</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Icon name="Mail" className="h-5 w-5 text-[#9b87f5] shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <p className="text-gray-600">info@nailstudio.ru</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Icon name="Clock" className="h-5 w-5 text-[#9b87f5] shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium">Часы работы</h4>
                        <p className="text-gray-600">Пн-Пт: 10:00 - 20:00<br />Сб-Вс: 11:00 - 18:00</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t">
                    <h4 className="font-medium mb-3">Свяжитесь с нами</h4>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm text-gray-600">Имя</label>
                          <input type="text" className="mt-1 w-full p-2 border rounded-md" />
                        </div>
                        <div>
                          <label className="text-sm text-gray-600">Email</label>
                          <input type="email" className="mt-1 w-full p-2 border rounded-md" />
                        </div>
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Сообщение</label>
                        <textarea className="mt-1 w-full p-2 border rounded-md" rows={4}></textarea>
                      </div>
                      <Button className="bg-[#9b87f5] hover:bg-[#8A76E5]">Отправить</Button>
                    </form>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-[#E5DEFF] py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#9b87f5]">НейлСтудия</h3>
              <p className="text-gray-600">Ваш выбор для качественного и стильного маникюра в городе.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#9b87f5]">Навигация</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-[#9b87f5]" onClick={() => setActiveTab("home")}>Главная</a></li>
                <li><a href="#" className="hover:text-[#9b87f5]" onClick={() => setActiveTab("booking")}>Записаться</a></li>
                <li><a href="#" className="hover:text-[#9b87f5]" onClick={() => setActiveTab("services")}>Услуги</a></li>
                <li><a href="#" className="hover:text-[#9b87f5]" onClick={() => setActiveTab("contacts")}>Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#9b87f5]">Мы в соцсетях</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-[#9b87f5]">
                  <Icon name="Instagram" className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-[#9b87f5]">
                  <Icon name="Facebook" className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-[#9b87f5]">
                  <Icon name="Twitter" className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-[#9b87f5]">
                  <Icon name="MessageCircle" className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
            <p>© 2025 НейлСтудия. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
