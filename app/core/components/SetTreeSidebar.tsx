import { useMutation } from "@blitzjs/rpc"
import {
  faCaretDown,
  faCaretRight,
  faKeyboard,
  faPalette,
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Field, Form, Formik } from "formik"
import React from "react"
import createSet from "../../sets/mutations/createSet"
import Button from "./Button"
import Input from "./Input"
import Modal from "./Modal"
import SetTree from "./SetTree"

interface SetTreeSidebarProps {}

const SetTreeSidebar: React.FC<SetTreeSidebarProps> = () => {
  const [createSetMutation] = useMutation(createSet)

  return (
    <div className="min-h-screen overflow-y-auto p-3 border-r border-slate-6 w-80">
      <div className="flex justify-between items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.png" alt="Alumno Logo" className="w-10 select-none" />
        {/* <button className="inline-flex items-center gap-4 justify-center text-slate-8 select-none">
          <IconLayoutSidebarLeftCollapse className="w-6 h-6" stroke={1.75} />
        </button> */}
      </div>
      <div className="mt-3 mb-2">
        <Input placeholder="Search" leftIcon={<FontAwesomeIcon icon={faSearch} />} />
      </div>
      <div className="space-y-1">
        <SetTree />
        <Modal
          trigger={
            <Button
              leftIcon={<FontAwesomeIcon icon={faPlus} fontSize="16px" className="w-[16px]" />}
              variant="ghost"
              className="w-full !justify-start"
              size="sm"
            >
              New Set
            </Button>
          }
        >
          <Formik
            initialValues={{ name: "" }}
            onSubmit={async (values) => {
              try {
                await createSetMutation(values)
              } catch (error) {
                alert("Error creating set")
              }
            }}
          >
            <Form className="space-y-2">
              <h1 className="font-bold">New Set</h1>
              <Field name="name" as={Input} placeholder="Name" />
              <Button type="submit" className="w-full" variant="solid" size="lg">
                Confirm
              </Button>
            </Form>
          </Formik>
        </Modal>
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
