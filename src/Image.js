import React from "react";

import "./Image.css"
const Image = ({ind,children}) => {
    let childrenArr=React.Children.toArray(children)
    console.log(ind)
    console.log(childrenArr[ind])
    return ( <div className="sizeImg">{childrenArr[ind]}
       {/* <img src={childrenArr[index]}/> */}
    </div> );
}
 
export default Image;