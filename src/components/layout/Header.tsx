
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

type HeaderProps = {
  setActiveTab: (tab: string) => void;
};

const Header = ({ setActiveTab }: HeaderProps) => {
  return (
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
  );
};

export default Header;
