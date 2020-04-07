import React from 'react'

const SpacerGif = ({ size, inline }) => (
    <span
        style={{
            width: size,
            height: size,
            display: inline ? 'inline-block' : 'block',
        }}
    />
)

export default SpacerGif