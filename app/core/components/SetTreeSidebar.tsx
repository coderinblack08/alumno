import { faBars, faKeyboard, faPalette, faPlus, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import Button from "./Button"
import Input from "./Input"

interface SetTreeSidebarProps {}

const SetTreeSidebar: React.FC<SetTreeSidebarProps> = () => {
  return (
    <div className="min-h-screen overflow-y-auto p-4 border-r border-slate-6 w-80">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <div className="flex justify-between items-end">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.png" alt="Alumno Logo" className="w-10 select-none" />
        <button className="inline-flex items-center gap-4 justify-center text-slate-10 select-none">
          <FontAwesomeIcon icon={faBars} />
          <kbd className="px-2.5 py-0.5 rounded-lg border border-slate-6 font-semibold">⌘+K</kbd>
        </button>
      </div>
      <div className="my-2.5">
        <Input placeholder="Search" leftIcon={<FontAwesomeIcon icon={faSearch} />} />
      </div>
      <div className="space-y-1.5">
        <Button
          leftIcon={<FontAwesomeIcon icon={faPlus} fontSize="15px" />}
          variant="ghost"
          className="w-full"
          size="sm"
        >
          New Set
        </Button>
        <Button
          leftIcon={<FontAwesomeIcon icon={faPalette} fontSize="15px" />}
          variant="ghost"
          className="w-full"
          size="sm"
        >
          Customize Theme
        </Button>
        <Button
          leftIcon={<FontAwesomeIcon icon={faKeyboard} fontSize="15px" />}
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
