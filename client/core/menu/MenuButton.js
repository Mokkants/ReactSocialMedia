import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'

const MenuButton = ({destination,children}) => {
    return(
        <Link style={linkStyles} to={destination}>
            <Button variant="contained" color="primary" style={buttonStyles}>
                {children}
            </Button>
        </Link>
    )
}

MenuButton.propTypes={
    destination : PropTypes.string.isRequired
}

const buttonStyles={
    boxShadow:'none',
    textDecoration:'none'
}

const linkStyles={
    textDecoration:'none'
}

export default MenuButton