import { BlitzPage } from "@blitzjs/next"
import Layout from "app/core/layouts/Layout"

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const Home: BlitzPage = () => {
  return (
    <Layout title="Home">
      <div className="container p-5 mx-auto">
        <h1>Login, Doofus</h1>

        <button>Link with GitHub</button>
      </div>
    </Layout>
  )
}

export default Home
