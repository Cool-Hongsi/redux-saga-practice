import React, { Component } from 'react';
import { connect } from 'react-redux';
import Github from '../component/Github';
import { getPost } from '../../redux/github/action';
import PropTypes from 'prop-types';

class GithubContainer extends Component{
    shouldComponentUpdate = (nextProps, nextState) => {
        const { githubList } = this.props;

        // Call render()
        if(githubList !== nextProps.githubList){
            return true;
        }

        // NOT Call render()
        else{
            return false;
        }
    };

    onSelectedGithub = (postId) => {
        const { getPost } = this.props;
        getPost(postId);
    };

    render(){

        const { githubList } = this.props;

        return(
            <Github
                githubList={githubList}
                onSelectedGithub={this.onSelectedGithub}
            />
        )

    }
};

const mapStateToProps = (state) => {
    return {
       githubList : state.githubReducer.data 
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPost : (postId) => { dispatch(getPost(postId)) }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GithubContainer);

GithubContainer.propTypes = {
    githubList : PropTypes.array,
    getPost : PropTypes.func
};