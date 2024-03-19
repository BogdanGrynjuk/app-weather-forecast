import React from 'react'
import { LoadInner, LoadLoader } from './Loader.styled'

const Loader = () => {
  return (
    <LoadLoader>
      <LoadInner className='load-one' />
      <LoadInner className='load-two' />
      <LoadInner className='load-three' />
    </LoadLoader>
  );
}

export default Loader;
