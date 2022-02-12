export const initialState = {
    user: null,
    playlists:[],
    playing: false,
    item: null,
    discover_weekly:null,
    top_artists: null,
    //token: 'BQCVyg57-cEsLxs4pvQRxQ-ck-IALMRZgQBibg-JZa2shZG8o9Nn2KZd3IaqkfzafeZzIcZIuj2pFakA-JoLiNTb9KRRLaP7dJ7WIaxiHW5qVkYotDys5oTKwEYJ34YdFNHYqfMsP_SKO2zEoXR5ge9t4BzpmXLm-wmEkjgdnUe0P8lC4eTL',
};

const reducer = (state,action) =>{
    console.log(action);

    switch(action.type)
    {
        case 'SET_USER': {
            return {
                ...state,
                user: action.user,
            }
        }

        case 'SET_TOKEN':{
            return{
                ...state,
                token: action.token,
            }
        }

        case 'SET_PLAYLISTS':{
            return{
                ...state,
                playlists: action.playlists,
            }
        }

        case 'SET_DISCOVER_WEEKLY':{
            return{
                ...state,
                discover_weekly: action.discover_weekly,
            }
        }

        default:{
            return state
        }
    }
}

export default reducer;