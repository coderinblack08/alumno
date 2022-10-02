import { BlitzLayout } from "@blitzjs/next"
import Head from "next/head"
import React from "react"
import SetTreeSidebar from "../components/sidebar/SetTreeSidebar"

const SideBySide: BlitzLayout<{ title?: string; children?: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex">
        <SetTreeSidebar />
        {children}
      </div>
    </>
  )
}

export default SideBySide
