
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import VehicleTable from "./VehicleTable";
import TablePagination from "./TablePagination";

const VehiclesTabContent = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Список транспортных средств</CardTitle>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Icon name="SlidersHorizontal" className="mr-2 h-4 w-4" />
              Фильтры
            </Button>
            <Button variant="outline" size="sm">
              <Icon name="Search" className="mr-2 h-4 w-4" />
              Поиск
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <VehicleTable />
        <TablePagination shown={3} total={24} />
      </CardContent>
    </Card>
  );
};

export default VehiclesTabContent;
