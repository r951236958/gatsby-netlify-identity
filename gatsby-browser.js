import "prismjs/themes/prism-okaidia.css"
import "./src/styles/global.css"
import "./src/styles/global.scss"
import "@reach/menu-button/styles.css"
import "@reach/dialog/styles.css"
import "@reach/tabs/styles.css"

import React from "react"
import { IdentityContextProvider } from "react-netlify-identity-widget"

export const wrapRootElement = ({ element }) => {
  const url =
    process.env.GATSBY_NETLIFY_IDENTITY_URL || "url here for running locally" // should look something like "https://foo.netlify.com"
  if (!url)
    throw new Error(
      "process.env.GATSBY_NETLIFY_IDENTITY_URL is blank2, which means you probably forgot to set it in your Netlify environment variables"
    )

  return <IdentityContextProvider url={url}>{element}</IdentityContextProvider>
}
