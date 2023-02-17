interface Props {
  className?: string;
  children: React.ReactNode;
}

export const H1 = ({ children, className }: Props) => {
  return <h1 className={`font-bold text-2xl ${className}`}>{children}</h1>;
};

export const H2 = ({ children, className }: Props) => {
  return <h2 className={`font-medium text-xl ${className}`}>{children}</h2>;
};

export const H3 = ({ children, className }: Props) => {
  return <h3 className={`font-medium text-lg ${className}`}>{children}</h3>;
};

export const H4 = ({ children, className }: Props) => {
  return <h4 className={`font-medium text-base ${className}`}>{children}</h4>;
};

export const T1 = ({ children, className }: Props) => {
  return <span className={`font-normal text-base ${className}`}>{children}</span>;
};

export const T2 = ({ children, className }: Props) => {
  return <span className={`font-normal text-sm ${className}`}>{children}</span>;
};

export const BT = ({ children, className }: Props) => {
  return <span className={`font-medium text-base ${className}`}>{children}</span>;
};

export const CT = ({ children, className }: Props) => {
  return <span className={`font-medium text-sm ${className}`}>{children}</span>;
};
