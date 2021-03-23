import React from 'react'



export default function GifList(props) {
    console.log(props);
    return (
      <ul>
        {props.data.map((gif) => (
          <li key={gif.id}>
            <img src={gif.images.original.url} alt='dolphin' />
          </li>
        ))}
      </ul>
    );
}
