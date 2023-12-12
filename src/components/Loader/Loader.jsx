import React from 'react';
import { ClipLoader } from 'react-spinners';

function Loader() {
  return (
    <div
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '1000',
      }}
    >
      <ClipLoader color="#0B434B" loading={true} size={35} />
    </div>
  );
}

export default Loader;
