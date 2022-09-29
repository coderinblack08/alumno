import {
  faCaretDown,
  faCaretRight,
  faKeyboard,
  faPalette,
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import Button from "./Button"
import Input from "./Input"
import Modal from "./Modal"

interface SetTreeSidebarProps {}

const SetTreeSidebar: React.FC<SetTreeSidebarProps> = () => {
  return (
    <div className="min-h-screen overflow-y-auto p-2.5 border-r border-slate-6 w-80">
      <div className="flex justify-between items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.png" alt="Alumno Logo" className="w-10 select-none" />
        {/* <button className="inline-flex items-center gap-4 justify-center text-slate-8 select-none">
          <IconLayoutSidebarLeftCollapse className="w-6 h-6" stroke={1.75} />
        </button> */}
      </div>
      <div className="my-2.5">
        <Input placeholder="Search" leftIcon={<FontAwesomeIcon icon={faSearch} />} />
      </div>
      <div className="space-y-1">
        <Button
          as="div"
          role="button"
          tabIndex={0}
          leftIcon={
            <button
              onClick={(e) => e.stopPropagation()}
              className="focus:ring focus:outline-none rounded focus:ring-blue-4"
              suppressHydrationWarning
            >
              <FontAwesomeIcon icon={faCaretRight} fontSize="16px" className="w-[16px]" />
            </button>
          }
          className="w-full"
          variant="ghost"
          size="sm"
        >
          Notebook #1
        </Button>
        <Modal
          trigger={
            <Button
              leftIcon={<FontAwesomeIcon icon={faPlus} fontSize="16px" className="w-[16px]" />}
              variant="ghost"
              className="w-full"
              size="sm"
            >
              New Set
            </Button>
          }
        ></Modal>
        <Button
          leftIcon={<FontAwesomeIcon icon={faPalette} fontSize="16px" className="w-[16px]" />}
          variant="ghost"
          className="w-full"
          size="sm"
        >
          Customize Theme
        </Button>
        <Button
          leftIcon={<FontAwesomeIcon icon={faKeyboard} fontSize="16px" className="w-[16px]" />}
          variant="ghost"
          className="w-full"
          size="sm"
        >
          Markdown Cheatsheet
        </Button>
      </div>
    </div>
  )
}

export default SetTreeSidebar
