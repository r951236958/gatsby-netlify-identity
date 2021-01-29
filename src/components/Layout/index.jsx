import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Prism from "prismjs"

import Footer from "../Footer"
import Header from "../Header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="max-w-5xl pt-0 pb-6 px-4 my-0 mx-auto">
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout
