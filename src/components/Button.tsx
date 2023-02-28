import { BT } from "./Text";

interface Props {
  type?: "primary" | "secondary";
  size?: "lg" | "sm";
  disabled?: boolean;
  onClick: (e: React.MouseEvent) => void;
  children: string;
}

const buttonConfig = {
  // Colors
  primary: {
    bgColor: "bg-primary-400 hover:bg-primary-200 active:bg-primary-600 disabled:bg-tertiary-700",
    color: "text-neutral-0",
  },
  secondary: {
    bgColor: "bg-neutral-500 hover:bg-neutral-300 active:bg-neutral-700",
    color: "text-neutral-900",
  },

  // Sizes
  lg: "h-14 w-full rounded-2xl",
  sm: "h-11 w-full rounded-lg",
};

const Button = ({ type = "primary", size = "lg", disabled, onClick, children }: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex justify-center items-center disabled:opacity-30 ${buttonConfig[type].bgColor} ${buttonConfig[type].color} ${buttonConfig[size]}`}
    >
      <BT>{children}</BT>
    </button>
  );
};

export default Button;
