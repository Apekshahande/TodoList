import React,{useEffect, useState} from 'react';
import notes from  "../images/notes.png"
import Card from 'react-bootstrap/Card';


const getLocalItems=()=>{
    let list = localStorage.getItem('lists');
    console.log(list)
    if(list){
        return JSON.parse(localStorage.getItem('lists'))
    }else{
        return []
    }
}

const TodoList=()=>{
    const[inputField, setInputField]=useState('')
    const[item, setItem]= useState(getLocalItems())

    const addItem =()=>{
        if(!inputField){

        }else{
            setItem([...item,inputField])
            setInputField('')

        }
        

    }
    const deleteItem =(id)=>{{
        const updatedItems = item.filter((val, ind)=>{
            return ind !== id;
        })
        setItem(updatedItems)
    }
        
    }
    const RemoveItem=()=>{
        setItem([])
    }

    useEffect(()=>{
        localStorage.setItem('lists',JSON.stringify(item))
        // in local storage data is geting stored into the string format.
    },[item])
    return(
        <>
       
            
       
        
        <div  className='main-div'>
            <div className='child-div'>
                    <figure >
                        <img src={notes} alt="Notes image" />
                        <figcaption>Add your list here ✌</figcaption>
                    </figure>
                    
                    <div className='addItems'>
                        <input type='text' placeholder='✍ Add Items ...'  value={inputField} onChange={(e)=>setInputField(e.target.value)} />
                        <i className="fa fa-plus add-btn" title="Add Item" onClick={addItem}></i>
                    
                    
                    </div>
                    <div className='showItems '>
                        {
                            item.map((value , index)=>{
                                return(         
                                <div className='eachItem' key = {index}>
                                    <h3 >{value}</h3>
                                    <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={()=>deleteItem(index)}></i>

                                </div>

                                
                                )
                            })
                        }
                    
                    </div>
                    <div className='showitems'>
                        <button className='btn effect04' data-sm-link-text="Remove All" onClick={RemoveItem} style={{marginTop:"20px"}}><span>Check List</span></button>
                        {/* data-sm-link-text hover. */}
                    </div>
               
            </div>

        </div>
        </>
    );
}
export default TodoList;