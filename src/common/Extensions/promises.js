
export const delayPromise = (delay) => {
    return function(value) {
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                resolve(value);
            }, delay)
        });
    }
}

export const makeAwaitable = (functionToAwait) => {
    return dispatch => {
        return Promise.resolve()
        .then(() => dispatch(functionToAwait()));
    };
}