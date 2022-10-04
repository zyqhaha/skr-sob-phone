import React,{useState} from 'react'
export const A = React.forwardRef((props, ref:any) => (
    <ul className='detail-list' ref={ref}>
    <li>DETAIL</li>
    <li>REVIEW(98)</li>
    <li>Q&A(65)</li>
    <li>RETURN&DELIVERY</li>
</ul>
  ));