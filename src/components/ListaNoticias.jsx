import React from 'react';
import '../index.css'
import Noticia from './Noticia'

function ListaNoticias({items}) {
    return (
        <div className="news-grid">
            {items.map((item, i) =>(
              <Noticia key={i} item={item}/>
            ))}
            
        </div>
    );
}

export default ListaNoticias;