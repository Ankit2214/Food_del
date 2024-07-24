import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
        <img src={'https://t3.ftcdn.net/jpg/02/64/00/56/360_F_264005624_NyFEBO7k0OsNMQiI343zBZZ7WH89f6Ls.jpg'} alt='' className='background'/>
            <div className='header-contents'>
                <h2>Order your favourite food here</h2>
                <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
                <button>View Menu</button>
            </div>
        </div>
    )
}

export default Header
