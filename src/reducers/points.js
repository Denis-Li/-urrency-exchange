const points = (state = [], action) => {
    switch (action.type) {
        case 'ADD_POINTS' :
            console.log('add points work');
            console.log(state);
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    image: action.image
                }
            ]
            default:
                return state;
    }
}

export default points;