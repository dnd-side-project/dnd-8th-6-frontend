import { T1 } from "./Text";

interface ContentProps {
  onClick: () => void;
  children: React.ReactNode;
}

interface ContentListProps {
  children: React.ReactNode;
}

export const Content = ({ onClick, children }: ContentProps) => {
  return (
    <div onClick={onClick} className="flex items-center h-14 py-4 px-6 bg-slate-500">
      {/* NOTE: 색상이 확정되지 않아 임의로 slate bg 삽입  */}
      <T1>{children}</T1>
    </div>
  );
};

export const ContentList = ({ children }: ContentListProps) => {
  return <div className="flex flex-col w-full rounded-2xl overflow-hidden">{children}</div>;
};
