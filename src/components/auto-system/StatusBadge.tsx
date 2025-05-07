
type StatusBadgeProps = {
  status: "active" | "maintenance" | "repair";
  text: string;
};

const getStatusStyles = (status: string) => {
  switch (status) {
    case "active":
      return "bg-green-100 text-green-800";
    case "maintenance":
      return "bg-yellow-100 text-yellow-800";
    case "repair":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const StatusBadge = ({ status, text }: StatusBadgeProps) => {
  return (
    <span className={`px-2 py-1 rounded-full text-xs ${getStatusStyles(status)}`}>
      {text}
    </span>
  );
};

export default StatusBadge;
