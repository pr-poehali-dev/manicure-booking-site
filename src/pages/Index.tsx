import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HomeTab from "@/components/tabs/HomeTab";
import BookingTab from "@/components/tabs/BookingTab";
import ServicesTab from "@/components/tabs/ServicesTab";
import ContactsTab from "@/components/tabs/ContactsTab";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-[#F9F5FF]">
      {/* Header */}
      <Header setActiveTab={handleTabChange} />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs
          value={activeTab}
          onValueChange={handleTabChange}
          className="w-full"
        >
          <TabsList className="grid grid-cols-4 w-full max-w-md mx-auto mb-8">
            <TabsTrigger value="home">Главная</TabsTrigger>
            <TabsTrigger value="booking">Запись</TabsTrigger>
            <TabsTrigger value="services">Услуги</TabsTrigger>
            <TabsTrigger value="contacts">Контакты</TabsTrigger>
          </TabsList>

          <TabsContent value="home">
            <HomeTab onBookingClick={() => handleTabChange("booking")} />
          </TabsContent>

          <TabsContent value="booking">
            <BookingTab />
          </TabsContent>

          <TabsContent value="services">
            <ServicesTab onBookClick={() => handleTabChange("booking")} />
          </TabsContent>

          <TabsContent value="contacts">
            <ContactsTab />
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <Footer setActiveTab={handleTabChange} />
    </div>
  );
};

export default Index;
