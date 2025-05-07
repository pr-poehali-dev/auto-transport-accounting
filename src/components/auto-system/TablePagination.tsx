
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

type TablePaginationProps = {
  shown: number;
  total: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
};

const TablePagination = ({ shown, total, currentPage = 1, onPageChange }: TablePaginationProps) => {
  const handlePageChange = (page: number) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex justify-between items-center mt-4">
      <div className="text-sm text-muted-foreground">
        Показано {shown} из {total} ТС
      </div>
      <div className="flex gap-2">
        <Button 
          variant="outline" 
          size="sm" 
          disabled={currentPage <= 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <Icon name="ChevronLeft" className="h-4 w-4" />
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <Icon name="ChevronRight" className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default TablePagination;
