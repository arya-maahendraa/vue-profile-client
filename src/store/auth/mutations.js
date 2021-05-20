export function setUserToken(state, data) {
   console.log(data);
   state.user = data.user;
   state.token = data.token;
}
