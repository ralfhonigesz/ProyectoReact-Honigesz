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
import { VscMenu } from "react-icons/vsc";
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <Flex h={'15vh'} w={'100%'} justify={'space-between'} align={'center'} backgroundColor={'white'} padding={10}>
            <Menu>
                <MenuButton as={Button} rightIcon={<VscMenu />} backgroundColor={'white'}>
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
            <Heading h={'100px'} w={'400px'} justifyContent={'center'} align={'center'}>
                <Link to='/' ><img src="https://tiendariver.vteximg.com.br/arquivos/newLogo_1200x300_rojoynegro.png?v=637838351505300000"/></Link>
            </Heading>
            <CartWidget />
        </Flex>
    )
}

export default NavBar
