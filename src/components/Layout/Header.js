import {Fragment} from "react";
import classes from './Header.module.css';
import mealsImage from '../../assets/FoodOrderApp-Meals.jpg';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (<Fragment>
        <header className={classes.header}>
            <h1>Walk This way...!!</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="A table full of delicious food..!!"/>
        </div>
    </Fragment>);
};

export default Header; 