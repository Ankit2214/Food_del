import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
        <img src={'https://static.vecteezy.com/system/resources/previews/037/236/648/non_2x/ai-generated-beautuful-fast-food-background-with-copy-space-free-photo.jpg'} alt='' className='background'/>
            <div className='header-contents'>
                <h2>Order your favourite food here</h2>
                <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
                <button>View Menu</button>
            </div>
        </div>
    )
}

export default Header
