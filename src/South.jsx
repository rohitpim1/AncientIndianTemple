import React from 'react';
import SouthData from './SouthData';
import Card from './Card';


const South = () =>{
    return (
        <>
        <div className = "row">
    {
SouthData.map((val,index) => {
    return <Card key = {index} img = {val.img} name = {val.name} des = {val.des} link = {val.link} /> 

})
    }
    </div>
    <div className = "footer">
<address>
<a href = "https://www.yatra.com/" > yatra.com</a> &nbsp;&nbsp;
<a href = "https://www.booking.com/" > booking.com</a>&nbsp;&nbsp;
<a href = "https://www.makemytrip.com/" > makemytrip.com</a>
  <b><h6> developed : rohit pimpalkar </h6></b>
</address>
</div>
 </>
    )
};
export default South;