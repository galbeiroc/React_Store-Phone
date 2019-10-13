import React, { Component } from 'react'
import Product from './Product';

export default class ProducList extends Component {
    render() {
        return (
            <div>
                <h3>Hello from ProductList</h3>
                <Product />
            </div>
        )
    }
}
