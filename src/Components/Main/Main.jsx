import React from "react";
import "../Main/Main.css";
import { FaSearch, FaLock, FaRocket, FaDatabase, FaCode, FaHeadset} from "react-icons/fa";

function Main() {
  return (
    <>
      <div className="container">
        <div className="intro">
          <div id="askCont" className="askDiv">
            <div className="qnIcon">
              <FaSearch />
            </div>
            <p className="askText">
              Find the best answer to your technical question, help others
              answer theirs
            </p>
            <button className="joinBtn">Join the community</button>
          </div>
          <div id="viewCont" className="viewDiv">
            <div className="lkIcon" id="lockIcon">
              <FaLock />
            </div>
            <p className="viewText">
              Want a secure, private space for your technical knowledge?
            </p>
            <button className="discoverBtn">Discover Developers</button>
          </div>
        </div>
        <div className="devText">
          <h2 className="mainText">
            Every <span className="dev">Software Engineer</span> has a tab to
            open to <span className="logo2">Queue Overflow</span>
          </h2>
        </div>
              <hr />
              
              <div className="outro">
                  <h2 className="outroTitle">Ensure your software engineers stay on course</h2>
                  <h2 className="outroText">Here are just a few types of technologies that we help.</h2>
                  <div className="tech">
                      
                      <div className="devOps">
                          <div className="icon"><FaRocket /></div>
                          <h3 className="devText">DevOps engineers</h3>
                      </div>
                      <div className="data">
                         <div className="icon"><FaDatabase/></div>
                          <h3 className="devText">Data scientists</h3>
                          
                      </div>
                      <div className="software">
                          <div className="icon"><FaCode/></div>
                          <h3 className="devText">Software engineers</h3>
                          
                      </div>
                      <div className="support">
                         <div className="icon"><FaHeadset /></div>
                          <h3 className="devText">Support teams</h3>
                      </div>
                      <div className="leaders">
                         <div className="icon"><FaHeadset/></div>
                          <h3 className="devText">Engineering Leader</h3>
                      </div>
                  </div>
              </div>
      </div>
    </>
  );
}

export default Main;
