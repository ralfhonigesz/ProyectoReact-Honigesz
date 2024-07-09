import { Flex, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { GridLoader } from 'react-spinners'
import { db } from '../../config/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'


const ItemListContainer = ({ title }) => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)
    const getData = async () => {
      const coleccion = collection(db, 'productos')

      const queryRef = !categoryId ?
        coleccion
        :
        query(coleccion, where('categoria', '==', categoryId))

      const response = await getDocs(queryRef)

      const productos = response.docs.map((doc) => {
        const newItem = {
          ...doc.data(),
          id: doc.id
        }
        return newItem
      })
      setProducts(productos)
      setLoading(false)
    }

    getData()
  }, [categoryId])

  return (
    <Flex direction={'column'} justify={'center'} align={'center'}>
      <Heading
        color={'black'}
        mt={10}
        textDecorationLine={'underline'}
        textDecorationStyle={'solid'}
        textDecorationColor={'#D40B0B'}
      >{title}</Heading>

      {
        loading ?
          <Flex justify={'center'} align={'center'} h={'50vh'}>
            <GridLoader color="#D40B0B" />
          </Flex>
          :
          < ItemList products={products} />
      }
    </Flex >
  )
}


export default ItemListContainer
