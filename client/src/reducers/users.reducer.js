import { GET_USERS } from "../actions/users.actions";

// On initialise un "state" vide. On le fait ensuite évoluer selon les actions de l'utilisateur (ici une seule action possible : GET_USERS).
const initialState = {};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return action.payload;
    default:
      return state;
  }
}
