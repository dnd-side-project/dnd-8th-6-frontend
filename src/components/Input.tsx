import { useEffect, useState } from "react";
import { Path, UseFormRegister } from "react-hook-form";

import { CT, T2 } from "./Text";

import ErrorIcon from "@/assets/input-error.svg";
import WarningIcon from "@/assets/input-warning.svg";
import SuccessIcon from "@/assets/input-success.svg";

export interface FormValuesProps {
  닉네임: string;
  이메일: string;
  소개글: string;
}

interface Props {
  label: Path<FormValuesProps>;
  register: UseFormRegister<FormValuesProps>;
  currentLength?: number;
  required?: boolean;
  placeholder?: string;
  isDisabled?: boolean;
  isWarning?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
}

const inputConfig = {
  error: "ring-inset ring-1 ring-system-error",
  warning: "ring-inset ring-1 ring-system-warning",
  success: "ring-inset ring-1 ring-system-success",
  default: "focus:ring-inset focus:ring-1 focus:ring-primary-400",
};

export const Input = ({
  label,
  register,
  required,
  placeholder = "",
  isDisabled,
  isWarning,
  isError,
  isSuccess,
}: Props) => {
  const [messageType, setMessageType] = useState<"success" | "warning" | "error" | "default">(
    "default",
  );

  useEffect(() => {
    switch (true) {
      case isSuccess:
        setMessageType("success");
        break;
      case isError:
        setMessageType("error");
        break;
      case isWarning:
        setMessageType("warning");
        break;
      default:
        setMessageType("default");
    }
  }, [isWarning, isError, isSuccess]);

  return (
    <div className={`flex flex-col gap-2 ${isDisabled ? "opacity-30" : null}`}>
      <label>
        <T2>{label}</T2>
      </label>
      <input
        placeholder={placeholder}
        disabled={isDisabled}
        {...register(label, { required })}
        className={`bg-tertiary-700 outline-none font-medium text-lg p-4 rounded-lg ${inputConfig[messageType]}`}
      />
      {messageType === "warning" && (
        <div className="flex gap-2 items-center">
          <WarningIcon />
          <CT className="text-system-warning">Warning</CT>
        </div>
      )}
      {messageType === "error" && (
        <div className="flex gap-2 items-center">
          <ErrorIcon />
          <CT className="text-system-error">Error</CT>
        </div>
      )}
      {messageType === "success" && (
        <div className="flex gap-2 items-center">
          <SuccessIcon />
          <CT className="text-system-success">Success</CT>
        </div>
      )}
    </div>
  );
};

export const Textfield = ({
  label,
  register,
  required,
  placeholder = "",
  isDisabled,
  isWarning,
  isError,
  isSuccess,
  currentLength,
}: Props) => {
  const [messageType, setMessageType] = useState<"success" | "warning" | "error" | "default">(
    "default",
  );

  useEffect(() => {
    switch (true) {
      case isSuccess:
        setMessageType("success");
        break;
      case isError:
        setMessageType("error");
        break;
      case isWarning:
        setMessageType("warning");
        break;
      default:
        setMessageType("default");
    }
  }, [isWarning, isError, isSuccess]);

  return (
    <div className={`flex flex-col gap-2 ${isDisabled ? "opacity-30" : null}`}>
      <label>
        <T2>{label}</T2>
      </label>
      <textarea
        placeholder={placeholder}
        disabled={isDisabled}
        maxLength={100}
        {...register(label, { required, maxLength: 100 })}
        className={`bg-tertiary-700 outline-none font-medium text-lg p-4 rounded-lg min-h-[144px] resize-none ${inputConfig[messageType]}`}
      />
      <div className="flex gap-2 items-center">
        {messageType === "warning" && (
          <>
            <WarningIcon />
            <CT className="text-system-warning">Warning</CT>
          </>
        )}
        {messageType === "error" && (
          <>
            <ErrorIcon />
            <CT className="text-system-error">Error</CT>
          </>
        )}
        {messageType === "success" && (
          <>
            <SuccessIcon />
            <CT className="text-system-success">Success</CT>
          </>
        )}
        <CT className="text-neutral-500">{currentLength}/100</CT>
      </div>
    </div>
  );
};
