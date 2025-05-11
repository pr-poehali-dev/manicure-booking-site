
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const BookingTab = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string>("Маникюр классический (800 ₽)");

  const availableTimes = ["10:00", "11:30", "13:00", "14:30", "16:00", "17:30"];
  
  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleServiceSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedService(e.target.value);
  };

  return (
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
              selected={selectedDate}
              onSelect={setSelectedDate}
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
            {selectedDate ? (
              <>
                <div className="grid grid-cols-3 gap-2">
                  {availableTimes.map((time) => (
                    <Button 
                      key={time} 
                      variant="outline" 
                      className={`hover:bg-[#E5DEFF] hover:text-[#9b87f5] hover:border-[#9b87f5] ${selectedTime === time ? 'bg-[#E5DEFF] text-[#9b87f5] border-[#9b87f5]' : ''}`}
                      onClick={() => handleTimeSelect(time)}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
                <div className="mt-4">
                  <h4 className="text-sm font-medium mb-2">Выберите услугу:</h4>
                  <select 
                    className="w-full p-2 border rounded-md"
                    value={selectedService}
                    onChange={handleServiceSelect}
                  >
                    <option>Маникюр классический (800 ₽)</option>
                    <option>Маникюр с покрытием гель-лак (1500 ₽)</option>
                    <option>Маникюр с дизайном (1800 ₽)</option>
                    <option>Укрепление ногтей (900 ₽)</option>
                  </select>
                </div>
                <Button 
                  className="w-full bg-[#9b87f5] hover:bg-[#8A76E5] mt-4"
                  disabled={!selectedTime}
                >
                  Продолжить запись
                </Button>
              </>
            ) : (
              <EmptyDateSelection />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const EmptyDateSelection = () => (
  <div className="text-center py-10 text-gray-500">
    <Icon name="Calendar" className="h-12 w-12 mx-auto mb-2 opacity-50" />
    <p>Пожалуйста, сначала выберите дату</p>
  </div>
);

export default BookingTab;
