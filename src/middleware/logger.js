export default store => next => action => {
    console.log('Logger Middleware:', action);
    return next(action);
}


