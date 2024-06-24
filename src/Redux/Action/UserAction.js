import axios from 'axios'
export const Add_User =(user) =>{
    return async(dispatch) =>{
        let all = await axios.post('http://localhost:8000/user',user);
        try {
            dispatch({
                type: 'ADD_USER',
                payload: all.data
            })
        } catch (error) {
            dispatch({
                type: 'ADD-ERROR',
                payload: error

            })
        }
    }
}

export const View_User =() =>{
    return async(dispatch) =>{
        let all = await axios.get('http://localhost:8000/user');
       try {
            dispatch({
                type: 'VIEW_USER',
                payload: all.data

            })
       } catch (error) {
            dispatch({
                type: 'VIEW-ERROR',
                payload: error
                
            })
       }
    }
}