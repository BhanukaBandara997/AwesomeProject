import { ADD_PLACE, DELETE_PLACE, DESELECT_PLACE, SELECT_PLACE } from '../actions/actionTypes';


const initialState = {
    places: [],
    selectedPlace: null
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random(),
                    name: placeName,
                    image: {
                        uri: 'https://www.google.com/search?q=background+images&safe=active&tbm=isch&source=iu&ictx=1&fir=V9QSez5mpRnf0M%3A%2CkcdXjkNuF-KTxM%2C_&vet=1&usg=AI4_-kRzfBOeZ1u6wod3DBp0gYg-APb8uA&sa=X&ved=2ahUKEwilreaA0pDiAhWE73MBHWoyCPIQ9QEwCXoECAcQFg#imgrc=RRx0s15l48ONCM:&vet=1'
                    }
                })
            };
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => {
                    return place.key !== state.selectedPlace.key;
                }),
                selectedPlace: null
            };
        case SELECT_PLACE:
            return {
                ...state,
                selectedPlace: state.places.find(place => {
                    return place.key === action.placeKey;
                })
            };
        case DESELECT_PLACE:
            return {
                selectedPlace: null
            };
        default:
            return state;
    }
};

export default reducer;