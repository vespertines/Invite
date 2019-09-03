import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
    <div>
        <Header headerText="Header Text" />
        <div style={{ color: 'orange', fontSize: '70px' }}>Hello World!</div>
        <Link to="/invite">Invite</Link>
    </div>
)