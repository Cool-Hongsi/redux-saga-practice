import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Rest extends Component{
    constructor(props){
        super(props);

        this.state = {
            toggle : false,

            updateItem : {
                name : '',
                price : ''
            }
        };

        this.setToggle = this.setToggle.bind(this);
        this.setUpdateItem = this.setUpdateItem.bind(this);
    };

    setToggle = () => {
        this.setState({
            toggle : !this.state.toggle
        })
    };

    setUpdateItem = (e) => {
        var name = e.target.name;
        var value = e.target.value;

        this.setState({
            updateItem : {
                ...this.state.updateItem,
                [name] : value
            }
        })
    };

    render(){

        const { id, name, price, putData, deleteData } = this.props;

        return(
            <div>
                {id !== ""
                ?
                    <div>
                        {id} | {name} | {price} | <button onClick={this.setToggle}>Update</button> | <button onClick={() => deleteData(id)}>Delete</button>        
                    </div>
                :
                    null
                }

                {this.state.toggle !== false
                ?
                    <div>
                        <input type="text" placeholder="Update Name" name="name" onChange={this.setUpdateItem} />
                        <input type="text" placeholder="Update Price" name="price" onChange={this.setUpdateItem} />
                        <button onClick={() => putData(id, this.state.updateItem.name, this.state.updateItem.price)}>Send</button>        
                    </div>
                :
                    null
                }
            </div>
        )

    }
}

Rest.propTypes = {
    id : PropTypes.any,
    name : PropTypes.string,
    price : PropTypes.any,
    putData : PropTypes.func,
    deleteData : PropTypes.func
};