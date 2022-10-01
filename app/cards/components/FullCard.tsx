import React from "react"
import ReactCardFlip from "react-card-flip"

interface CardFaceProps {
  front?: boolean
  back?: boolean
  content: string
}

const CardFace: React.FC<CardFaceProps> = ({ front, back, content }) => {
  return (
    <article className="w-full relative flex items-center justify-center text-slate-11 text-lg border border-slate-6 rounded-lg p-5 h-56">
      <div className="absolute inset-x-2 top-2 flex items-center justify-between select-none">
        <span className="bg-slate-3 text-slate-9 rounded-lg py-0.5 px-2.5 text-sm font-bold">
          {front ? "Term" : ""}
          {back ? "Definition" : ""}
        </span>
        <span className="text-sm text-slate-9">Click To Flipover</span>
      </div>
      {content}
    </article>
  )
}

const FullCard: React.FC = () => {
  const [isFlipped, setIsFlipped] = React.useState(false)

  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipDirection="vertical"
      flipSpeedBackToFront={0.4}
      flipSpeedFrontToBack={0.4}
    >
      <div onClick={() => setIsFlipped(true)}>
        <CardFace content="The formula used to derive the value of x in quadratics" front />
      </div>
      <div onClick={() => setIsFlipped(false)}>
        <CardFace content="x = [-b +/- sqrt(b^2 - 4ac)]/2a" back />
      </div>
    </ReactCardFlip>
  )
}

export default FullCard
