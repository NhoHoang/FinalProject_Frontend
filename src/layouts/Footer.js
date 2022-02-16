import React from "react";
import { Link } from "react-router-dom";
import datalchemyLogo from "../data/img/footer/datalchemyLogo.png";
// Need to added correct .svg file
// Add sticky footer
// Add IG and Contribute button

const Footer = () => {
  return (
    <footer>
      <div className="page-footer teal">
        <div className="container center">
          <div className="row">
            <div className="col l6 s12">
              <img
                src="https://my-tifc.org/imgs/logo.png"
                alt="logo"
                width="150px"
              ></img>
              <h5 className="white-text">TRÁI TIM CHO EM</h5>
              <p className="grey-text text-lighten-4"></p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Links</h5>
              <ul>
                <li>
                  <Link className="grey-text text-lighten-3" to="/about">
                    Giới thiệu
                  </Link>
                </li>
                <li>
                  <Link className="grey-text text-lighten-3" to="/message">
                    Đóng góp
                  </Link>
                </li>
                <li>
                  <Link
                    className="grey-text text-lighten-3 large-text"
                    to="/education"
                  >
                    Đăng nhập
                  </Link>
                </li>
                <li>
                  <Link
                    className="grey-text text-lighten-3 large-text"
                    to="/foodbank"
                  >
                    Đăng kí
                  </Link>
                </li>
                <li>
                  <Link
                    className="grey-text text-lighten-3"
                    to="/socialwelfare"
                  >
                    Thông tin thành viên
                  </Link>
                </li>
                <li>
                  <Link className="grey-text text-lighten-3" to="/water">
                    Quản lí
                  </Link>
                </li>
                {/* <li>
                  <Link
                    className='grey-text text-lighten-3'
                    to='/womanempowerment'
                  >
                    Woman Empowerment
                  </Link>
                </li>
                <li>
                  <Link className='grey-text text-lighten-3' to='/qurbani'>
                    Qurbani
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright black">
          <div className="container">
            <div className="row">
              <div className="col s6">
                <br />@ Tài trợ bởi Tập đoàn Công nghiệp-Viễn thông Quân đội
                (Viettel)
              </div>
              <div className="col s6">
                <br />
                <img
                  className="right"
                  src={datalchemyLogo}
                  alt=""
                  width="50px"
                  height="50px"
                ></img>
                <br />
                <a
                  className="green-text  right"
                  href="http://www.datalchemy.ai/"
                >
                  Team 1
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
