import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { Check } from "lucide-react"


const InputProposal = () => {
  return (
    <div className="flex flex-col gap-2">
      <InputOTP maxLength={4}>
        <InputOTPGroup className="flex gap-1 bg-gradient-to-tl from-blue-200 to-purple-50">
          <InputOTPSlot className="border-l-[1px] border-blue-700 text-blue-800 font-semibold text-3xl" index={0} />
          <InputOTPSlot className="border-l-[1px] border-blue-700 text-blue-800 font-semibold text-3xl" index={1} />
          <InputOTPSlot className="border-l-[1px] border-blue-700 text-blue-800 font-semibold text-3xl" index={2} />
          <InputOTPSlot className="border-l-[1px] border-blue-700 text-blue-800 font-semibold text-3xl" index={3} />
        </InputOTPGroup>
      </InputOTP>

      <button className="w-full bg-blue-500 text-white font-semibold rounded-md p-2 flex gap-2 items-center justify-center hover:bg-blue-600 duration-75 active:scale-[0.99] active:bg-blue-700">
        <Check size={16} opacity={0}/>
        <span>Check</span>
        <Check size={16} />
      </button>
    </div>
  )
}
export default InputProposal