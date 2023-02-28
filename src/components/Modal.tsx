import { useState } from "react";

import Button from "./Button";
import { T1, T2 } from "./Text";

interface Props {
  open: boolean;
  buttonType: "single" | "dual";
  title: string;
  description?: string;
  onButtonClick: () => void;
  onClose: () => void;
}

/**
 *
 * @param open 모달이 켜지고 꺼질 상태
 * @param buttonType "single" | "dual"
 * @param title 모달의 메인 텍스트
 * @param description 모달의 서브 텍스트
 * @param onButtonClick 모달 버튼을 눌렀을 때 실행할 함수
 * @param onClose 모달을 켜고 끄기위한 상태 변경 함수
 */
const Modal = ({
  open,
  buttonType = "single",
  title,
  description,
  onButtonClick,
  onClose,
}: Props) => {
  const onMaskClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!open) {
    return <></>;
  }

  return (
    <div
      className="flex items-center justify-center w-full h-screen bg-black/20"
      onClick={onMaskClick}
    >
      <div className="flex flex-col items-center w-[382px] bg-tertiary-700 px-4 pt-8 pb-4 rounded-2xl gap-8">
        <div className="flex flex-col items-center gap-2">
          <T1>{title}</T1>
          <T2 className="opacity-60">{description}</T2>
        </div>
        {buttonType === "single" ? (
          <Button type="primary" size="sm" onClick={onButtonClick}>
            확인
          </Button>
        ) : (
          <div className="flex w-full gap-2">
            <Button type="secondary" size="sm" onClick={onClose}>
              취소
            </Button>
            <Button type="primary" size="sm" onClick={onButtonClick}>
              확인
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
