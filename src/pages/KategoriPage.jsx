import React from 'react'
import Kategori2024 from '../components/Kategori2024';
import Kategori2023 from '../components/Kategori2023';

const KategoriPage = () => {
  return (
    <div className='kategoripagee'>
      <header className="w-100 min-vh-100">
        <div className='kategoripeeji w-100 min-vh-100'> 
          <Kategori2024 />
          <Kategori2023 />
        </div> 
      </header>
    </div>
  )
}

export default KategoriPage;
