
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Шапка */}
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

      {/* Основной контент */}
      <main className="container mx-auto flex-1 p-6">
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

        {/* Статистика */}
        <div className="grid gap-6 mb-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Всего ТС</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">24</div>
              <p className="text-xs text-muted-foreground mt-1 flex items-center">
                <Icon name="ArrowUp" className="h-3 w-3 text-green-500 mr-1" />
                <span className="text-green-500 font-medium">2</span> с прошлого месяца
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">В эксплуатации</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">18</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: "75%" }}></div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">ТО запланировано</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">5</div>
              <p className="text-xs text-muted-foreground mt-1">на ближайшие 30 дней</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">В ремонте</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">2</div>
              <p className="text-xs text-muted-foreground mt-1 flex items-center">
                <Icon name="ArrowDown" className="h-3 w-3 text-green-500 mr-1" />
                <span className="text-green-500 font-medium">-1</span> с прошлой недели
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Вкладки с контентом */}
        <Tabs defaultValue="vehicles" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="vehicles">Автопарк</TabsTrigger>
            <TabsTrigger value="maintenance">ТО и ремонты</TabsTrigger>
            <TabsTrigger value="drivers">Водители</TabsTrigger>
            <TabsTrigger value="routes">Маршруты</TabsTrigger>
          </TabsList>
          
          <TabsContent value="vehicles">
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
                      <tr className="border-t">
                        <td className="py-3 px-4">А123БВ77</td>
                        <td className="py-3 px-4">КАМАЗ 6520</td>
                        <td className="py-3 px-4">Грузовой</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">В эксплуатации</span>
                        </td>
                        <td className="py-3 px-4">45,230 км</td>
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
                      <tr className="border-t">
                        <td className="py-3 px-4">В456ГД99</td>
                        <td className="py-3 px-4">ГАЗель Next</td>
                        <td className="py-3 px-4">Фургон</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">ТО завтра</span>
                        </td>
                        <td className="py-3 px-4">67,410 км</td>
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
                      <tr className="border-t">
                        <td className="py-3 px-4">Е567ЖЗ77</td>
                        <td className="py-3 px-4">Scania R500</td>
                        <td className="py-3 px-4">Тягач</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">В ремонте</span>
                        </td>
                        <td className="py-3 px-4">103,780 км</td>
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
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="text-sm text-muted-foreground">Показано 3 из 24 ТС</div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" disabled>
                      <Icon name="ChevronLeft" className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="ChevronRight" className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="maintenance">
            <Card>
              <CardHeader>
                <CardTitle>График технического обслуживания</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Здесь будет отображаться график ТО и ремонтов автотранспорта</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="drivers">
            <Card>
              <CardHeader>
                <CardTitle>Список водителей</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Здесь будет отображаться информация о водителях</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="routes">
            <Card>
              <CardHeader>
                <CardTitle>Маршруты и рейсы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Здесь будет отображаться информация о маршрутах и рейсах</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Подвал */}
      <footer className="bg-white border-t p-4">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 АвтоУчет — Система учета автотранспорта. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
