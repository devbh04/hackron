'use client'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectTier() {

  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select Tier of the City" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Urban</SelectItem>
        <SelectItem value="dark">Suburban</SelectItem>
        <SelectItem value="system">Rural</SelectItem>
      </SelectContent>
    </Select>

  )
}
