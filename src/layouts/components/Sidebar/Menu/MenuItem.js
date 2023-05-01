import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, activeIcon }) {
    const renderMenu = (activeItem = false) => (
        <>
            {activeItem ? activeIcon || icon : icon}
            <span className={cx('title')}>{title}</span>
        </>
    );
    return (
        <NavLink className={({ isActive }) => cx('menu-item', { active: isActive })} to={to}>
            {({ isActive }) => renderMenu(isActive)}
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    activeIcon: PropTypes.node.isRequired,
};
export default MenuItem;
