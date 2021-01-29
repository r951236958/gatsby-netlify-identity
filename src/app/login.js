import React from "react"
import { navigate } from "gatsby"

import {
  IdentityModal,
  //  useIdentityContext,
} from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css" // delete if you want to bring your own CSS

function Login() {
  // const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)

  return (
    <>
      <h1>Log in</h1>
      <button
        className="leading-relaxed font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline text-sm mx-2 mb-2  rounded-md border-teal-400 text-teal-400 hover:bg-teal-600 hover:bg-opacity-10 hover:border-teal-500 hover:text-white py-2 px-3"
        onClick={() => setDialog(true)}
      >
        log in
      </button>

      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
        onLogin={user => navigate("/app/profile")}
        onSignup={user => navigate("/app/profile")}
      />
    </>
  )
}

export default Login
