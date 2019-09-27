import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div>
    <Header headerText="Header" />
    <Header randomText="Random" />
    <Link to="/account/">Go to your account</Link>
  </div>
)