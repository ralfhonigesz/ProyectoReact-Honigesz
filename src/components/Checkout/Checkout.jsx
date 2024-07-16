import React, { useContext, useState } from 'react'
import Context from '../../Context/CartContext'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Flex,
    Center,
    Heading,
    Button,

} from '@chakra-ui/react'
import { Timestamp, addDoc, collection } from 'firebase/firestore'
import { db } from '../../config/firebase'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'


const Checkout = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        repeatedEmail: '',
        phone: ''
    })
    const [error, setError] = useState({})
    const [loading, setLoading] = useState(false)

    const { cart, getTotal, clearCart } = useContext(Context)
    const navigate = useNavigate()
    const updateUser = (event) => {
        setUser((user) => ({
            ...user,
            [event.target.name]: event.target.value
        }))
    }

    const validateForm = () => {
        const errors = {}
        if (!user.name) {
            errors.name = '* Tenés que agregar un nombre'
        } else if (user.name.length < 4) {
            errors.name = '* El nombre debe tener al menos 4 caracteres'
        }

        if (!user.email) {
            errors.email = '* Tenés que agregar un email'
        } else if (!/\S+@\S+\.\S+/.test(user.email)) {
            errors.email = '* El email no es válido'
        }

        if (!user.repeatedEmail) {
            errors.repeatedEmail = '* Tenés que repetir el email'
        } else if (user.repeatedEmail !== user.email) {
            errors.repeatedEmail = '* El email no es válido'
        }

        if (!user.phone) {
            errors.phone = '* Tenés que agregar un teléfono de contacto'
        } else if (user.phone.length < 11) {
            errors.phone = '* Numero de teléfono no valido'
        }


        setError(errors)
        return Object.keys(errors).length === 0

    }

    const getOrder = async () => {
        if (!validateForm()) {
            return
        }

        const coleccion = collection(db, 'orders')
        try {
            const order = {
                buyer: user,
                cart: cart,
                total: getTotal(),
                fecha: Timestamp.now()
            }

            const orderRef = await addDoc(coleccion, order)

            Swal.fire({
                title: "Gracias por tu compra",
                text: `El número de orden es: ${orderRef.id}`,
                icon: "success",
                confirmButtonText: "Ir al inicio",
            }).then(() => {
                clearCart()
                navigate('/')
            });
        } catch (error) {
            console.log(error)
        }

    }

    console.log(error)
    return (
        <Center mt={10}>
            <Flex direction={'column'}
                align={'center'}
                justify={'center'}
                backgroundColor={'#BDBDBD'}
                border={'20px solid #BDBDBD'}
                borderRadius={'30px'}
                padding={'20px'}>

                <Heading>Datos de facturación</Heading>
                <Flex w={'100%'} justify={'center'} align={'center'}>
                    <FormControl>
                        <FormLabel>Nombre</FormLabel>
                        <Input
                            backgroundColor={'white'}
                            type='text'
                            name='name'
                            placeholder='Marcelo Gallardo'
                            onChange={updateUser}
                        />
                        <Flex color={'red'} fontSize={'0.8rem'} fontStyle={'italic'}>
                            {error.name}
                        </Flex>
                        <FormErrorMessage>{error.name}</FormErrorMessage>
                        <FormLabel>Email</FormLabel>
                        <Input
                            backgroundColor={'white'}
                            type='email'
                            name='email'
                            placeholder='riverplate@riverplate.com'
                            onChange={updateUser}
                        />
                        <Flex color={'red'} fontSize={'0.8rem'} fontStyle={'italic'}>
                            {error.email}
                        </Flex>
                        <FormLabel>Repetir email</FormLabel>
                        <Input
                            backgroundColor={'white'}
                            type='email'
                            name='repeatedEmail'
                            placeholder='riverplate@riverplate.com'
                            onChange={updateUser}
                        />
                        <Flex color={'red'} fontSize={'0.8rem'} fontStyle={'italic'}>
                            {error.repeatedEmail}
                        </Flex>
                        <FormLabel>Teléfono</FormLabel>
                        <Input
                            backgroundColor={'white'}
                            type='text'
                            name='phone'
                            placeholder='01122334455'
                            onChange={updateUser}
                        />
                        <Flex color={'red'} fontSize={'0.8rem'} fontStyle={'italic'}>
                            {error.phone}
                        </Flex>
                    </FormControl>
                </Flex>
                <Button mt={5} onClick={getOrder}>
                    Finalizar compra
                </Button>
            </Flex>
        </Center>
    )
}

export default Checkout