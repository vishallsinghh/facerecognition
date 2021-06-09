import React from 'react';
import './Image.css';

const Image = () =>{
return(
    <div>
        <p className='f3'>
            {'This magic Brain will detect faces in your picture. Give it a try'}
        </p>
        <div className='center'>
            <div className='form pa4 center br3 shadow-5'>
                <input className='f4 pa2 w-70 center' type='tex'/>
                <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'  >Detect</button>
            </div>
        </div>
    </div>
)

}

export default Image;