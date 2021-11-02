import React from "react";
import AuthLayout from "admin/layout/AuthLayout";

function Login(props) {
    return (
        <AuthLayout>
            <form className="col-lg-3 col-md-4 col-10 mx-auto text-center">
                <a className="navbar-brand mx-auto mt-2 flex-fill text-center" href="">
                    <svg version="1.1" id="logo" className="navbar-brand-img brand-md"
                         xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                         y="0px" viewBox="0 0 120 120" xml:space="preserve">
              <g>
                <polygon className="st0" points="78,105 15,105 24,87 87,87 	"/>
                  <polygon className="st0" points="96,69 33,69 42,51 105,51 	"/>
                  <polygon className="st0" points="78,33 15,33 24,15 87,15 	"/>
              </g>
            </svg>
                </a>
                <h1 className="h6 mb-3">Sign in</h1>
                <div className="form-group">
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control form-control-lg"
                           placeholder="Email address" required="" autoFocus=""/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control form-control-lg"
                           placeholder="Password" required=""/>
                </div>
                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me"/> Stay logged in </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Let me in</button>
                <p className="mt-5 mb-3 text-muted">© 2020</p>
            </form>
        </AuthLayout>
    )
}

export default Login;
