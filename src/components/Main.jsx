import React from 'react'
import './Main.css'
import rectangle from '../images/rectangle.png'

const Main = () => {
  return (
    <main>
      <div className='containerMain'>
        <div className='mainContent'>
          <h1>Hi, I'm Rafa Agusta</h1>
          <h3>SMK Letris Indonesia 2 <span>Student</span></h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo blanditiis suscipit alias illum tempore cumque officiis voluptas harum nihil, voluptates impedit sapiente molestiae sit quia et quaerat.</p>
          <div className="btn-box">
            <a href="#">Hire Me</a>
            <a href="#">Let's Talk</a>
          </div>
        </div>
        <div className="main-sci">
          <a href="#"><i class='bx bxl-linkedin'></i></a>
          <a href="#"><i class='bx bxl-twitter' ></i></a>
          <a href="https://www.instagram.com/rapp.raph/"><i class='bx bxl-instagram' ></i></a>
        </div>
      </div>

      <div className="containerAbout">
          <h2 className='heading'>About <span>Me</span></h2>
        <div className="about-img">
          <img src={rectangle} alt="" />
          <span className="circle"></span>
        </div>

        <div className="aboutContent">
          <h3>Rafa Agusta</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestias dolorum ab beatae, molestiae fugiat esse quibusdam natus enim, reiciendis quidem ex? Itaque laborum illum voluptatibus incidunt. Optio labore tenetur recusandae. Dignissimos enim sapiente reiciendis nihil, animi voluptate, mollitia impedit id iusto quaerat aspernatur unde dolore. Aut suscipit voluptates rerum?</p>

          <div className='btn-box btns'>
            <a href="#" className='btn'>Read More</a>
          </div>
        </div>
      </div>

      <div className="containerEdu">
        <h2 className="heading">My <span>Journey</span></h2>

        <div className="education-row">
          <div className="education-column">
            <h3 className="title"></h3>

            <div className="education-box">
              <div className="education-content">
                <div className="content">
                  <div className="year"><i class='bx bxs-calendar' ></i> 2013 - 2019</div>
                  <h3>SD Islam Darunnajah</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda eveniet repellendus deserunt. Voluptatum, maxime deleniti accusantium perferendis obcaecati omnis similique?</p>
                </div>
              </div>
              
              <div className="education-content">
                <div className="content">
                  <div className="year"><i class='bx bxs-calendar' ></i> 2019 - 2022</div>
                  <h3>SMP Dua Mei</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda eveniet repellendus deserunt. Voluptatum, maxime deleniti accusantium perferendis obcaecati omnis similique?</p>
                </div>
              </div>

              <div className="education-content">
                <div className="content">
                  <div className="year"><i class='bx bxs-calendar' ></i> 2022 - Now</div>
                  <h3>SMK Letris Indonesia 2</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda eveniet repellendus deserunt. Voluptatum, maxime deleniti accusantium perferendis obcaecati omnis similique?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="containerSkills">
        <h2 className="heading">My <span>Skills</span></h2>

        <div className="skills-row">
          <div className="skills-column">
            <h3 className="title">Coding Skills</h3>

            <div className="skills-box">
              <div className="skills-content">
                <div className="progress">
                  <h3>HTML <span>70%</span></h3>
                  <div className="bar"><span></span></div>
                </div>

                <div className="progress">
                  <h3>CSS <span>60%</span></h3>
                  <div className="bar"><span></span></div>
                </div>

                <div className="progress">
                  <h3>JavaScript <span>60%</span></h3>
                  <div className="bar"><span></span></div>
                </div>
              </div>
            </div>
          </div>
        
          <div className="skills-column">
            <h3 className="title">Other Skills</h3>

            <div className="skills-box">
              <div className="skills-content">
                <div className="progress">
                  <h3>Web Design <span>80%</span></h3>
                  <div className="bar"><span></span></div>
                </div>

                <div className="progress">
                  <h3>Video Editing <span>75%</span></h3>
                  <div className="bar"><span></span></div>
                </div>

                <div className="progress">
                  <h3>Game Writer <span>60%</span></h3>
                  <div className="bar"><span></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="containerContact">
        <h2 className="heading">Contact <span>Me!</span></h2>

        <form action="#">
          <div className="input-box">
            <div className="input-field">
              <input type="text" placeholder='Full Name' required/>
              <span className="focus"></span>
            </div>
            <div className="input-field">
              <input type="text" placeholder='Email Address' required/>
              <span className="focus"></span>
            </div>
          </div>

          <div className="input-box">
            <div className="input-field">
              <input type="number" placeholder='Mobile Number' required/>
              <span className="focus"></span>
            </div>
            <div className="input-field">
              <input type="text" placeholder='Email Subject' required/>
              <span className="focus"></span>
            </div>
          </div>

          <div className="textarea-field">
            <textarea name="" id="" cols="30" rows="10" placeholder='Your Message' required></textarea>
            <span className="focus"></span>
          </div>

          <div className="btn-box">
            <button type='submit' className='btn'>Submit</button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Main