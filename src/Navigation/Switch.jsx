import React from 'react'

function Switch({ test }) {
    if (test == 1)
        return (
            <div>Switch</div>
        )
    else
        return (
            <div>No</div>
        )
}

export default Switch