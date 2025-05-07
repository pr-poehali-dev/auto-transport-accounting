
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const DashboardHeader = () => {
  return (
    <div className="mb-6 flex items-center justify-between">
      <h2 className="text-2xl font-bold">Панель управления</h2>
      <div className="flex gap-2">
        <Button>
          <Icon name="Plus" className="mr-2 h-4 w-4" />
          Добавить ТС
        </Button>
        <Button variant="outline">
          <Icon name="FileText" className="mr-2 h-4 w-4" />
          Отчеты
        </Button>
      </div>
    </div>
  );
};

export default DashboardHeader;
