import React from 'react';

//React.memo para evitar que un hijo se renderice si las props que recibe no han cambiado. 
//Esto funciona haciendo una comparación superficial (shallow comparison) entre las nuevas 
//y las antiguas props.

const Item = React.memo(({ id, title, emoji, disable, handleClick }) => {
  console.log(`Renderizando Item ${id}`)
  return (
    <button
        className='item'
        title={title}
        onClick={() => handleClick(id)}
        disabled={disable}
        >
        {emoji}
    </button>
  )
})

export default Item
