

const apReducer = (state = [], action) =>{
    switch(action.type){
        case 'DULIEU': 
            return action.payload
        default:
            return state
    }
}
export default apReducer