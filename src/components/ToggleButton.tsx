import { useEffect, useState } from "react";

const Container = ({ isChecked, children }: { isChecked: boolean; children: React.ReactNode }) => {
  return (
    <div
      className={`relative w-[58px] h-8 p-1 rounded-full transition-all ${
        isChecked ? "bg-primary-400" : "bg-tertiary-500"
      }`}
    >
      {children}
    </div>
  );
};

const Switch = ({ isChecked, onClick }: { isChecked: boolean; onClick: () => void }) => {
  return (
    <div
      className={`absolute w-6 h-6 bg-neutral-0 rounded-full transition-all ${
        isChecked ? "left-[30px]" : "left-[4px]"
      }`}
      onClick={onClick}
    />
  );
};

/**
 *
 * @param handleToggleOn on일때 실행할 함수
 * @param handleToggleOff off일때 실행할 함수
 */
const ToggleButton = ({
  handleToggleOn,
  handleToggleOff,
}: {
  handleToggleOn: () => void;
  handleToggleOff: () => void;
}) => {
  const [isChecked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    if (isChecked) {
      handleToggleOn();
    } else {
      handleToggleOff();
    }
  }, [isChecked]);

  return (
    <Container isChecked={isChecked}>
      <Switch
        isChecked={isChecked}
        onClick={() => {
          setChecked((prev) => !prev);
        }}
      />
    </Container>
  );
};

export default ToggleButton;
