import React from 'react'

export const BasicType = () => {
  const name: string = 'phos';
  const age: number = 300;
  const gem: boolean = true;
  const parts: string[] = ['Phosphophyllite', 'Pearl', 'Lapis', 'Gold&Platinum'];

  return (
    <div>
      <p>
        {name} - {age} - {gem ? 'Es Gema' : 'No es Gema'}
      </p>
      <p>
        {parts.join(', ')}
      </p>
    </div>
  )
}
