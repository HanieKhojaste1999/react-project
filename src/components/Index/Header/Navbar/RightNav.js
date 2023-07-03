import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #ffffff;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    z-index: 90;
    transition: transform 0.3s ease-in-out;
    li {
      color: #030303;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>سوپرمارکت</li>
      <li>پرفروش ترین ها</li>
      <li>تخفیف ها و پیشنهاد ها</li>
      <li>شگفت انگیزها</li>
      <li>سوالی دارید؟</li>
      <li>در دیجی کالا بفروشید</li>
    </Ul>
  )
}

export default RightNav