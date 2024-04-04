import React from 'react';
import {Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {ShoppingBasket} from "@mui/icons-material";
import BasketItem from "./BasketItem";

export const Basket = (props) => {
    const {order = [], removeFromOrder, cartOpen, closeCart = Function.prototype} = props
    return (
        <Drawer
            anchor={"right"}
            open={cartOpen}
            onClose={closeCart}
        >
            <List sx={{width: '400px'}}>
                <ListItem>
                    <ListItemIcon>
                        <ShoppingBasket/>
                    </ListItemIcon>
                    <ListItemText primary={'Cart'}/>
                </ListItem>
                <Divider/>
                {!order.length
                    ? <ListItem>Cart is empty!</ListItem>
                    : (
                        <>
                            {order.map(item => (
                                <BasketItem key={item.name} {...item} removeFromOrder={removeFromOrder}/>
                            ))}
                            <Divider/>
                            <ListItem>
                                <Typography
                                    sx={{fontWeight: '700'}}
                                >
                                    Total count:{' '}
                                    {order.reduce((acc, item) => {
                                        return acc + item.price * item.quantity;
                                    }, 0)}{' '}
                                    roubles.
                                </Typography>
                            </ListItem>
                        </>
                    )

                }
            </List>
        </Drawer>
    );
};