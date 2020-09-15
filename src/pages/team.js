import React from "react"
import Layout from "../components/layout"
import TeamMember from "../components/teamMember"
import "./team.css"

const team = () => {
  return (
    <Layout>
      <div className="team">
        <h1 style={{ color: "white", marginBottom: "1.45rem" }}>
          This is our Awesome Team.
        </h1>
        <div className="team__container">
          <TeamMember />
          <TeamMember />
          <TeamMember />
          <TeamMember />
          <TeamMember />
          <TeamMember />
        </div>
        <div>
          <br />
          <br />
          <br />
        </div>
      </div>
    </Layout>
  )
}

export default team
