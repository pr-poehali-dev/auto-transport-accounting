
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VehiclesTabContent from "./VehiclesTabContent";
import TabContentWrapper from "./TabContentWrapper";

const TabsSection = () => {
  return (
    <Tabs defaultValue="vehicles" className="w-full">
      <TabsList className="mb-4">
        <TabsTrigger value="vehicles">Автопарк</TabsTrigger>
        <TabsTrigger value="maintenance">ТО и ремонты</TabsTrigger>
        <TabsTrigger value="drivers">Водители</TabsTrigger>
        <TabsTrigger value="routes">Маршруты</TabsTrigger>
      </TabsList>
      
      <TabsContent value="vehicles">
        <VehiclesTabContent />
      </TabsContent>
      
      <TabsContent value="maintenance">
        <TabContentWrapper title="График технического обслуживания">
          <p className="text-muted-foreground">
            Здесь будет отображаться график ТО и ремонтов автотранспорта
          </p>
        </TabContentWrapper>
      </TabsContent>
      
      <TabsContent value="drivers">
        <TabContentWrapper title="Список водителей">
          <p className="text-muted-foreground">
            Здесь будет отображаться информация о водителях
          </p>
        </TabContentWrapper>
      </TabsContent>
      
      <TabsContent value="routes">
        <TabContentWrapper title="Маршруты и рейсы">
          <p className="text-muted-foreground">
            Здесь будет отображаться информация о маршрутах и рейсах
          </p>
        </TabContentWrapper>
      </TabsContent>
    </Tabs>
  );
};

export default TabsSection;
