import React from 'react'
import { useContext } from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
// import {useStateValue} from "../../Context/StateProvider"
import {auth} from "../../firebase"

import myContext from '../../Context/myContext';
import userContext from '../../Context/userContext';

const Header = () => {
    // const [{basket},dispatch]=useStateValue();

    const context = useContext(myContext);
    const context2 = useContext(userContext);
    
    const basket=context.state.basket;  //basket is an array of objects
    const user=context2.state.user;
    // const user=null;

    console.log("my user=",user);

    
    console.log("basket=",basket);

    const handleAuthenticaton = () => {
        if (user) {
          auth().signOut();
        }
      }

    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo" />
            </Link>

            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>

            <div className="header__nav">
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthenticaton} className="header__option">
                        <span className="header__optionLineOne">
                            Hello {user?.email} {user ? '' : 'Guest'}
                        </span>
                        <span className="header__optionLineTwo">
                            {user ? 'Sign Out' : 'Sign In'}
                        </span>
                    </div>
                </Link>

                <div className="header__option">
                    <span className="header__optionLineOne">
                        Returns
                    </span>
                    <span className="header__optionLineTwo">
                        & Orders
                    </span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">
                        Your 
                    </span>
                    <span className="header__optionLineTwo">
                        Prime
                    </span>
                </div>

                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon/>
                        <span className="header__optionLineTwo header__basketCount">
                            {basket?.length}
                            {/* ? is used so that if basket comes undefined, then it will handle that error properly */}
                        </span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Header
