import React from "react";

function Work() {
  return (
    <>
    <div className="ds-work-section">
      <div className="container">
           <h2 className="ds-heading">Latest projects</h2>
           <div className="ds-work-list-section">
             <div className="ds-work-list">
               <div className="row">
                   <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                       <section>
                           <h3 className="ds-work-tilte">The Maramataka Journal</h3>
                           <p>The Maramataka is the Māori lunar calendar and the traditional Māori way of observing time by noting the movements of the moon.
														From the Maramataka,we can understand the rhythms, patterns and energies in our world based on the gravitational pull of the moon.
														Upon the initial render of the app, the user will be presented with todays date and moon phase. Additionally, 
														 the user is able to navigate to a specific date via the calendar, and/or browse days and their respective moon phase via the arrows. </p>
														 <h3 className="ds-heading">Technologies Used</h3>
														 <ul>
																	<li>NodeJS</li>
																	<li>React/React Router</li>
																	<li>Redux</li>
																	<li>SQL</li>
																	<li>API Client</li>
															</ul>
                           <a href="https://youtu.be/v3xF3z97G7g?t=277" className="ds-button">CHECKOUT MY LIVE DEMO <br></br> </a>
													 <br></br>
													 <a href="https://github.com/mako-goblin-2022/lunartics" className="ds-button">CHECKOUT THE REPO <br></br> </a>
											 </section>
											 <br></br> 
                   </div>
                   <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
                       <figure> <img src="../images/MTKA-APP2.PNG"/> </figure>
                   </div>
               </div>
             </div>
						 <div className="ds-work-list">
               <div className="row">
                   <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                       <section>
                           <h3 className="ds-work-tilte">Wordle Clone</h3>
                           <p>It's refeshing to see how such a simple game and concept could gather such a loyal following over the last couple of years, ever since I started coding I wanted to create my own version
														of the popular game. I was inspried by @PedroTech to give it a go, plus I think it's a good way to impress family and friends "hey everybody look at my Wordle you have unlimited tries!" </p>
														 <h3 className="ds-heading">Technologies Used</h3>
														 <ul>
																	<li>Node</li>
																	<li>React</li>
																	<li>Yarn</li>
															</ul>
                           <a href="https://jacktabronexe.github.io/Wordle_Clone_JT/" className="ds-button">VISIT WEBSITE <br></br> </a>
													 <br></br>
													 <a href="https://github.com/JackTabronEXE/Wordle_Clone_JT" className="ds-button">CHECKOUT THE REPO <br></br> </a>
											 </section>
											 <br></br> 
                   </div>
                   <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
                       <figure> <img src="images/wordle_project.PNG"/> </figure> <br></br>
											 <br></br>
                   </div>
               </div>
             </div>
           </div>
       </div>
    </div> 
    </>
  )
}

export default Work