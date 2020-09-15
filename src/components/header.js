import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    className="header"
    style={{
      display: "flex",
      background: `#161616`,
      alignItems: "center",
      marginBottom: '1.45rem'
    }}
  >
    <div
      style={{
        margin: `0 auto 0 3rem`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>

    <div
      className="nav-item"
      style={{
        margin: `0 3rem 0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        alignItems: 'center'
      }}
    >
      <h3 style={{ margin: 0 }}>
        <Link
          to="/team"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Team
        </Link>
      </h3>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
