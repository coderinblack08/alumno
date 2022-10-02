import { Transition } from "@headlessui/react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import cx from "classnames"
import React, { Fragment, useState } from "react"

interface Props {
  trigger: React.ReactNode
  setIsOpen?: (isOpen: boolean) => void
  isOpen?: boolean
}

const Dialog = ({ children, isOpen, setIsOpen, trigger }: React.PropsWithChildren<Props>) => {
  let [isInternalOpen, setIsInternalOpen] = useState(false)

  if (!isOpen && !setIsOpen) {
    isOpen ??= isInternalOpen
    setIsOpen ??= setIsInternalOpen
  }

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
      <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>
      <Transition.Root show={isOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <DialogPrimitive.Overlay forceMount className="fixed inset-0 z-20 bg-black/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <DialogPrimitive.Content
            forceMount
            className={cx(
              "fixed z-50",
              "w-[95vw] max-w-md rounded-lg p-4 md:w-full",
              "top-[20%] left-[50%] -translate-x-[50%] -translate-y-[50%]",
              "bg-white"
            )}
          >
            {children}
            <DialogPrimitive.Close
              className={cx(
                "absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1",
                "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
              )}
            ></DialogPrimitive.Close>
          </DialogPrimitive.Content>
        </Transition.Child>
      </Transition.Root>
    </DialogPrimitive.Root>
  )
}

export default Dialog
