import React from 'react'
import {
    Navbar,
    Container,
    Nav,
    NavDropdown,

} from "react-bootstrap"

const UserNav = () => {
    return (
        <div>
{/* <html lang="en" class="full-height"> */}

{/* <!--Main Navigation--> */}
{/* <header> */}

  <Nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
      <a class="navbar-brand" href="#"><strong>Navbar</strong></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Profile</a>
          </li>
        </ul>
      </div>
    </div>
  </Nav>

  <div class="view intro-2">
    <div class="full-bg-img">
      <div class="mask rgba-indigo-slight flex-center">
        <div class="container">
          <div class="white-text text-center wow fadeInUp">
            <h2>This Navbar isn't fixed</h2>
            <h5>When you scroll down it will disappear</h5>
            <br/>
            <p>Full page intro with background image will be always displayed in full screen mode, regardless
              of device </p>
          </div>
        </div>
      </div>
    </div>
  </div>

{/* </header> */}
{/* <!--Main Navigation--> */}

{/* <!--Main Layout--> */}
<main class="text-center py-5 mt-3">

  <div class="container">
    <div class="row">
      <div class="col-md-12">

        <p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

      </div>
    </div>
  </div>

</main>
{/* <!--Main Layout--> */}
        </div>
    )
}

export default UserNav
