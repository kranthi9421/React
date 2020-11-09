import React from 'react'

function Title() {
    console.log('Render tile')
    return (
        <div>
            <h1>Use call Back</h1>
        </div>
    )
}

export default React.memo(Title)
