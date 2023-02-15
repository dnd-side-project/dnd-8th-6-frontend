import { BT } from "./Text";

interface Props {
  text: string;
  onClick?: () => void;
}

const Button = ({ text, onClick }: Props) => {
  return (
    <button onClick={onClick} className="flex justify-center items-center h-14 w-full rounded-2xl">
      <BT>{text}</BT>
    </button>
  );
};

export default Button;
