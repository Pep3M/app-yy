import InputProposal from "./inputProposal"
import ListProposal from "./listProposal"

const Proposal = () => {
  return (
    <div className="flex flex-col gap-4 w-full items-center">
      <InputProposal />
      <ListProposal />
    </div>
  )
}
export default Proposal