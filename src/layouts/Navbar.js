import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper teal">
            <Link to="/" className="brand-logo hide-on-small-only">
              TRÁI TIM CHO EM
            </Link>
            <Link
              to="/"
              className="brand-logo show-on-small hide-on-med-and-up"
            >
              VTI Group
            </Link>

            <Link to="/" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/about">Giới thiệu</Link>
              </li>
              <li>
                <Link to="/message">Đóng góp</Link>

                {/* <ul role="menu" class=" dropdown-menu sub-nav">
                  <li id="menu-item-5244">
                    <a
                      title="Hướng dẫn đóng góp"
                      href="http://localhost:3000/message"
                      className="external-link"
                    >
                      Hướng dẫn đóng góp
                    </a>
                  </li>
                  <li
                    id="menu-item-9908"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9908"
                  >
                    <a
                      title="Cập nhật đóng góp"
                      href="http://localhost:3000/womanempowerment"
                      className="external-link"
                    >
                      Cập nhật đóng góp
                    </a>
                  </li>
                </ul> */}

                {/* <Dropdown.Menu>
                  <Dropdown.Item href="http://localhost:3000/message">
                    Hướng dẫn đóng góp
                  </Dropdown.Item>
                  <Dropdown.Item href="http://localhost:3000/womanempowerment">
                    Cập nhật đóng góp
                  </Dropdown.Item>
                </Dropdown.Menu> */}
              </li>
              <li>
                <Link to="/education">Đăng nhập</Link>
              </li>
              <li>
                <Link to="/foodbank">Đăng kí</Link>
              </li>
              <li>
                <Link to="/socialwelfare">Thông tin thành viên</Link>
              </li>
              <li>
                <Link to="/water">Quản lí</Link>
              </li>
              {/* <li>
                <Link to="/womanempowerment">Woman Empowerment</Link>
              </li>
              <li>
                <Link to="qurbani">Qurbani</Link>
              </li> */}
            </ul>
          </div>
        </nav>
      </div>
      {/* <ul className="sidenav " id="mobile-demo">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/message">Message</Link>
        </li>
        <li>
          <Link to="/education">Education</Link>
        </li>
        <li>
          <Link to="/foodbank">Food Bank</Link>
        </li>
        <li>
          <Link to="/socialwelfare">Social Welfare</Link>
        </li>
        <li>
          <Link to="/water">Water</Link>
        </li>
        <li>
          <Link to="/womanempowerment">Woman Empowerment</Link>
        </li>
        <li>
          <Link to="qurbani">Qurbani</Link>
        </li>
      </ul> */}
    </header>
  );
};

export default Navbar;
