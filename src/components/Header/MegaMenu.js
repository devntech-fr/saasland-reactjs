import React from "react";
import {NavLink} from "react-router-dom";

function MegaMenu(props) {
    return (
        <div className="mega_menu_inner">
            <ul className="dropdown-menu">
                <li className="nav-item">
                    <ul className="dropdown-menu scroll">
                        <MegaItem href={'/home/chat'} label={'Home Chat'} image={'/img/mega-menu-img/home-chat.jpg'} newItem />
                        <MegaItem href={'/home/tracking'} label={'Home Tracking'} image={'/img/mega-menu-img/home-track.jpg'} />
                        <MegaItem href={'/home/cloud'} label={'Home Cloud'} image={'/img/mega-menu-img/home12.jpg'} />
                        <MegaItem href={'/home/erp'} label={'Home ERP'} image={'/img/mega-menu-img/erp.jpg'} />
                        <MegaItem href={'/home/hosting'} label={'Home Hosting'} image={'/img/mega-menu-img/hosting.jpg'} />
                        <MegaItem href={'/home/security'} label={'Home Security'} image={'/img/mega-menu-img/home-security.jpg'} />
                        <MegaItem href={'/home/support'} label={'Home Support'} image={'/img/mega-menu-img/support.jpg'} />
                        <MegaItem href={'/home/landing'} label={'Home Landing'} image={'/img/mega-menu-img/home14.jpg'} />
                        <MegaItem href={'/home/prototyping'} label={'Home Prototyping'} image={'/img/mega-menu-img/Prototyping_Tool.jpg'} />
                        <MegaItem href={'/home/payment'} label={'Home Payment'} image={'/img/mega-menu-img/home16.jpg'} />
                        <MegaItem href={'/home/startup'} label={'Home Startup'} image={'/img/mega-menu-img/home15.jpg'} />
                        <MegaItem href={'/home/marketing'} label={'Home Digital Marketing'} image={'/img/mega-menu-img/home11.jpg'} />
                        <MegaItem href={'/home/hrm'} label={'Home HR Management'} image={'/img/mega-menu-img/home4.jpg'} />
                        <MegaItem href={'/home/crm'} label={'Home CRM'} image={'/img/mega-menu-img/home3.jpg'} />
                    </ul>
                </li>
            </ul>
        </div>
    )
}

function MegaItem({ href, image, label, newItem }) {
    return (
        <li className="nav-item">
            <NavLink to={href} exact className="item">
                <span className="img">
                    {
                        newItem
                            ? <span className="rebon_tap">New</span>
                            : <></>
                    }
                    <img src={image} alt={"mega menu item"} width={260} height={218}/>
                </span>
                <span className="text">
                    {label}
                </span>
            </NavLink>
        </li>
    )
}

MegaItem.defaultProps = {
    href: '/#',
    label: 'ChatBot',
    image: '/img/mega-menu-img/home-chat.jpg',
    newItem: false,
}

export default MegaMenu;
