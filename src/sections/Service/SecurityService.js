import React, {Component} from 'react';
import SecurityServiceItem from "sections/Service/SecurityServiceItem";

class SecurityService extends Component {
    render() {
        const { children } = this.props;
        return(
            <section className="h_security_about_area">
                <div className="container">
                    {children}
                </div>
            </section>
        )
    }
}

export default SecurityService;
