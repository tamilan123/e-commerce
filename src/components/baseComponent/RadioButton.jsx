import React from "react";
import { useRadio, VisuallyHidden, cn } from "@nextui-org/react";


export const CustomRadio = (props) => {
  const {
    Component,
    children,
    // isSelected,
    getBaseProps,
    getWrapperProps,
    getInputProps,
    getLabelProps,
    // getLabelWrapperProps,
    getControlProps,
  } = useRadio(props);

  return (
    <Component
      {...getBaseProps()}
      className={cn(
        "group inline-flex items-center hover:opacity-70 active:opacity-50 tap-highlight-transparent",
        "min-w-[55px] flex justify-center cursor-pointer border-2 border-default rounded-lg gap-4 p-3",
        "data-[selected=true]:border-gray-800",
      )}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <VisuallyHidden>
        <span {...getWrapperProps()}>
          <span {...getControlProps()} />
        </span>
      </VisuallyHidden>

      <div className="flex justify-center m-0">
        {children && <span {...getLabelProps()}>{children}</span>}
      </div>
    </Component>
  );
};

