import { Flex } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { PiShoppingCart } from "react-icons/pi";
import Context from '../../Context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { getQuantity } = useContext(Context)

  return (
    <Flex m={5} justify={'center'} align={'center'}>
      <Link to='/cart'><PiShoppingCart /></Link>
      <span>{ getQuantity() > 0 && getQuantity() }</span>
    </Flex>
  )
}

export default CartWidget
