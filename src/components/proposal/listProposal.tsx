import { getEvaluatedItems } from "./functions/proposalLogic";
import ItemProposal from "./itemProposal"

const rightNumber = 1624;

const numEx1 = 3492;
const numEx2 = 3241;
const numEx3 = 3452;

const proposalEx = [
  {
    numb: numEx1,
  },
  {
    numb: numEx2,
  },
  {
    numb: numEx3,
  },
]

const ListProposal = () => {
  return (
    <div>
      {proposalEx.map((item, index) => {
        const evaluatedItems = getEvaluatedItems(item.numb, rightNumber);
        return (
          <ItemProposal key={index} position={index + 1} numb={item.numb} evaluatedItems={evaluatedItems} />
        )
      })}
    </div>
  )
}
export default ListProposal