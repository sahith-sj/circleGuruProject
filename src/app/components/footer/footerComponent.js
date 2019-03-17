import React, { Component } from 'react';
import './footerComponent.css'
import 'bootstrap/dist/css/bootstrap.css';

class StickyFooter extends Component {
    render() {
        return (
            <div class="footer">
                <div class="legal-nav">
                    <div class="copyright">
                    &copy; 2019 CircleGuru
                     </div>
                    <ul>
                        <li>
                            <a class="nav-link" href="#">About &nbsp;&nbsp; |</a>
                        </li>
                        <li>
                            <a class="nav-link" href="#">HelpDesk &nbsp;&nbsp; |</a>
                        </li>
                        <li>
                            <a class="nav-link" href="#">Careers &nbsp;&nbsp; |</a>
                        </li>
                        <li>
                            <a class="nav-link" href="#">Privacy Policy &nbsp;&nbsp; |</a>
                        </li>
                        <li>
                            <a class="nav-link" href="#">Copyright Policy &nbsp;&nbsp; |</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default StickyFooter;
