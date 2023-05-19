import React, {useState} from 'react';
import { PagesList } from './PagesList';





export const Page = (props) => {
  const [clicked, setClick] = useState(false)

  async function fetchPageData(){
    try{
      const getInfo = await fetch(`${apiURL}/wiki/:${props.page.slug}`) 
      const pageData = await getInfo.json();
      props.setPage(pageData);

      
    }catch(err){
      console.log("page unable to load!!!");
    }
  }
  console.log(props);


  return ( <>
    
    <h3> <button onClick= { () => setClick(true) } >{props.page.title}</button></h3>
    {clicked && (
      <ol>
        {props.page.id}
        {props.page.content}
      </ol>
    )}
  </>)
} 
	