import React from 'react'
import { BiMenu } from 'react-icons/bi'

const Nav = () => {
    // const [showing, setShowing] = useState(false)

    return (
        <>
        
        <BiMenu className="hamburger" />
        <div className="nav col-lg-3" >

            <ul>
                <li>Home</li>
                <li>Hour</li>
                <li>Day</li>
                <li>Week</li>
            </ul>

        </div>
        </>
    )
}

export default Nav
