import { faKeyboard, faPalette, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import Button from "../Button"
import Input from "../Input"
import CreateSetModal from "./CreateSetModal"
import DraggableSetTree from "./DraggableSetTree"

interface SetTreeSidebarProps {}

const SetTreeSidebar: React.FC<SetTreeSidebarProps> = () => {
  return (
    <div className="min-h-screen overflow-y-auto p-3 border-r border-slate-6 w-80">
      <div className="flex justify-between items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.png" alt="Alumno Logo" className="w-10 select-none" />
      </div>
      <div className="mt-3 mb-2">
        <Input placeholder="Search" leftIcon={<FontAwesomeIcon icon={faSearch} />} />
      </div>
      <div className="space-y-1">
        <DraggableSetTree />
        <CreateSetModal />
        <Button
          leftIcon={<FontAwesomeIcon icon={faPalette} fontSize="16px" className="w-[16px]" />}
          variant="ghost"
          className="w-full !justify-start"
          size="sm"
        >
          Customize Theme
        </Button>
        <Button
          leftIcon={<FontAwesomeIcon icon={faKeyboard} fontSize="16px" className="w-[16px]" />}
          variant="ghost"
          className="w-full !justify-start"
          size="sm"
        >
          Markdown Cheatsheet
        </Button>
      </div>
    </div>
  )
}

export default SetTreeSidebar
