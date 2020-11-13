import React from 'react';

const Identicon = ( { string, size, ...props } ) => {
  return <img src={`//www.gravatar.com/avatar/${string}?d=identicon&f=y&s=${size}`} alt='' {...props} />
}

export default Identicon
