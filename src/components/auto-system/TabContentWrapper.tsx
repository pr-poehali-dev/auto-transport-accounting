
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

type TabContentWrapperProps = {
  title: string;
  children?: ReactNode;
};

const TabContentWrapper = ({ title, children }: TabContentWrapperProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {children || <p className="text-muted-foreground">Здесь будет отображаться информация</p>}
      </CardContent>
    </Card>
  );
};

export default TabContentWrapper;
