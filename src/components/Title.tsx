import React from 'react'

type Props = {
  innerText: string,
}

const Title = ({innerText}: Props) => {
  return (
    <div className='text-center text-lg p-6 md:text-3xl'>{innerText}</div>
  )
}

export default Title