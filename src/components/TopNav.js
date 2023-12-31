import React from "react";
import {Link} from "react-router-dom";

export default function TopNav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Fishbowl</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/*todo add breadcrumb to nav back, back button or menu items*/}
        {/*<div className="collapse navbar-collapse" id="navbarSupportedContent">*/}
        {/*  <ul className="navbar-nav me-auto mb-2 mb-lg-0">*/}
        {/*    <li className="nav-item">*/}
        {/*      <a className="nav-link active" aria-current="page" href="#">Home</a>*/}
        {/*    </li>*/}
        {/*    <li className="nav-item">*/}
        {/*      <a className="nav-link" href="#">Link</a>*/}
        {/*    </li>*/}
        {/*  </ul>*/}
        {/*</div>*/}
      </div>
    </nav>
  );
}