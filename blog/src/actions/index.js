import jsonPlaceHolder from '../apis/jsonPlaceHolder';

export const fetchPosts = async () => {
    // BAD APPROACH! BAD DESIGN! AVOID!
    const response = await jsonPlaceHolder.get('/posts');
    return {
        type: 'FETCH_POSTS',
        payload: response,
    };
};
