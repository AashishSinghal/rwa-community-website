import React, { Component } from "react"
import "./teamMember.css"
import Thumbnail from "../images/team/game-cover.jpg"

import $ from "jquery"

class TeamMember extends Component {
  constructor() {
    super()
    this.state = {
      memberData: {
        aashish: {
          id: "000001",
          name: "XYZ",
          role: "wefw",
        },
      },
    }
  }

  //   getMemberData() {
  //     const load = document.getElementById("siteLoading")
  //     $.ajax({
  //       url: "/memberData.json",
  //       dataType: "json",
  //       cache: false,
  //       success: function (data) {
  //         this.setState({ resumeData: data })
  //         setTimeout(() => {
  //           load.outerHTML = ""
  //         }, 500)
  //       }.bind(this),
  //       error: function (xhr, status, err) {
  //         console.log(err)
  //         alert(err)
  //       },
  //     })
  //   }

  //   componentDidMount() {
  //     this.getMemberData()
  //   }

  render() {
    return (
      <div className="team-member">
        <div className="member">
          <div className="front">
            <img className="thumbnail" src={Thumbnail} alt="thubnail" />
            <h3 className="name icon">Member Name</h3>
            <div className="stats">
              <p className="viewers icon">5</p>
              <div className="socials">
                <a href="">
                  <i class="fab fa-github"></i>
                </a>
                <a href="">
                  <i class="fab fa-linkedin"></i>
                </a>
                <a href="">
                  <i class="fas fa-at"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="back">
            <div className="streaming-info" style={{ marginTop:`1rem`}}>
              <p className="member-stat">
                55<span>UpVotes</span>
              </p>
              <p className="member-stat">
                25<span>Contributions</span>
              </p>
            </div>
            <button className="btn">See more Info</button>
            <div className="socials">
              <div className="social">
                <div className="icon">
                  <a href="">
                    <i class="fab fa-github"></i>
                  </a>
                </div>
              </div>
              <div className="social">
                <div className="icon">
                  <a href="">
                    <i class="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="social">
                <div className="icon">
                  <a href="">
                    <i class="fas fa-at"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="background">
            <img src={Thumbnail} alt="" />
          </div>
        </div>
        <svg width="0" height="0" x="0px" y="0px">
          <defs>
            <clipPath id="wave" clipPathUnits="objectBoundingBox">
              <path
                d="M1.5,0H1H0.5H0v0.8C0.3,0.8,0.3,1,0.5,1c0,0,0,0,0,0C0.8,1,0.8,0.8,1,0.8c0,0,0,0,0,0C1.3,0.8,1.3,1,1.5,1
            C1.8,1,1.8,0.8,2,0.8V0H1.5z"
              />
              <animateTransform
                attributeType="XML"
                attributeName="transform"
                type="translate"
                from="0 0"
                to="-200 0"
                begin="0s"
                dur="10s"
                repeatCount="indefinite"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    )
  }
}

export default TeamMember
