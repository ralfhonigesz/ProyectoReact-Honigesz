import React, { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css';
import { ToastContainer, toast } from 'react-toastify';
import { Card, CardHeader, CardBody, CardFooter, Flex, Box, Text, Heading, Image,  Avatar,  IconButton, Button, Center } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Context from '../../Context/CartContext';


const ItemDetail = ({categoria, descripcion, img, nombre, precio, id, stock}) => {
    const [ cantidad, setCantidad ] = useState(0)
    const { addItem } = useContext(Context)


    const onAdd = (quantity) => {   
        const item = {
            id,
            nombre,
            precio
        }
        addItem(item, quantity)
        toast(`Agregaste ${quantity} unidades`)
        setCantidad(quantity)
    }

    return (
        <Card maxW={'xl'} mt={5} mb={5} >
        <CardHeader align={'center'}>
            <Image
                objectFit='cover'
                src={img}
                alt={nombre}
                borderRadius='md'
                boxSize='100%'
                w={'400px'}
                h='400px' 
            />

        </CardHeader>
        <CardBody>
        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
            <Box w={'100%'}>
                <Heading 
                    size='md' 
                    textAlign={'center'}>
                    {nombre}
                </Heading>
            </Box>
            <Text textAlign={'center'}>
            {descripcion}
            </Text>
        </Flex>
            <Text fontSize='3xl' textAlign={'center'} mt={10} color={'#243F4D'} fontWeight={'bold'}>
                ${precio}
            </Text>
            <Text fontSize='xl' textAlign={'center'} mt={1} color={'#243F4D'}>
            Stock disponible: {stock}
            </Text>
        </CardBody>


        <CardFooter w={'100%'} p={0}>

        {
            cantidad > 0 ?
            <Flex justify={'space-between'} align={'center'} w={'100%'}>
                <Button 
                    bg={'#D40B0B'} 
                    color={'#fff'}
                    w={'100%'}
                    h={'5vh'}
                    mt={11}
                    borderRadius={0}
                    _hover={{ bg: '#EA5E5E', color: '#243F4D' }}>
                            <Link to='/cart'>Ir al carrito</Link> 
                </Button>
                <Button 
                    bg={'#D40B0B'} 
                    color={'#fff'}
                    w={'100%'}
                    h={'5vh'}
                    mt={11}
                    borderRadius={0}
                    _hover={{ bg: '#EA5E5E', color: '#243F4D' }}>
                                        <Link to='/'>Seguir comprando</Link> 
                </Button>
            </Flex>
                            
                :
                <ItemCount stock={stock} initialValue={1} onAdd={onAdd} />
        }
        
        </CardFooter>
        <ToastContainer />
        </Card>
    )
}

export default ItemDetail