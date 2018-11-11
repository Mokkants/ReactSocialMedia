import React from 'react'

const Header = (props) => {
    return(
        <div>
            <div>
                {props.partner.name}
            </div>
            <div>
                {/* TODO: Add a green dot if the partner is available*/}
            </div>
        </div>
    )
}

export default Header