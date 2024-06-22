import React from 'react'

import Event23 from '../components/Event23';
import KlasemenAkhir23 from '../components/KlasemenAkhir23';
import Performer23 from '../components/Performer23';
import Judges23 from '../components/Judges23';
import MoreInfo23 from '../components/MoreInfo23';

const Event23Page = () => { 
  return (
    <div className='event23page'>
      <header className="w-100 min-vh-100">
        <div className='event2024 w-100 min-vh-100'> 
          <Event23 />
          <KlasemenAkhir23 />
          <Performer23 />
          <Judges23 />
          <MoreInfo23 />

        </div> 
      </header> 
    </div>
  ) 
}

export default Event23Page;
