
function createConstants(...constants) {
    return constants.reduce((acc, constant) => {
        acc[constant] = constant;
        return acc;
    }, {});
}
module.exports = createConstants( 
   'INCREASE',
   'DECREASE',
   'POST_SELECTED',
   'ADD_POST',
   'GET_POSTS'
);
