import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,
  } from '@chakra-ui/react'
import CartItem from './CartItem'
const CartDrawer = ({isOpen,onClose,btnRef}) => {
    
  return (
    <>
      
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <h1>Shopping Cart</h1>
            <div className='p-5'>

            </div>
          </DrawerHeader>
          <DrawerBody >
            <div className='space-y-4'>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            </div>

          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default CartDrawer