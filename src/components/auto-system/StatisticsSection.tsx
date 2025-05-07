
import StatCard from "./StatCard";

const StatisticsSection = () => {
  return (
    <div className="grid gap-6 mb-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <StatCard 
        title="Всего ТС"
        value={24}
        indicator={{
          type: "up",
          value: 2,
          text: "с прошлого месяца"
        }}
      />
      
      <StatCard 
        title="В эксплуатации"
        value={18}
        progressBar={{
          percentage: 75
        }}
      />
      
      <StatCard 
        title="ТО запланировано"
        value={5}
        indicator={{
          type: "none",
          value: "",
          text: "на ближайшие 30 дней"
        }}
      />
      
      <StatCard 
        title="В ремонте"
        value={2}
        indicator={{
          type: "down",
          value: 1,
          text: "с прошлой недели"
        }}
      />
    </div>
  );
};

export default StatisticsSection;
