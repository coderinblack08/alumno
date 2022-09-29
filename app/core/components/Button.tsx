import React from "react"
import type * as Polymorphic from "@radix-ui/react-polymorphic"
import cn from "classnames"

type PolymorphicBox = Polymorphic.ForwardRefComponent<"div", {}>

const Box = React.forwardRef(({ as: Comp = "div", ...props }, forwardedRef) => (
  <Comp {...props} ref={forwardedRef} />
)) as PolymorphicBox

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline" | "ghost"
  colorScheme?: "blue" | "gray"
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  size?: "sm" | "md" | "lg"
  leftBorder?: boolean
  as?: React.ElementType
}

type NonNullable<T> = Exclude<T, null | undefined>

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  variant = "outline",
  colorScheme = "gray",
  className,
  rightIcon,
  leftIcon,
  children,
  leftBorder,
  size = "md",
  as = "button",
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
    "solid-gray": "bg-slate-3 text-slate-10",
    "outline-gray": "bg-white border border-slate-6 focus:border-blue-6",
    "ghost-gray": "bg-white font-semibold text-slate-9",
  }

  const vc = `${variant}-${colorScheme}`

  return (
    <Box
      as={as}
      className={cn(
        "transition flex items-stretch font-bold rounded-md leading-none select-none focus:outline-none focus:ring focus:ring-blue-4",
        variantToClasses[vc],
        className
      )}
      {...(props as any)}
    >
      <div
        className={cn("flex items-center justify-center", {
          "px-3 py-2": size === "sm",
          "px-4 py-2": size === "md",
          "px-5 py-2.5": size === "lg",
          "py-0 overflow-auto": leftBorder,
        })}
      >
        {leftBorder && <div className="h-full w-[1px] bg-slate-6 mx-3" />}
        <div
          className={cn({
            "py-2": leftBorder,
          })}
        >
          {leftIcon && <span className="mr-2">{leftIcon}</span>}
          {children}
        </div>
      </div>

      {rightIcon && (
        <div
          className={cn("flex items-center justify-center px-2 rounded-md border-2", {
            "border-white bg-slate-3": vc === "outline-gray",
            "border-slate-3 bg-slate-5": vc === "solid-gray",
          })}
        >
          {rightIcon}
        </div>
      )}
    </Box>
  )
}

export default Button
