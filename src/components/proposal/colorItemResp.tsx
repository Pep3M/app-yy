import { cn } from "@/lib/utils";

const colors = {
  good: 'text-green-600',
  regular: 'text-yellow-600',
  bad: 'text-red-600'
}

type Props = {
  type: 'good' | 'regular' | 'bad';
  children: React.ReactNode;
  className: string;
  count: number;
}

const ColorItemResp = ({ type, children, className, count }: Props) => {
  if (!count) return null;

  return (
    <div className={cn(colors[type], className)}>
      {children}
    </div>
  )
}
export default ColorItemResp