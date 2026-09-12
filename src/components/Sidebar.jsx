import { Link, NavLink } from "react-router-dom"

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="brand">
                <div className="brand-mark">L</div>
                <div>
                    <div className="brand-name">Libria</div>
                    <div className="brand-caption">Open Library</div>
                </div>
            </div>
            <nav className="navigation">
                <div className="nav-section-title">Библиотека</div>
                <NavLink className={({isActive}) => `nav-item${isActive ? " active" : ""}`} to="/">
                    <span>⌂</span>
                    Обзор
                </NavLink>
                <NavLink className={({isActive}) => `nav-item${isActive ? " active" : ""}`} to="favorites">
                    <span>♡</span>
                    Избранное
                </NavLink>
            </nav>
            <div className="sidebar-bottom">
                <div className="profile">
                    <div className="avatar">А</div>
                    <div>
                        <strong>Читатель</strong>
                        <span>Моя библиотека</span>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
