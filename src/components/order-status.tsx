import clsx from "clsx"

type OrderStatus =
  | "pending"
  | "canceled"
  | "processing"
  | "delivering"
  | "delivered"

interface OrderStatusProps {
  status: OrderStatus
}

const orderStatusMap: Record<OrderStatus, string> = {
  canceled: "Cancelado",
  delivered: "Entregue",
  delivering: "Em entrega",
  pending: "Pendente",
  processing: "Em preparo",
}

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={clsx(
          "size-2 rounded-full",
          status === "canceled" && "bg-rose-500",
          status === "pending" && "bg-slate-400",
          status === "delivered" && "bg-emerald-500",
          ["processing", "delivering"].includes(status) && "bg-amber-500",
        )}
      />
      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status]}
      </span>
    </div>
  )
}
