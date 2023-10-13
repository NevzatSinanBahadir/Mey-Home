import React, { useState, useRef } from "react";
import { Navbar, Nav, Container, Button, Dropdown } from "react-bootstrap";
import oturmaGrubu from "./images/seater-sofa.png";
import kosetakimi from "./images/sofa1.png";
import koltuk from "./images/sofa2.png";
import tv from "./images/tv-unit.png";
import yemekGrubu from "./images/table.png";
import yatakOdasi from "./images/bedroom.png";
import sehpa from "./images/coffee-table.png";
import HomeSlider from "./HomeSlider";
import { NavLink } from "react-router-dom";
import resim5 from "./images/cross.svg";
import { AiOutlineInstagram, AiOutlinePhone } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import "./Navbar.css";

const MobilyaNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const [showDropdownPhone, setShowDropdownPhone] = useState(false);
  const dropdownRefPhone = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown((prevShow) => !prevShow);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="dark"
      variant="dark"
      style={{ position: "fixed", zIndex: "50", width: "100%", top: 0 }}
    >
      <Container>
        <Navbar.Brand href="#home">MEY HOME</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="mx-3" href="/">
              Anasayfa
            </Nav.Link>

            <Dropdown
              show={showDropdown}
              alignRight
              className="mx-3 position-static phoneResponsive"
              ref={dropdownRef}
              onToggle={toggleDropdown}
            >
              <Dropdown.Toggle as={Nav.Link}>Ürünler</Dropdown.Toggle>
              <Dropdown.Menu
                style={{
                  backgroundColor: "#343A3F",
                  border: "none",
                }}
              >
                <div class="container">
                  <div>
                    <NavLink to="/oturmagruplari">
                      <h3 style={{ fontSize: "12px" }} class="product-title">
                        Oturma Grupları
                      </h3>
                    </NavLink>
                    <NavLink to="/kosetakimlari">
                      <h3 style={{ fontSize: "12px" }} class="product-title">
                        Köşe Takımları
                      </h3>
                    </NavLink>
                    <NavLink to="/tvuniteleri">
                      <h3 style={{ fontSize: "12px" }} class="product-title">
                        Tv Üniteleri
                      </h3>
                    </NavLink>
                    <NavLink to="/yemekodalari">
                      <h3 style={{ fontSize: "12px" }} class="product-title">
                        Yemek Odaları
                      </h3>
                    </NavLink>
                    <NavLink to="/yatakodasi">
                      <h3 style={{ fontSize: "12px" }} class="product-title">
                        Yatak Odaları
                      </h3>
                    </NavLink>
                    <NavLink to="/sehpalar">
                      <h3 style={{ fontSize: "12px" }} class="product-title">
                        Sehpalar
                      </h3>
                    </NavLink>
                  </div>
                </div>
              </Dropdown.Menu>
            </Dropdown>

            <div class=" d-flex mx-3 phoneResponsive mt-2">
              <a
                className="d-flex justify-content-center align-items-center"
                style={{
                  height: "38px",
                  width: "38px",
                  borderRadius: "100%",
                  border: "1px solid #fff",
                }}
                target="_blank"
                href="https://www.instagram.com/meyyhome/"
              >
                <AiOutlineInstagram
                  className="mx-2"
                  style={{ fontSize: "20px", color: "white" }}
                />
              </a>

              <a
                className="d-flex justify-content-center align-items-center mx-3"
                style={{
                  height: "38px",
                  width: "38px",
                  borderRadius: "100%",
                  border: "1px solid #fff",
                }}
                target="_blank"
                href="https://www.google.com/maps/dir/39.944192,32.8466432/isparta+mobilya+mey+home+merkez+adres/@38.8510602,30.3809188,8z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x14c5b519e07d2d53:0x1485f1c7f7fe762!2m2!1d30.552969!2d37.762102?entry=ttu"
              >
                <BiMap
                  className="mx-2"
                  style={{ fontSize: "20px", color: "white" }}
                />
              </a>

              <a
                className="d-flex justify-content-center align-items-center"
                style={{
                  height: "38px",
                  width: "38px",
                  borderRadius: "100%",
                  border: "1px solid #fff",
                }}
                target="_blank"
                href="tel:905069293633"
              >
                <AiOutlinePhone
                  className="mx-2"
                  style={{ fontSize: "20px", color: "white" }}
                />
              </a>
            </div>

            <Dropdown
              show={showDropdown}
              alignRight
              className="mx-3 position-static mobilresponsive" // 'position-static' ekleniyor
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              ref={dropdownRef}
            >
              <Dropdown.Toggle as={Nav.Link}>Ürünler</Dropdown.Toggle>
              <Dropdown.Menu
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  width: "100vw",
                  marginTop: "-8px",
                }}
              >
                <div class="product-section">
                  <div class="container">
                    <div class="row">
                      {/* <!-- Start Column 2 --> */}
                      <div class="col-12 col-md-2 col-lg-2 mb-5 mb-md-0">
                        <a class="product-item">
                          <NavLink to="/oturmagruplari">
                            <img
                              src={oturmaGrubu}
                              class="img-fluid product-thumbnail"
                            />
                            <h3 class="product-title">Oturma Grupları</h3>

                            <span class="icon-cross">
                              <img src={resim5} class="img-fluid" />
                            </span>
                          </NavLink>
                        </a>
                      </div>
                      {/* <!-- End Column 2 --> */}

                      {/* <!-- Start Column 3 --> */}
                      <div class="col-12 col-md-2 col-lg-2 mb-5 mb-md-0">
                        <a class="product-item">
                          <NavLink to="/kosetakimlari">
                            <img
                              src={kosetakimi}
                              class="img-fluid product-thumbnail"
                            />
                            <h3 class="product-title">Köşe Takımları</h3>

                            <span class="icon-cross">
                              <img src={resim5} class="img-fluid" />
                            </span>
                          </NavLink>
                        </a>
                      </div>
                      {/* <!-- End Column 3 --> */}

                      {/* <!-- Start Column 4 --> */}
                      <div class="col-12 col-md-2 col-lg-2 mb-5 mb-md-0">
                        <a class="product-item">
                          <NavLink to="/tvuniteleri">
                            <img src={tv} class="img-fluid product-thumbnail" />
                            <h3 class="product-title">Tv Üniteleri</h3>

                            <span class="icon-cross">
                              <img src={resim5} class="img-fluid" />
                            </span>
                          </NavLink>
                        </a>
                      </div>
                      <div class="col-12 col-md-2 col-lg-2 mb-5 mb-md-0">
                        <a class="product-item">
                          <NavLink to="/yemekodalari">
                            <img
                              src={yemekGrubu}
                              class="img-fluid product-thumbnail"
                            />
                            <h3 class="product-title">Yemek Odaları</h3>

                            <span class="icon-cross">
                              <img src={resim5} class="img-fluid" />
                            </span>
                          </NavLink>
                        </a>
                      </div>

                      <div class="col-12 col-md-2 col-lg-2 mb-5 mb-md-0">
                        <a class="product-item">
                          <NavLink to="/yatakodasi">
                            <img
                              src={yatakOdasi}
                              class="img-fluid product-thumbnail"
                            />
                            <h3 class="product-title">Yatak Odaları</h3>

                            <span class="icon-cross">
                              <img src={resim5} class="img-fluid" />
                            </span>
                          </NavLink>
                        </a>
                      </div>
                      <div class="col-12 col-md-2 col-lg-2 mb-5 mb-md-0">
                        <a class="product-item">
                          <NavLink to="/sehpalar">
                            <img
                              src={sehpa}
                              class="img-fluid product-thumbnail"
                            />
                            <h3 class="product-title">Sehpalar</h3>

                            <span class="icon-cross">
                              <img src={resim5} class="img-fluid" />
                            </span>
                          </NavLink>
                        </a>
                      </div>
                      {/* <!-- End Column 4 --> */}
                    </div>
                  </div>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
          <Nav>
          <NavLink to="/iletisim">
            <Button
              className="mx-3 py-2 bg-primary iletisimphone"
              variant="outline-light"
            >
              İletişim
            </Button>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MobilyaNavbar;
