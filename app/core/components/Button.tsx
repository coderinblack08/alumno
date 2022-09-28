import React from "react"
import cn from "classnames"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline" | "ghost"
  colorScheme?: "blue" | "gray"
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  size?: "sm" | "md" | "lg"
}

type NonNullable<T> = Exclude<T, null | undefined>

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  variant = "outline",
  colorScheme = "gray",
  className,
  rightIcon,
  leftIcon,
  children,
  size = "md",
  ...props
}) => {
  const variantToClasses: Record<
    `${NonNullable<ButtonProps["variant"]>}-${NonNullable<ButtonProps["colorScheme"]>}`,
    string
  > = {
    // @ts-ignore
    "solid-blue": "bg-blue-3 text-white",
    "outline-blue": "bg-white text-blue-11",
    "ghost-blue": "bg-white text-blue-11",
    "solid-gray": "bg-slate-3 text-white",
    "outline-gray": "bg-white border border-slate-6 focus:border-blue-6",
    "ghost-gray": "bg-white font-semibold text-slate-10",
  }

  return (
    <button
      className={cn(
        "transition flex items-stretch font-bold rounded-md leading-none select-none focus:outline-none focus:ring focus:ring-blue-4",
        variantToClasses[`${variant}-${colorScheme}`],
        className
      )}
      {...props}
    >
      <div
        className={cn("flex items-center justify-center", {
          "px-3 py-1.5": size === "sm",
          "px-4 py-2": size === "md",
          "px-5 py-2.5": size === "lg",
        })}
      >
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
      </div>

      {rightIcon && (
        <div className=" flex items-center justify-center px-2 bg-slate-3 rounded-md border-2 border-white">
          {rightIcon}
        </div>
      )}
    </button>
  )
}

export default Button
