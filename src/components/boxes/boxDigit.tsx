import { cn } from "@/lib/utils"

type Props = {
  digit: number
  isShow?: boolean
}

const BoxDigit = ({ digit, isShow }: Props) => {
  return (
    <div className={cn(
      "w-16 h-16 bg-blue-400 flex items-center justify-center rounded-md text-white text-3xl font-semibold transition-all duration-700",
      isShow ? "bg-blue-600 text-opacity-100" : "bg-blue-400 text-opacity-0"
    )}>
      {digit}
    </div>
  )
}
export default BoxDigit