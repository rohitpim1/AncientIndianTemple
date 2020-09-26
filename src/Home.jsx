import React from 'react';
import shiv from "../src/indiantemple/shiv.jpg";
const Home = () =>{
    return( 
    <>
    
    <div className="w3container">
  <h2>Gods own land</h2>
  </div>
  <div className = "flex-container">
  
  
  <img src = {shiv} alt = "shiv"></img>

  <div className = "des">
  <p>India has always been famous for the array of temples. Devotees in every part of India worship a myriad of gods and goddesses. Interestingly enough, each part of India has a style and architecture of its own. Temples in North India, however, have always been as diverse as its numerous cultures.

The northern part of India is famous for its tourism. However, the fact that many are unaware of is that North India is one of the most sought after areas if one ever seeks out in search of the divine. The temples in North India are a true representation of every faith. Tons and thousands of devotees flock to North India every year in search of God, peace, hope, answers and everything else..</p>
</div>
</div>
<br></br>
<div className = "footer">
<address>
<a href = "https://www.yatra.com/" > yatra.com</a> &nbsp;&nbsp;
<a href = "https://www.booking.com/" > booking.com</a>&nbsp;&nbsp;
<a href = "https://www.makemytrip.com/" > makemytrip.com</a>
  <b><h6> developed : rohit pimpalkar </h6></b>
</address>
</div>
    </>)
};
export default Home;