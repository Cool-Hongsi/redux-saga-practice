import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Github extends Component{
    constructor(props){
        super(props);

        this.state = {
            githubInput : ''
        };

        this.setGithub = this.setGithub.bind(this);
    }

    setGithub = (e) => {
        this.setState({
            githubInput : e.target.value
        })
    };

    render(){

        const { githubList, onSelectedGithub } = this.props;

        return(
            <div>
                <h3>GITHUB</h3>
                <input type="text" placeholder="Github ID" onChange={this.setGithub} />
                <button onClick={() => onSelectedGithub(this.state.githubInput)}>Send</button>
                <br/>
                {githubList.map((el, index) => {
                    return(
                        <div key={index}>
                            {el.login} | {el.id} | <img src={el.avatar_url} alt={index} style={{width:"20px", height:"20px"}} /> 
                        </div>
                    )
                })}
            </div>
        )

    }
};

Github.propTypes = {
    githubList : PropTypes.array,
    onSelectedGithub : PropTypes.func
};