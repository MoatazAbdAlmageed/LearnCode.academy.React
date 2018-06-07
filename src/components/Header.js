import React, {Component} from 'react';


export class Header extends Component {
    //
    // constructor() {
    //     super();
    //     this.state = {}
    // }


    render() {
        return (

            <div className="Header">

                <nav className="site-header sticky-top py-1">
                    <div className="container d-flex flex-column flex-md-row justify-content-between">
                        <a className="py-2" href="/">
                            HOME
                        </a>
                        <a className="py-2 d-none d-md-inline-block" href="/header">Header</a>
                        <a className="py-2 d-none d-md-inline-block" href="/footer">Footer</a>

                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;
