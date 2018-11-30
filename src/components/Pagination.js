import React from 'react';
import leftArrow from '../image/left.png';
import rightArrow from '../image/right.png'; 



const Pagination = (props) => {
  if(!props.pages.next){
    return (
      <div className="tc pa3">
        <img src={leftArrow} alt={'leftArrow'} className="grow-large" onClick={()=>props.onButtonPrevPage()}/>
      </div>
    )
  }else if(!props.pages.prev){
    return (
      <div className="tc pa3">
        <img src={rightArrow} alt={'rightArrow'} className="grow-large" onClick={()=>props.onButtonNextPage()}/>
      </div>
    )
  }else{
    return (
      <div className="tc pa3">
        <img src={leftArrow} alt={'leftArrow'} className="grow-large" onClick={()=>props.onButtonPrevPage()}/>
        <img src={rightArrow} alt={'rightArrow'} className="grow-large" onClick={()=>props.onButtonNextPage()}/>
      </div>
    )
  }
}

export default Pagination;