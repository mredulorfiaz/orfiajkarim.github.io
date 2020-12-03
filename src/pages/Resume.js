import React from "react";

import { GoBook } from "react-icons/go";
import { Line } from "rc-progress";

const Resume = () => {
  return (
    <div>
      <div className="mi-skills-area mi-section mi-padding-top">
        <div className="container">
          <div className="mi-sectiontitle">
            <h2>My Skills</h2>
            <span>My Skills</span>
          </div>
          <div className="mi-skills">
            <div className="row mt-30-reverse">
              <div className="col-lg-6 col-12 mt-30">
                <div className="mi-progress">
                  <h6 className="mi-progress-title">HTML5</h6>
                  <div className="mi-progress-inner">
                    <div className="mi-progress-percentage">95%</div>
                    <div className="mi-progress-container">
                      <Line
                        percent="95"
                        strokeWidth="1"
                        strokeColor="#007bff"
                      />
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
              <div className="col-lg-6 col-12 mt-30">
                <div className="mi-progress">
                  <h6 className="mi-progress-title">CSS3</h6>
                  <div className="mi-progress-inner">
                    <div className="mi-progress-percentage">95%</div>
                    <div className="mi-progress-container">
                      <Line
                        percent="90"
                        strokeWidth="1"
                        strokeColor="#007bff"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12 mt-30">
                <div className="mi-progress">
                  <h6 className="mi-progress-title">Javascript</h6>
                  <div className="mi-progress-inner">
                    <div className="mi-progress-percentage">70%</div>
                    <div className="mi-progress-container">
                      <Line
                        percent="70"
                        strokeWidth="1"
                        strokeColor="#007bff"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12 mt-30">
                <div className="mi-progress">
                  <h6 className="mi-progress-title">PHP</h6>
                  <div className="mi-progress-inner">
                    <div className="mi-progress-percentage">85%</div>
                    <div className="mi-progress-container">
                      <Line
                        percent="85"
                        strokeWidth="1"
                        strokeColor="#007bff"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12 mt-30">
                <div className="mi-progress">
                  <h6 className="mi-progress-title">WordPress Theme Development</h6>
                  <div className="mi-progress-inner">
                    <div className="mi-progress-percentage">80%</div>
                    <div className="mi-progress-container">
                      <Line
                        percent="70"
                        strokeWidth="1"
                        strokeColor="#007bff"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-12 mt-30">
                <div className="mi-progress">
                  <h6 className="mi-progress-title">WordPress Customization</h6>
                  <div className="mi-progress-inner">
                    <div className="mi-progress-percentage">100%</div>
                    <div className="mi-progress-container">
                      <Line
                        percent="65"
                        strokeWidth="1"
                        strokeColor="#007bff"
                      />
                    </div>
                  </div>
                </div>
              </div>

              
       
            </div>
          </div>
        </div>
      </div>
      <div className="mi-resume-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <div className="mi-sectiontitle">
            <h2>Resume</h2>
            <span>Resume</span>
          </div>
          <div className="mt-30" />
          <div className="mi-smalltitle">
            <span className="mi-smalltitle-icon">
              <GoBook style={{ fontSize: "40px" }} />
            </span>
            <h4 style={{ marginBottom: "0px" }}>Educational Qualifications</h4>
          </div>
          <div className="mi-resume-wrapper">
            <div className="mi-resume mt-30">
              <div className="mi-resume-summary">
                <h6 className="mi-resume-year">2016 - 2020</h6>
              </div>
              <div className="mi-resume-details">
                <h5>Bangladesh University</h5>
                <h6 className="mi-resume-company">
                  Bachelor of Computer Science and Engineering (BSc in CSE)
                </h6>
                <p>
                  Bangladesh University is a profit, private university located
                  near the Jatiyo Sangshad Bhaban in Dhaka, Bangladesh. The
                  university was established in 2001 under the Private
                  University Act 1992. The university was established in 2001 by
                  Quazi Azher Ali.
                </p>
              </div>
            </div>
            <div className="mi-resume mt-30">
              <div className="mi-resume-summary">
                <h6 className="mi-resume-year">2013 - 2014</h6>
              </div>
              <div className="mi-resume-details">
                <h5>Dhaka City College</h5>
                <h6 className="mi-resume-company">
                  Higher Secondary Certificate(HSC) - Science
                </h6>

                <p>
                  
                </p>
              </div>
            </div>
            <div className="mi-resume mt-30">
              <div className="mi-resume-summary">
                <h6 className="mi-resume-year">2011 - 2012</h6>
              </div>
              <div className="mi-resume-details">
                <h5>Blue Bird School & College</h5>
                <h6 className="mi-resume-company">
                  Secondary School Certificate(SSC) - Science
                </h6>
                <p>
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
