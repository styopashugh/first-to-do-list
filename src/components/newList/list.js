import { ListItem } from "./listItem"


export const List =({list,onChange})=>{
        return(
            <div>
                {list?.map((item,index)=><ListItem key={item.id} item ={item} onChange ={onChange}  index={index+1}/>)}
                <ListItem key={-1} onChange ={onChange} index={list?.length+1}/>
            </div>
        )
}