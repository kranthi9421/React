import React from 'react';

function Post({ displayName,username,text,title}) {
    return (
        <div>
          <h1>{title}</h1>
            <h2>{displayName}</h2>
            <h3>{username}</h3>
             <h4>{text}</h4>
        </div>
    )
}

export default Post;
