
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white border-b p-4 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon name="Truck" className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold">АвтоУчет</h1>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">
            <Icon name="Bell" className="mr-2 h-4 w-4" />
            Уведомления
          </Button>
          <Button variant="ghost" size="sm">
            <Icon name="User" className="mr-2 h-4 w-4" />
            Профиль
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
