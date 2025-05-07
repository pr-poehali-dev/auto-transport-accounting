
import Header from "@/components/auto-system/Header";
import Footer from "@/components/auto-system/Footer";
import DashboardHeader from "@/components/auto-system/DashboardHeader";
import StatisticsSection from "@/components/auto-system/StatisticsSection";
import TabsSection from "@/components/auto-system/TabsSection";

/**
 * Главная страница системы автоматизации учета автотранспорта
 * Отображает панель управления с основными элементами интерфейса
 */
const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Шапка сайта */}
      <Header />

      {/* Основной контент */}
      <main className="container mx-auto flex-1 p-6">
        {/* Заголовок панели управления */}
        <DashboardHeader />

        {/* Блок статистики */}
        <StatisticsSection />

        {/* Вкладки с контентом */}
        <TabsSection />
      </main>

      {/* Подвал сайта */}
      <Footer />
    </div>
  );
};

export default Index;
