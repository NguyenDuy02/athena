import avt from "../assets/images/avt.jpg";
import "../assets/css/user.scss";
export const User = () => {
  return (
    <div className="container container-shadow">
      <div className="row">
        <div className="col-sm-5">
          <div className="card">
            <img className="card-img-info" src={avt} alt="" />
          </div>
        </div>
        <div className="col-sm-7 wrap-name">
          <div className="fullname">
            <h1>Nguyen Dinh Duy</h1>
            <p>Fresher Front End</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="infomation">
            <ul className="info-list">
              <li className="info-list-item">
                <i className="fas fa-user"></i>Male
              </li>
              <li className="info-list-item">
                <i className="fas fa-envelope"></i>nguyendinhduy020396@gmail.com
              </li>
              <li className="info-list-item">
                <i className="fas fa-phone-volume"></i>0901629018
              </li>
              <li className="info-list-item">
                <i className="fas fa-birthday-cake"></i>02/03/1996
              </li>
              <li className="info-list-item">
                <i className="fas fa-house-user"></i>TL03 - ward Thanh Loc -
                district 12
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-5">
          <div className="item-title">
            <h3>
              <i className="fas fa-info-circle"></i>objective
            </h3>
            <ul className="text-list">
              <li className="text-list-item">
                <span>Short term: </span>
                Try to integrate into the working and learning environment to
                develop programming thinking and practical work experience.
              </li>
              <li className="text-list-item">
                <span>Long term: </span>
                Long-term: become a professional programmer and in the next 5
                years can be a leader in the environment in which I work.
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-7">
          <div className="item-title">
            <h3>
              <i className="fas fa-graduation-cap"></i>education
            </h3>
            <ul className="text-list">
              <li className="text-list-item">
                <h5>open university</h5>
                <ul>
                  <li>
                    <span>Major:</span> Managerment Infomation System
                  </li>
                  <li>
                    <span>date:</span> Oct 2015 - Oct 2019
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-5">
          <div className="item-title">
            <h3>
              <i className="fas fa-pencil-alt"></i>skills
            </h3>
            <ul className="text-list">
              <li className="text-list-item">
                <ul className="list-content">
                  <li className="text-content">HTML / CSS / SCSS</li>
                  <li class="progress">
                    <div
                      className="progress-bar progress-bar-striped"
                      style={{ width: "80%" }}
                    >
                      80%
                    </div>
                  </li>
                </ul>
              </li>
              <li className="text-list-item">
                <ul className="list-content">
                  <li className="text-content">Javascript / Bootstrap</li>
                  <li class="progress">
                    <div
                      className="progress-bar progress-bar-striped"
                      style={{ width: "60%" }}
                    >
                      60%
                    </div>
                  </li>
                </ul>
              </li>
              <li className="text-list-item">
                <ul className="list-content">
                  <li className="text-content">Reactjs / Github</li>
                  <li class="progress">
                    <div
                      className="progress-bar progress-bar-striped"
                      style={{ width: "50%" }}
                    >
                      50%
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-7">
          <div className="item-title">
            <h3>
              <i className="fas fa-briefcase"></i>work experience
            </h3>
            <ul className="text-list">
            <li className="text-list-item">
                <h5>Hoang Phu logistics company</h5>
                <ul>
                  <li>
                    <span>position:</span> telesales staff
                  </li>
                  <li>
                    <span>date:</span> Mar 2020 - Feb 2021
                  </li>
                  <li>
                    <span>description:</span> Find new customers for the company
                    and source in China through e-commerce sites
                  </li>
                </ul>
              </li>

              <li className="text-list-item">
                <h5>texpo solution</h5>
                <ul>
                  <li>
                    <span>position:</span> staff
                  </li>
                  <li>
                    <span>date:</span> Aug 2019 - Nov 2019
                  </li>
                  <li>
                    <span>description:</span> Learn how to work at the company,
                    design a website in one page available. Use html, css,
                    bootstrap
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
