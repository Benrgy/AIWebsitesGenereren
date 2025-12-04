import { Badge } from "@/components/ui/badge";
import { Loader2, CheckCircle2, XCircle, Clock } from "lucide-react";

interface StatusBadgeProps {
  status: string;
  showIcon?: boolean;
}

export const StatusBadge = ({ status, showIcon = true }: StatusBadgeProps) => {
  const getStatusConfig = (status: string) => {
    switch (status.toLowerCase()) {
      case "success":
        return {
          variant: "default" as const,
          icon: <CheckCircle2 className="h-3 w-3" />,
          label: "Succesvol",
        };
      case "pending":
        return {
          variant: "secondary" as const,
          icon: <Clock className="h-3 w-3" />,
          label: "Wachtend",
        };
      case "generating":
        return {
          variant: "secondary" as const,
          icon: <Loader2 className="h-3 w-3 animate-spin" />,
          label: "Genereren",
        };
      case "ready":
        return {
          variant: "secondary" as const,
          icon: <Clock className="h-3 w-3" />,
          label: "Klaar",
        };
      case "submitted":
        return {
          variant: "secondary" as const,
          icon: <Loader2 className="h-3 w-3 animate-spin" />,
          label: "Bouwen",
        };
      case "failed":
        return {
          variant: "destructive" as const,
          icon: <XCircle className="h-3 w-3" />,
          label: "Mislukt",
        };
      default:
        return {
          variant: "outline" as const,
          icon: <Clock className="h-3 w-3" />,
          label: status,
        };
    }
  };

  const config = getStatusConfig(status);

  return (
    <Badge variant={config.variant} className="gap-1">
      {showIcon && config.icon}
      {config.label}
    </Badge>
  );
};
