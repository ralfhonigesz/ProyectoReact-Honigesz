import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Heading } from '@chakra-ui/react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Flex,
    Button
} from '@chakra-ui/react'
import { MdArrowDropDown } from "react-icons/md";
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <Flex h={'10vh'} w={'100%'} justify={'space-between'} align={'center'} backgroundColor={'#D40B0B'}>
            <Heading h={'5.5rem'} w={'5.5rem'} ml={5}>
                <Link to='/' ><img src="https://purodiseno.lat/wp-content/uploads/2022/02/RIVER-2-1024x1024.png"/></Link>
            </Heading>
            <Menu>
                <MenuButton as={Button} rightIcon={<MdArrowDropDown />}>
                    Categorias
                </MenuButton>
                <MenuList>
                    <MenuItem>
                        <Link to='/categorias/Camisetas' >Camisetas</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to='/categorias/Remeras' >Remeras</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to='/categorias/Abrigos' >Abrigos</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to='/categorias/Pantalones' >Pantalones</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to='/categorias/Shorts' >Shorts</Link>
                    </MenuItem>
                </MenuList>
            </Menu>
            <CartWidget />
        </Flex>
    )
}

export default NavBar
