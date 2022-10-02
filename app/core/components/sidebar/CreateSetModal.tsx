import { setQueryData, useMutation } from "@blitzjs/rpc"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Formik, Form, Field } from "formik"
import React from "react"
import createSet from "../../../sets/mutations/createSet"
import getSets from "../../../sets/queries/getSets"
import Button from "../Button"
import Input from "../Input"
import Modal from "../Modal"

interface CreateSetModalProps {}

const CreateSetModal: React.FC<CreateSetModalProps> = () => {
  const [createSetMutation, { isLoading }] = useMutation(createSet)
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
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
            const set = await createSetMutation(values)
            await setQueryData(getSets, {}, (old) => {
              if (old) {
                const x = (old.sets || []).concat(set)
                return Object.assign(old, { sets: x })
              }
              return undefined as any
            })
            setIsOpen(false)
          } catch (error) {
            console.error(error)
            alert("Error creating set")
          }
        }}
      >
        <Form className="space-y-2">
          <h1 className="font-bold">New Set</h1>
          <Field name="name" as={Input} placeholder="Name" />
          <Button type="submit" className="w-full" variant="solid" size="lg" disabled={isLoading}>
            Confirm
          </Button>
        </Form>
      </Formik>
    </Modal>
  )
}

export default CreateSetModal
