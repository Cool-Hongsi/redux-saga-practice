import { GET_POST_GITHUB_SUCCESS, GET_POST_GITHUB_FAILURE } from './action';
import produce from 'immer';

const initialState = {
    data : [
        {
            login : 'Cool-Hongsi',
            id : '39789641',
            avatar_url : 'https://avatars3.githubusercontent.com/u/39789641?v=4'
        }
    ]
};

export default function githubReducer(state = initialState, action){
    switch(action.type){
        case GET_POST_GITHUB_SUCCESS:
            return produce(state, draftState => {
                let checkDuplicateId = draftState.data.find(item => item.id === action.payload.id);

                if(checkDuplicateId === undefined){
                    draftState.data.push({
                        login : action.payload.login,
                        id : action.payload.id,
                        avatar_url : action.payload.avatar_url
                    })
                };
            });
        case GET_POST_GITHUB_FAILURE:
            console.log(action.errMsg);
            return state;
        default:
            return state;
    }
};