
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

type HomeTabProps = {
  onBookingClick: () => void;
};

const HomeTab = ({ onBookingClick }: HomeTabProps) => {
  return (
    <div className="space-y-8">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-semibold mb-4 text-[#9b87f5]">Добро пожаловать в НейлСтудию</h2>
        <p className="text-gray-600 mb-8">Мы предлагаем качественные услуги маникюра в уютной атмосфере. Наши мастера - настоящие профессионалы своего дела.</p>
        <Button 
          size="lg" 
          className="bg-[#9b87f5] hover:bg-[#8A76E5] text-white"
          onClick={onBookingClick}
        >
          Записаться онлайн
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <FeatureCard 
          icon="Clock" 
          title="Экономия времени"
          description="Удобная онлайн-запись без необходимости звонить и подстраиваться под график работы администратора."
        />
        
        <FeatureCard 
          icon="Sparkles" 
          title="Профессионализм"
          description="Мастера с многолетним опытом работы и постоянным повышением квалификации."
        />
        
        <FeatureCard 
          icon="Palette" 
          title="Широкий выбор"
          description="Разнообразные виды маникюра, дизайна и палитра из сотен оттенков."
        />
      </div>
    </div>
  );
};

type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
};

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <Card className="shadow-md hover:shadow-lg transition-shadow">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <Icon name={icon} className="h-5 w-5 text-[#9b87f5]" />
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

export default HomeTab;
