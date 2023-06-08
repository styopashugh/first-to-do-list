import { memo, useState } from "react";



export const ListItem =memo(({item,onChange,index})=>{
  
    const [value,setValue]=useState(item?.name || '')
    const [focused,setFocused]=useState(false)
    const onBlur =()=>{
        onChange(item?.id ,value)
        if(!item?.id)
        setValue('')
        setFocused(false)
    }
    return(
        <>
          <div>
                {index}
                <input value={value} onChange={e=>setValue(e.target.value)} onBlur={onBlur} onFocus={()=>setFocused(true)}/>
         </div>
         {focused &&  !item?.id &&<ListItem index={index+1} onChange={onChange} />}
        </>
    ) 
} )