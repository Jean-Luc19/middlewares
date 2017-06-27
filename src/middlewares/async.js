export default ({ dispatch }) => next => action => {
  if(!action.payload || !action.payload.then) {
    return next(action)
    //if no payload or payload doesn't have a .then property
  }
  //make sure action's payload resolves
  action.payload
    .then(res => {
      //new action of old type but replaces promise in payload with response
      const newAction = {...action, payload: res}
      dispatch(newAction)
    })

};


// export default function({dispatch}) {
//   return function(next) {
//     return function(action) {
//       console.log(action);
//
//       next(action);
//     }
//   }
// }
