
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { ReactNode } from "react";

type StatCardProps = {
  title: string;
  value: string | number;
  indicator?: {
    type: "up" | "down" | "none";
    value: string | number;
    text: string;
  };
  progressBar?: {
    percentage: number;
  };
};

const StatCard = ({ title, value, indicator, progressBar }: StatCardProps) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{value}</div>
        
        {indicator && (
          <p className="text-xs text-muted-foreground mt-1 flex items-center">
            {indicator.type !== "none" && (
              <Icon 
                name={indicator.type === "up" ? "ArrowUp" : "ArrowDown"} 
                className={`h-3 w-3 ${indicator.type === "up" ? "text-green-500" : "text-green-500"} mr-1`} 
              />
            )}
            {indicator.value && (
              <span className={indicator.type === "up" ? "text-green-500 font-medium" : "text-green-500 font-medium"}>
                {indicator.type === "down" ? "-" : ""}{indicator.value}
              </span>
            )}
            {" "}{indicator.text}
          </p>
        )}
        
        {progressBar && (
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div 
              className="bg-green-500 h-2 rounded-full" 
              style={{ width: `${progressBar.percentage}%` }}
            ></div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default StatCard;
