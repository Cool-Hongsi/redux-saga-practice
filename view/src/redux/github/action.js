/* Action Type Definition */
export const GET_POST_GITHUB = 'GET_POST_GITHUB';
export const GET_POST_GITHUB_SUCCESS = 'GET_POST_GITHUB_SUCCESS';
export const GET_POST_GITHUB_FAILURE = 'GET_POST_GITHUB_FAILURE';

/* Action Function Definition */
export const getPost = (postId) => {
    return { type : GET_POST_GITHUB, id : postId };
};