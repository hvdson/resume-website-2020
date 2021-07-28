import React, { Component } from 'react';

class Resume extends Component {

  render() {

    if (this.props.data) {
      var education = this.props.data.education.map(function (education) {
        return <div key={education.school}><h3>{education.school}</h3>
          <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
          <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function (work) {
        return <div key={work.company}><h3>{work.company}</h3>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
          {/* <p>{work.description}</p> */}
          {parseBulletPoints(work.description)}
        </div>
      })
      var codingSkills = this.props.data.codingskills.map(function (skills) {
        var className = 'bar-expand ' + skills.name.toLowerCase();
        return <li key={skills.name}><span style={{ width: skills.level }} className={className}></span><em>{skills.name}</em></li>
      })

      var creativeSkills = this.props.data.creativeskills.map(function (skills) {
        var className = 'bar-expand ' + skills.name.toLowerCase();
        return <li key={skills.name}><span style={{ width: skills.level }} className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {education}
              </div>
            </div>
          </div>
        </div>


        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {work}
          </div>
        </div>



        <div className="row skill">
          <div className="five columns">
            <h1 className="skill-header"><span>Coding Skills</span></h1>
            <div className="bars">
              <ul className="skills">
                {codingSkills}
              </ul>
            </div>
          </div>

          <div className="five columns">
            <h1 className="skill-header"><span>Creative Skills</span></h1>
            <div className="bars">
              <ul className="skills">
                {creativeSkills}
              </ul>
            </div>
          </div>

        </div>
      </section>
    );
  }
}


function parseBulletPoints(str) {
  var pointList = str.split('\n');
  var points = pointList.map(function (point) {
    console.log(point)
    return (
      <div>
        <p id="bullet-points"><span>&bull;</span>{point}</p>
      </div>
    )
  })
  return points
}

export default Resume;
