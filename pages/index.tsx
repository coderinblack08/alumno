import { useRedirectAuthenticated } from "@blitzjs/auth"
import { BlitzPage } from "@blitzjs/next"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "app/core/components/Button"
import Layout from "app/core/layouts/Layout"

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const Home: BlitzPage = () => {
  useRedirectAuthenticated("/app")

  return (
    <Layout title="Home">
      <div className="p-5 mx-auto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.png" alt="Alumno Logo" className="w-12 mb-4 select-none" />
        <h1 className="mb-2 font-bold text-lg">Hi, Alumno!</h1>
        <ul className="list-disc pl-5 mb-4 text-slate-11">
          <li>Free to use, forever</li>
          <li>Study and sync across all your devices</li>
          <li>Large feature-set for your flashcard needs</li>
        </ul>
        <a href="/api/auth/github">
          <Button leftIcon={<FontAwesomeIcon icon={faGithub} />}>Link with GitHub</Button>
        </a>
      </div>
    </Layout>
  )
}

export default Home
