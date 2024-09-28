import { useState } from "react"
import BoxDigit from "./boxDigit"
import { generateRandomNumber } from "@/lib/math"

const Boxes = () => {
  const [show] = useState(true)
  const [secretDigits] = useState<number[]>(generateRandomNumber())
  
  return (
    <div className="flex gap-1">
      {secretDigits.map((digit, index) => (
        <BoxDigit key={`box-index-${index}`} digit={digit} isShow={show} />
      ))}  
    </div>
  )
}
export default Boxes