import { UserRoundSearch } from "lucide-react"
import HeaderSubtitle from "./components/heading/headerSubtitle"
import HeaderTitle from "./components/heading/headerTitle"
import Boxes from "./components/boxes/boxes"
import Proposal from "./components/proposal/proposal"

function App() {
  return (
    <div className="flex flex-col p-8 gap-4 items-center justify-start w-screen h-screen overflow-hidden">
      {/* Heading */}
      <div className="flex flex-col gap-4 w-full max-w-md text-center items-center relative">
        <div className="p-5 rounded-full bg-blue-200">
          <UserRoundSearch size={100} />
        </div>
        <div className="p-5 rounded-full bg-blue-200 absolute animate-ping opacity-10">
          <UserRoundSearch size={100} className="opacity-0" />
        </div>
        <HeaderTitle />
        <HeaderSubtitle />
      </div>

      {/* boxes */}
      <Boxes />

      {/* proposal */}
      <Proposal />
    </div>
  )
}

export default App
