import { useQuery } from "@blitzjs/rpc"
import { faCaretRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "../Button"

import React from "react"
import getSets from "../../../sets/queries/getSets"

interface DraggableSetTreeProps {}

const DraggableSetTree: React.FC<DraggableSetTreeProps> = () => {
  const [data] = useQuery(getSets, {}, { suspense: false })

  return (
    <div className="space-y-1">
      {data?.sets.map((set) => (
        <Button
          key={set.id}
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
          className="w-full !justify-start"
          variant="ghost"
          size="sm"
        >
          {set.name}
        </Button>
      ))}
    </div>
  )
}

export default DraggableSetTree
