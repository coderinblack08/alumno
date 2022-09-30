import { BlitzPage } from "@blitzjs/next"
import { IconChevronDown, IconChevronLeft, IconChevronRight } from "@tabler/icons"
import Card from "../app/cards/components/Card"
import Button from "../app/core/components/Button"
import SideBySide from "../app/core/layouts/SideBySide"

const App: BlitzPage = () => {
  return (
    <SideBySide title="Alumno ">
      <main className="mx-auto max-w-3xl w-full px-5">
        <div className="py-[4.5rem] border-b border-slate-6">
          <h1 className="text-xl font-bold">Getting Started With Alumno</h1>
          <div className="flex items-center gap-4 text-slate-10 mt-2">
            <a className="ring-gray" href="#">
              Mastered <span className="underline decoration-slate-6">8/10</span>
            </a>{" "}
            <a className="ring-gray" href="#">
              Still Learning <span className="underline decoration-slate-6">0/10</span>{" "}
            </a>{" "}
            <a className="ring-gray" href="#">
              To-go <span className="underline decoration-slate-6">2/10</span>
            </a>
          </div>
          <div className="flex items-center gap-3 mt-4">
            <Button
              colorScheme="blue"
              variant="solid"
              size="lg"
              rightIcon={<IconChevronDown className="w-5 h-5" />}
            >
              Quickly, Study!
            </Button>
            <Button colorScheme="blue" variant="solid" size="lg">
              Test me.
            </Button>
            <Button colorScheme="blue" variant="solid" size="lg">
              Share set.
            </Button>
          </div>
        </div>
        <div className="py-5">
          <div className="flex items-center gap-3 mb-5">
            <Button size="lg">Edit Mode Off</Button>
            <Button size="lg">1-by-1 View</Button>
            <Button variant="solid" size="lg" rightIcon={<IconChevronDown className="w-5 h-5" />}>
              New Card
            </Button>
          </div>

          <Card />

          <div className="flex items-center justify-center gap-2 mt-5">
            <button className="border border-slate-6 rounded-lg p-0.5">
              <IconChevronLeft className="w-4 h-4 text-slate-8" />
            </button>
            <span className="text-slate-10 font-bold text-sm">1 / 10</span>
            <button className="border border-slate-6 rounded-lg p-0.5">
              <IconChevronRight className="w-4 h-4 text-slate-8" />
            </button>
          </div>
        </div>
      </main>
    </SideBySide>
  )
}

export default App
