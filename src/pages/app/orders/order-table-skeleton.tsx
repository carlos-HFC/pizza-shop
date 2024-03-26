import { SearchIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { TableCell, TableRow } from "@/components/ui/table"

export function OrderTableSkeleton() {
  return Array.from({ length: 10 }).map((_, i) => (
    <TableRow key={i}>
      <TableCell>
        <Button
          disabled
          variant="outline"
          size="xs"
          aria-label="Detalhes do pedido"
        >
          <SearchIcon className="size-3" />
        </Button>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        <Skeleton className="h-4 w-[172px]" />
      </TableCell>
      <TableCell className="text-muted-foreground">
        <Skeleton className="h-4 w-[148px]" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-4 w-[110px]" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-4 w-[200px]" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-4 w-16" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-4 w-[92px]" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-4 w-[92px]" />
      </TableCell>
    </TableRow>
  ))
}
