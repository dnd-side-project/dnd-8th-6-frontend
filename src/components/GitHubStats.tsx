import { H1, H4 } from "./Text";

interface Props {
  title: string;
  value: string;
}

export const Card = ({ title, value }: Props) => {
  return (
    <div className="flex flex-col shrink-0 w-36 h-[9.5rem] p-4 bg-tertiary-700 text-neutral-0 rounded-2xl gap-4">
      <div className="w-10 h-10 rounded-full bg-neutral-0" />
      {/* NOTE: 아이콘이 확정되지 않아 임시로 white div 삽입  */}
      <div className="gap-2">
        <H4 className="opacity-50">{title}</H4>
        <H1>{value}</H1>
      </div>
    </div>
  );
};

export const CardList = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex gap-4 overflow-x-scroll no-scrollbar">{children}</div>;
};
