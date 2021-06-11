

const initialState = {
    skins : [
        {
            id : 0,
            title : 'perviy skin'
        }
    ]

}

export default (state = initialState, action) => {

    switch (action.type) {
        case "SET_SKIN" :
            return {
                ...state,
                skins : action.payload
            }
        case "ADD_SKIN" :
            return {
                ...state,
                skins: [
                    ...state.skins,
                    action.payload
                ]
            }
        default:
            return state

    }

}