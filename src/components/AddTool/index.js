import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import {MdAdd, MdClose, MdSave} from 'react-icons/md';
import './styles.css';
import api from '../../services/api';


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'

    },
    overlay : {
      position          : 'fixed',
      top               : 0,
      left              : 0,
      right             : 0,
      bottom            : 0,
      backgroundColor   : 'rgba(0, 0, 0, 0.70)'
    }
  };

const AddToolForm =() => {  
    
    const [modalIsOpen,setIsOpen] = React.useState(false);
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState(['']);

    function openModal() {
        setIsOpen(true);
      }
     
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
       
      }
     
      function closeModal(){
        setIsOpen(false);
      }
      async function handleNewTool(){
                        
        const data = {
          title,
          link,
          description,
          tags,
        };
        try{
          await api.post('tools', data)
              console.log(data);
        }catch(error){
          alert("Ops! Erro ao cadastrar new tool")
        }
        
      }
      
    return(
        <div>
       
        <button className="btn-open-modal" onClick={openModal}>+ Add Tool</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Add new tool"
        >
                       
          
          <div className="header-modal">
              <span>
              <MdAdd textDecoration="Add new tool"/>Add new tool
              </span>
            <div>
              
           <button className="btn-close-modal" onClick={closeModal}>
          
            <MdClose size={24} />
          </button>          
          </div>
          </div>
          
          <div className="form-modal">
          <form onSubmit={handleNewTool}>
            <label>Tool Name</label>
            <input placeholder="Tool Name"
                   value={title}
                   onChange={event => setTitle(event.target.value)} />

            <label>Tool Link</label>
            <input placeholder="ex: http://mytool.com.br"
                   value={link}
                   onChange={event => setLink(event.target.value)}/>

            <label>Tool Description</label>
            <textarea placeholder="Tool Description"
                      value={description}
                      onChange={event => setDescription(event.target.value)} />
            
            <label>Tags</label>
            <input placeholder="ex: #tools, #organization..."
                   value={tags}
                   onChange={event => setTags(event.target.value)}/>
            
              <button className="btn-add-tool">+ Add Tool</button>
              
            
            
          </form>
          </div>
        </Modal>
      </div>
    )
}

export default AddToolForm;

