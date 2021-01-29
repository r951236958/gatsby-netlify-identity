import React from "react"
import { Link, navigate } from "gatsby"

import { useIdentityContext } from "react-netlify-identity-widget"

export default () => {
  const { user, isLoggedIn, logoutUser } = useIdentityContext()
  let message = isLoggedIn
    ? `Hello, ${user.user_metadata && user.user_metadata.full_name}`
    : "You are not logged in"

  return (
    <div className="flex flex-1 justify-between items-center bg-gray-400 bg-opacity-20 round-md p-2">
      <span className="bg-gray-600 text-sm font-bold p-2 rounded-lg">
        {message}
      </span>

      <nav>
        <span>Navigate the app: </span>
        <Link
          className="border-b-2 border-gray-400 hover:text-gray-400 mx-1"
          to="/app/"
        >
          Main
        </Link>
        {` `}
        <Link
          className="border-b-2 border-gray-400 hover:text-gray-400 mx-1"
          to="/app/profile"
        >
          Profile
        </Link>
        {` `}
        {isLoggedIn ? (
          <a
            className="border-b-2 border-pink-400 hover:text-pink-400 mx-1"
            href="/"
            onClick={async event => {
              event.preventDefault()
              await logoutUser()
              navigate(`/app/login`)
            }}
          >
            Logout
          </a>
        ) : (
          <Link
            className="border-b-2 border-blue-400 hover:text-blue-400 mx-1"
            to="/app/login"
          >
            Login
          </Link>
        )}
      </nav>
    </div>
  )
}
