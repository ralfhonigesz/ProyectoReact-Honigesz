import { Button, Heading } from '@chakra-ui/react'
import React, { useContext } from 'react'
import Context from '../../Context/CartContext'
import './Cart.css'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Flex
} from '@chakra-ui/react'
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, removeItem, clearCart, getTotal } = useContext(Context)
    console.log('carrito', cart)
    if (cart.length === 0) {
        return (

            <Flex direction={'column'} justify={'center'} align={'center'}>
                <Heading
                    fontSize={'x-large'}
                    mt={20}
                >El carrito esta vacío</Heading>
                <Button mt={5}><Link to='/'>Ver productos</Link></Button>
            </Flex>
        )
    } else {

        return (
            <TableContainer>
                <Table variant='striped' colorScheme='#fff'>
                    <Thead backgroundColor={'#fff'}>
                        <Tr>
                            <Th>Nombre</Th>
                            <Th>Cantidad</Th>
                            <Th>Precio</Th>
                            <Th>Subtotal</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            cart.map((prod) => (
                                <Tr key={prod.id} backgroundColor={'whitesmoke'}>
                                    <Td>{prod.nombre}</Td>
                                    <Td>{prod.quantity}</Td>
                                    <Td>{prod.precio}</Td>
                                    <Td>{prod.precio * prod.quantity}</Td>
                                    <Td>
                                        <Button onClick={() => removeItem(prod.id)}
                                            backgroundColor={'#BDBDBD'}
                                            _hover={{ color: '#fff' }}>
                                            <RiDeleteBin5Line />
                                        </Button>
                                    </Td>
                                </Tr>
                            ))
                        }
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th>
                                <Button onClick={() => clearCart()}
                                    backgroundColor={'#BDBDBD'}
                                    _hover={{ color: '#fff' }}
                                >Vaciar carrito</Button>
                            </Th>
                            <Th><Heading color={'black'}>${getTotal()}</Heading></Th>
                            <Th>
                                <Button
                                    backgroundColor={'#BDBDBD'}
                                    
                                    _hover={{ color: '#fff' }}>
                                    <Link to='/checkout'>Finalizar compra</Link>
                                </Button>
                            </Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
        )
    }

}

export default Cart