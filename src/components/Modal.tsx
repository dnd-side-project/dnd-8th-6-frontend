import Button from "./Button";
import { T1, T2 } from "./Text";

interface Props {
  isSingleButton?: boolean;
  title: string;
  description?: string;
  mainButtonText: string;
  subButtonText?: string;
  mainOnClick: () => void;
  subOnClick?: () => void;
}

const Modal = ({
  isSingleButton,
  title,
  description,
  mainButtonText,
  subButtonText,
  mainOnClick,
  subOnClick,
}: Props) => {
  if (!isSingleButton && !(subButtonText && subOnClick)) {
    throw new Error("버튼이 두개일 경우, subButtonText와 subOnClick이 필수입니다.");
  }

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex flex-col items-center w-[382px] bg-tertiary-700 px-4 pt-8 pb-4 rounded-2xl gap-8">
        <div className="flex flex-col items-center gap-2">
          <T1>{title}</T1>
          <T2 className="opacity-60">{description}</T2>
        </div>
        {isSingleButton ? (
          <Button type="primary" size="sm" onClick={mainOnClick}>
            {mainButtonText}
          </Button>
        ) : (
          subButtonText &&
          subOnClick && (
            <div className="flex w-full gap-2">
              <Button type="secondary" size="sm" onClick={subOnClick}>
                {subButtonText}
              </Button>
              <Button type="primary" size="sm" onClick={mainOnClick}>
                {mainButtonText}
              </Button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Modal;
