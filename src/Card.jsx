import React from 'react';


const Card = (props) =>
{
return(
    <>
    <div className= "w3-card-4 w3-center">
        
            
                 <div className = "img">
                   <img src = {props.img} ></img>
                 </div>
                   <div className="w3-center">

                    <h4>{props.name}</h4>
             </div>
                <div>
                <p>
                    {props.des}
                    <a href = {props.link}><strong><u>wikipidia</u></strong></a>
                    </p>
                </div>
        
        </div>
        <br></br>
        <br></br>
        
    
    </>
)

};
export default Card;