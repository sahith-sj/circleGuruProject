import React, { Component } from 'react';
import logo from '../assests/logo.svg';
import './homeComponent.css';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';

class Home extends Component {
    render() {
        return (
            <div>
                {/* <nav class="navbar navbar-light bg-light">
                    <a class="navbar-brand">
                        <img src={logo} width="120" height="120" class="d-inline-block align-top" alt="logo" />
                        <p className="para">CircleGuru</p>
                    </a>
                </nav> */}
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <img src={logo} width="120" height="50" class="d-inline-block align-top" alt="logo" />
                    <a class="navbar-brand logo-font" href="#">CircleGuru</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Network</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Friends</a>
                            </li>
                        </ul>
                    </div>
                    <form class="form-inline">
                        <input class="form-control mr-sm-2 searchlength" type="search" placeholder="Search" aria-label="Search"></input>
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <Button variant="link">SignIn</Button>
                    <Button variant="link">LogIn</Button>
                </nav>
            </div >
        );
    }
}

export default Home;
