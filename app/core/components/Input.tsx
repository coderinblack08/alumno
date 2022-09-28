import React from "react"
import cn from "classnames"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Input: React.FC<React.PropsWithChildren<InputProps>> = ({
  className,
  rightIcon,
  leftIcon,
  children,
  ...props
}) => {
  return (
    <div className="relative">
      <input
        className={cn(
          "px-3 py-2.5 w-full rounded-lg border border-slate-6 focus:outline-none focus:border-blue-6 focus:ring focus:ring-blue-4 leading-none placeholder:text-slate-8",
          { "pl-10": !!leftIcon },
          className
        )}
        {...props}
      />
      {leftIcon && (
        <div className="absolute inset-y-0 left-0 flex items-center mx-3 pointer-events-none text-slate-8">
          {leftIcon}
        </div>
      )}
    </div>
  )
}

export default Input
