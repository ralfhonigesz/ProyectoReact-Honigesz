import { Flex, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getProducts, getProductsByCategory } from '../../Data/asyncMock'
import { GridLoader } from 'react-spinners'


const ItemListContainer = ({ title }) => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)
    const dataProductos = categoryId ? getProductsByCategory(categoryId) : getProducts()

    dataProductos
      .then((data) => setProducts(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
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
