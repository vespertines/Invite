import React from "React"
import { Link } from "gatsby"

export default () => (
    <nav>
      <Link to="/" activeClassName="active">
        Home
      </Link>
      <Link to="/invite/" activeStyle={{ color: "red" }}>
        Invite
      </Link>
    </nav>
)