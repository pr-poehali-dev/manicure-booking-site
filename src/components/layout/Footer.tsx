
import Icon from "@/components/ui/icon";

type FooterProps = {
  setActiveTab: (tab: string) => void;
};

const Footer = ({ setActiveTab }: FooterProps) => {
  return (
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
  );
};

export default Footer;
