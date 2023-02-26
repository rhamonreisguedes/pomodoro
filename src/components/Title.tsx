import React from 'react'

type Props = {
  innerText: string,
}

const Title = ({innerText}: Props) => {
  return (
    <div className='text-center text-lg'>{innerText}</div>
  )
}

export default Title