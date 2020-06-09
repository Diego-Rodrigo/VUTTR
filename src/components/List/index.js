import React , { useState, useEffect } from 'react';
import {TiDelete} from 'react-icons/ti'

import api from '../../services/api';

import './styles.css';



  

const ListTools = () => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
    api.get('tools').then(res => {
        setTools(res.data);
            
            
        });    
    },[])
async function handleDeleteTools(id){
    try{
    await api.delete(`tools/${id}`)
         setTools(tools.filter(tool => tool.id !== id));
        
    }catch (erro){
        alert("Erro ao excluir!")
    }
   
}

    return (
        <div>
            <ul>{tools.map(tool => (
                <li className="container-list" key={tool.id}>
                    <div className="header-list">                          
                    <a href={tool.link} alt={tool.title} target="_blank" >{tool.title}</a>
                    <button onClick={() => handleDeleteTools(tool.id)} type="button">
                    <TiDelete size={26} color="#a8a8b3" /> remove
                    </button>
                    
                    
                    </div>
                    
                    <p>{tool.description}</p>
                    <span>{tool.tags.join([' #'])} </span>
                    
                </li>           
            
                ))};</ul>
           
        </div>
    )
            
    
}

export default ListTools;