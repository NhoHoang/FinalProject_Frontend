import React, { useState } from "react";

// import {
//   Dropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
// } from "react-bootstrap";

import Dropdown from "react-bootstrap/Dropdown";

import { Link } from "react-router-dom";
import { Nav, NavLink, NavItem } from "react-bootstrap";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };

    this.showDropdown = this.showDropdown.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
  }

  showDropdown = (e) => {
    this.show = true;
    this.setState({
      show: true,
    });
  };

  hideDropdown = (e) => {
    this.show = false;
    this.setState({
      show: false,
    });
  };

  render() {
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
              <Link
                to="/"
                data-target="mobile-demo"
                className="sidenav-trigger"
              >
                <i className="material-icons">menu</i>
              </Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <Nav.Link href="about" className="grey-text text-lighten-3">
                    Giới thiệu
                  </Nav.Link>
                </li>
                <li>
                  <Dropdown
                    as={NavItem}
                    show={this.show}
                    onMouseEnter={(e) => this.showDropdown(e)}
                    onMouseLeave={(e) => this.hideDropdown(e)}
                  >
                    <Dropdown.Toggle
                      as={NavLink}
                      href="message"
                      className="grey-text text-lighten-3"
                    >
                      Đóng góp
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="message">Đóng góp</Dropdown.Item>
                      <Dropdown.Item href="womanempowerment">
                        Hướng dẫn đóng góp
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li>
                  <Nav.Link
                    href="education"
                    className="grey-text text-lighten-3"
                  >
                    Đăng nhập
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link
                    href="foodbank"
                    className="grey-text text-lighten-3"
                  >
                    Đăng kí
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link
                    href="socialwelfare"
                    className="grey-text text-lighten-3"
                  >
                    Thông tin thành viên
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link href="water" className="grey-text text-lighten-3">
                    Quản lí
                  </Nav.Link>
                </li>
                {/* <li>
                <Link to="/womanempowerment">
                  Woman Empowerment <i className="fas fa-caret-down" />{" "}
                </Link>
                {dropdown && <Dropdown />}

              </li>
              <li>
                <Link to="qurbani">Qurbani</Link>
              </li> */}

              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Navbar;
