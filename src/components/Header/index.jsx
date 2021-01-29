import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <div className="bg-blue-600 bg-opacity-30">
    <header className="bg-gray-800 bg-opacity-30 mb-8">
      <div className="max-w-5xl py-6 px-4 my-0 mx-auto">
        <h1 className="m-0">
          <Link
            className="bg-clip-text text-transparent bg-gradient-to-b from-gray-700 via-gray-200 to-gray-600 text-4xl font-black"
            to="/"
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
