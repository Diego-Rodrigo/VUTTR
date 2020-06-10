import React, {useEffect, useState} from 'react';
import { MdSearch } from 'react-icons/md';
import ListTool from '../List';
import api from '../../services/api';

import './styles.css';

const SearchTools = () => {
    
    const [tools, setTools] = useState([]);    

    useEffect(() => {
    api.get('tools').then(res => {
        
        setTools(res.data)
            
        });    
    },[]);
    console.log(tools)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
    
/*
    function filterTools(filterKeyWord){
        const list = document.querySelector('#list').childNodes

        const newFilteredUl = document.createElement('ul')
        try{
            for(var i=0, length = list.length; i< length; i++){
                if(list[i].nodeType != 1 && null != list[i].nextSibling){
                    if(list[i].nextSibling.innerText == filterKeyWord){
                        var newLi = document.createElement('li')
                        var newList = document.createTextNode(filterKeyWord)
                        newLi.appendChild(newLiText)
                    }
                }
            }
        newFilteredUl.appendChild(newLi)
        }catch (e){
            console.log(error(e))
        }
        return newFilteredUl
    }
    
    var btn = document.querySelector('#search')
    btn.onclick = function(){
        var keyword = document.querySelector('#keyword').value
        var newList = filterTools(keyword)
        document.querySelector('#filteredList').appendChild(newList)
    }
    */
    return(
        <div className="container-search">
            <form>
            <input 
            className="search" 
            type="search"
            placeholder="Search..."
            value=""
            onChange={() => {}}
            />
            {''}
            <input className="checkbox" type="checkbox" value="tags"/> tags
            </form>
        </div>
    )
}

export default SearchTools;