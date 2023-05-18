import {NavLink, Outlet} from "react-router-dom";
import * as React from "react";

type NavLinkStyle = (props: {
    isActive: boolean;
    isPending: boolean;
}) => React.CSSProperties

const style: NavLinkStyle = ({ isActive }) => {
    if (isActive) {
        return {
            fontWeight: 'bold'
        }
    }

    return {
        color: 'gray'
    }
}

const Home = () => {
  return (
    <section style={{ display: 'flex', flexDirection: 'column' }}>
        <NavLink to="use-error-boundary" style={style}>
            react-error-boundary 로 defered data 다루는 법
        </NavLink>
        <NavLink to="use-await" style={style}>
            react-router-dom 으로 defered data 다루는 법
        </NavLink>
        <Outlet />
    </section>
  )
}

export default Home
