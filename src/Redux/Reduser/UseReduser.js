let initialState = {
    UserList : [],
    Error : null
}

const UseReduser = (state= initialState , action) =>{
    switch(action.type){
        case 'ADD_USER':
            return{
                ...state,
                UserList : [...state.UserList , action.payload],
                Error : null

            }
        case 'ADD_ERROR':
            return{
                ...state,
                Error : null
                
            }
        case "VIEW_USER" :
            return{
                ...state,
                UserList : action.payload

            }
        case 'VIEW-ERROR' :
            return{
                ...state,
                Error :null
            }
        default :
        return state
    }

}
export default UseReduser;