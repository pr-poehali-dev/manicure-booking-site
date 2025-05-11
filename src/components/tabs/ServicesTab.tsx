
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type ServicesTabProps = {
  onBookClick: () => void;
};

const ServicesTab = ({ onBookClick }: ServicesTabProps) => {
  const services = [
    {
      id: "classic",
      title: "Маникюр классический",
      price: "От 800 ₽",
      description: "Обработка кутикулы, подпиливание и придание формы ногтям без покрытия."
    },
    {
      id: "gel",
      title: "Маникюр с покрытием гель-лак",
      price: "От 1500 ₽",
      description: "Маникюр с покрытием гель-лаком на выбор из более чем 100 оттенков."
    },
    {
      id: "design",
      title: "Маникюр с дизайном",
      price: "От 1800 ₽",
      description: "Маникюр с покрытием гель-лаком и дизайном ногтей на выбор."
    },
    {
      id: "strengthen",
      title: "Укрепление ногтей",
      price: "От 900 ₽",
      description: "Укрепление натуральных ногтей гелем или акрилом."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-center text-[#9b87f5]">Наши услуги</h2>
      <p className="text-center text-gray-600 mb-8">Мы предлагаем широкий спектр услуг маникюра</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map(service => (
          <ServiceCard 
            key={service.id}
            title={service.title}
            price={service.price}
            description={service.description}
            onBookClick={onBookClick}
          />
        ))}
      </div>
    </div>
  );
};

type ServiceCardProps = {
  title: string;
  price: string;
  description: string;
  onBookClick: () => void;
};

const ServiceCard = ({ title, price, description, onBookClick }: ServiceCardProps) => (
  <Card className="shadow-md border-[#E5DEFF]">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{price}</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600">{description}</p>
      <Button 
        className="mt-4 bg-[#9b87f5] hover:bg-[#8A76E5]"
        onClick={onBookClick}
      >
        Записаться
      </Button>
    </CardContent>
  </Card>
);

export default ServicesTab;
