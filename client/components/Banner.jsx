import React from 'react'

function Banner() {
return (
<>
<div id="app"></div>
  <div className="ds-banner">
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
          <figure>
            <div>
            <img src="../images/ezgif.com-gif-maker.gif"/>
            </div>
          </figure>
          </div>
        <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
          <section>
              <h1>
                <span>HI THERE</span>
                I’m Jack Tabron, <br/> Junior developer based in Auckland.
              </h1>
              <ul className="ds-numbervalulist">
                <li>
                  <strong>0</strong>
                  <span>Experience</span>
                </li>
                <li>
                  <strong>0</strong>
                  <span>Skill</span>
                </li>
                <li>
                  <strong>7</strong>
                  <span>cannot /GET</span>
                </li>
              </ul>
          </section>
    </div>
    </div>
    </div>
    </div>

</>
)
}

export default Banner