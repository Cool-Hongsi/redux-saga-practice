import React, { Component } from 'react';
import axios from 'axios';
import Rest from '../component/Rest';

export default class RestContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            array : [
                {
                    id : '',
                    name : '',
                    price : ''
                }
            ],

            item : {
                id : '',
                name : '',
                price : ''
            },

            sortedData : ''
        }

        this.setItem = this.setItem.bind(this);
        this.sorted = this.sorted.bind(this);
        this.getData = this.getData.bind(this);
        this.postData = this.postData.bind(this);
        this.putData = this.putData.bind(this);
        this.deleteData = this.deleteData.bind(this);
    }

    setItem = (e) => {
        var name = e.target.name;
        var value = e.target.value;

        this.setState({
            item : {
                ...this.state.item,
                [name] : value
            }
        })
    };

    sorted = (e) => {
        var newArray = this.state.array;

        if(e.target.value === 'low-price'){
            newArray = newArray.sort((a, b) => {
                return a.price - b.price;
            })
        }
        else if(e.target.value === 'high-price'){
            newArray = newArray.sort((a, b) => {
                return b.price - a.price;
            })
        }

        this.setState({
            array : newArray,
            sortedData : e.target.value
        })
    };

    componentDidMount = () => {
        this.getData().then((res) => {
            this.setState({
                array : res
            })
        }).catch((err) => {
            console.log(err);
        })
    };

    getData = async () => {
        try { 
            const response = await axios.get('/api/getData');
            return response.data;
        } catch (err) {
            console.log(err);
        }
    };

    postData = async () => {
        try {
            const response = await axios.post(`/api/postData/${this.state.item.id}`, { name : this.state.item.name, price : this.state.item.price });
            this.setState({
                array : response.data
            });
        } catch (err) {
            console.log(err);
        }
    };

    putData = async (_id, _name, _price) => {
        try {
            const response = await axios.put(`/api/putData/${_id}`, { name : _name, price : _price });
            this.setState({
                array : response.data
            })
        } catch (err) {
            console.log(err);
        }
    };

    deleteData = async (_id) => {
        try {
            const response = await axios.delete(`/api/deleteData/${_id}`);
            this.setState({
                array : response.data
            })
        } catch (err) {
            console.log(err);
        }
    };

    render(){
        return(
            <div>
                <h3>REST</h3>
                <input type="text" placeholder="ID" name="id" onChange={this.setItem} /><br/>
                <input type="text" placeholder="Name" name="name" onChange={this.setItem} /><br/>
                <input type="text" placeholder="Price" name="price" onChange={this.setItem} /><br/>
                <button onClick={this.postData}>SEND</button>
                <br/><hr/>
                <select value={this.state.sortedData} onChange={this.sorted}>
                    <option value="select">Select</option>
                    <option value="low-price">Low Price</option>
                    <option value="high-price">High Price</option>
                </select>
                {this.state.array.map((el, index) => {
                    return(
                        <div key={index}>
                            <Rest id={el.id} name={el.name} price={el.price} putData={this.putData} deleteData={this.deleteData} />
                        </div>
                    )
                })}
            </div>
        )
    }
}