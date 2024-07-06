import React, { useState } from 'react'
import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import './ItemCount.css'

const ItemCount = ({ stock, initialValue, onAdd }) => {
    const [count, setCount] = useState(initialValue)
    const incrementar = () => {
        count < stock && setCount(count + 1)
    }

    const decrementar = () => {
        count > initialValue && setCount(count - 1)
    }

    return (
        <Flex direction={'column'} align={'center'} justify={'center'} w={'100%'}>
            <Box className='counterContainer'>
                <Button
                    bg={'#D40B0B'}
                    color={'#fff'}
                    _hover={{ bg: '#EA5E5E', color: '#fff' }}
                    className='btnCounter'
                    onClick={decrementar}>
                    -
                </Button>
                <Heading p={2}>{count}</Heading>
                <Button
                    bg={'#D40B0B'}
                    color={'#fff'}
                    _hover={{ bg: '#EA5E5E', color: '#fff' }}
                    className='btnCounter'
                    onClick={incrementar}>
                    +
                </Button>
            </Box>
            <Button
                bg={'#D40B0B'}
                color={'#fff'}
                w={'100%'}
                h={'5vh'}
                borderRadius={0}
                _hover={{ bg: '#EA5E5E', color: '#fff' }}
                onClick={() => onAdd(count)}
            >Agregar al carrito
            </Button>
        </Flex>
    )
}

export default ItemCount