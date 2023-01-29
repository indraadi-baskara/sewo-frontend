import clsx from "clsx";
import { ButtonHTMLAttributes, ReactElement, forwardRef } from "react";

import { Spinner } from "~/components/Elements";

const sizes = {
  small: "py-[5px] px-4",
  medium: "py-[9px] px-4",
  large: "py-[13px] px-6",
};

const variants = {
  primary: "text-primary-neutral-0 bg-brand-500",
  secondary:
    "border border-primary-neutral-200 text-primary-neutral-600 bg-primary-neutral-100",
  minimal: "text-primary-neutral-600 bg-primary-neutral-0",
};

const hovered = {
  primary: "hover:bg-brand-600",
  secondary: "hover:border-primary-neutral-400 hover:text-primary-neutral-800",
  minimal: "hover:text-primary-neutral-800 hover:bg-primary-neutral-100",
};

const pressed = {
  primary: "active:bg-brand-700",
  secondary:
    "active:border-primary-neutral-200 active:text-primary-neutral-800",
  minimal: "active:text-primary-neutral-800 active:bg-primary-neutral-100",
};

const focused = {
  primary: "focus:ring-brand-200",
  secondary: "focus:border-brand-100 focus:ring-brand-100",
  minimal: "focus:ring-brand-100",
};

type IconProps =
  | { startIcon: ReactElement; endIcon: ReactElement }
  | { startIcon: ReactElement; endIcon?: never }
  | { startIcon?: never; endIcon: ReactElement }
  | { startIcon?: undefined; endIcon?: undefined };

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  isLoading?: boolean;
} & IconProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = "button",
      className = "",
      variant = "primary",
      size = "small",
      isLoading = false,
      startIcon,
      endIcon,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={clsx(
          "flex items-center justify-center space-x-4 rounded-[5px] font-semibold focus:ring-1 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-40",
          sizes[size],
          variants[variant],
          hovered[variant],
          pressed[variant],
          focused[variant],
          className
        )}
        {...props}
      >
        {isLoading && (
          <Spinner
            size="sm"
            variant={variant === "primary" ? "light" : "primary"}
          />
        )}
        {!isLoading && startIcon}
        <span className="flex">{props.children}</span>
        {!isLoading && endIcon}
      </button>
    );
  }
);
