import ColorItemResp from "./colorItemResp"

export type Evaluation = 'good' | 'regular' | 'bad'

export type EvaluatedItem = {
  count: number;
  evaluation: Evaluation;
}

type Props = {
  position: number;
  numb: number;
  evaluatedItems: EvaluatedItem[];
}

const ItemProposal = ({ position, numb, evaluatedItems }: Props) => {
  return (
    <div className="flex gap-6">
      <div className="flex text-xl text-gray-400">#{position}</div>
      <div className="flex text-xl font-semibold text-gray-600">{numb}</div>
      <div className="flex gap-2">
        {evaluatedItems.map((item, index) => (
          <ColorItemResp 
            key={index} 
            type={item.evaluation} 
            className={"flex items-center gap-1 text-sm font-semibold"}
            count={item.count}
          >
            <span>{item.count}</span>
            <span>{item.evaluation}</span>
          </ColorItemResp>
        ))}
      </div>
    </div>
  )
}
export default ItemProposal