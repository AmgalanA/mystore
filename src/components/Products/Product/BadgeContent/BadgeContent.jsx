import React from 'react'
import { Badge } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

const BadgeContent = ({ }) => {
    return (
        <div>
            <Badge color="secondary">
                <AddShoppingCart />
            </Badge>
        </div>
    )
}

export default BadgeContent
