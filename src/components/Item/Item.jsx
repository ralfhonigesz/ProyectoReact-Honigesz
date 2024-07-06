import React from 'react'
import './Item.css'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Text, ButtonGroup, Button, Divider, Heading, Center, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({ nombre, precio, img, id }) => {
    return (
        <Card className='card' maxW='sm' border='3px' borderColor='red' boxShadow='2xl'>
            <CardBody justify={'center'} align={'center'}>
                <Image
                    src={img}
                    alt={nombre}
                    borderRadius='md'
                    boxSize='100%'
                    objectFit='cover'
                    w={'300px'}
                    h='300px'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{nombre}</Heading>
                    <Text color='FAFAFC' fontSize='2xl'>
                        ${precio}
                    </Text>
                </Stack>
            </CardBody>
            <Center height='2px' bg={'#243F4D'}>
            </Center>
            <Divider color={'red'} />
            <CardFooter>
                <Flex spacing='2' justifyContent={'center'} align={'center'} w={'100%'}>
                    <Button
                        variant='solid'
                        bg={'#D40B0B'}
                        color={'#fff'}
                        _hover={{ bg: '#fff', color: '#D40B0B' }}
                    >
                        <Link to={`/producto/${id}`}>
                            Ver detalle
                        </Link>
                    </Button>

                </Flex>
            </CardFooter>
        </Card>
    )
}

export default Item