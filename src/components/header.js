import React from "react"
import SiteNavigation from "../components/nav"

export default props => (
  <div>
    <SiteNavigation></SiteNavigation>
    <h1>{props.headerText}</h1>
    <h2>{props.randomText}</h2>
  </div>
)