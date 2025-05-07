
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import StatusBadge from "./StatusBadge";

type Vehicle = {
  id: number;
  plateNumber: string;
  model: string;
  type: string;
  status: {
    type: "active" | "maintenance" | "repair";
    text: string;
  };
  mileage: string;
};

const vehicles: Vehicle[] = [
  {
    id: 1,
    plateNumber: "А123БВ77",
    model: "КАМАЗ 6520",
    type: "Грузовой",
    status: { type: "active", text: "В эксплуатации" },
    mileage: "45,230 км"
  },
  {
    id: 2,
    plateNumber: "В456ГД99",
    model: "ГАЗель Next",
    type: "Фургон",
    status: { type: "maintenance", text: "ТО завтра" },
    mileage: "67,410 км"
  },
  {
    id: 3,
    plateNumber: "Е567ЖЗ77",
    model: "Scania R500",
    type: "Тягач",
    status: { type: "repair", text: "В ремонте" },
    mileage: "103,780 км"
  }
];

const VehicleTable = () => {
  return (
    <div className="bg-white rounded-md shadow overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="py-3 px-4 font-medium">Гос. номер</th>
            <th className="py-3 px-4 font-medium">Модель</th>
            <th className="py-3 px-4 font-medium">Тип</th>
            <th className="py-3 px-4 font-medium">Статус</th>
            <th className="py-3 px-4 font-medium">Пробег</th>
            <th className="py-3 px-4 font-medium">Действия</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle.id} className="border-t">
              <td className="py-3 px-4">{vehicle.plateNumber}</td>
              <td className="py-3 px-4">{vehicle.model}</td>
              <td className="py-3 px-4">{vehicle.type}</td>
              <td className="py-3 px-4">
                <StatusBadge status={vehicle.status.type} text={vehicle.status.text} />
              </td>
              <td className="py-3 px-4">{vehicle.mileage}</td>
              <td className="py-3 px-4">
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">
                    <Icon name="Eye" className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Icon name="Pencil" className="h-4 w-4" />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VehicleTable;
