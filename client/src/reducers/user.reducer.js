import {
  UNFOLLOW_USER,
  FOLLOW_USER,
  GET_USER,
  UPDATE_BIO,
  UPLOAD_PICTURE,
} from "../actions/user.actions";

// On initialise un "state" vide. On le fait ensuite évoluer selon les actions de l'utilisateur.
const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    case UPLOAD_PICTURE:
      return {
        ...state, // On récupère les données qui existe déjà sans les écraser avec le spread operator puis on modifie la picture avec action.payload.
        picture: action.payload,
      };
    case UPDATE_BIO:
      return {
        ...state,
        bio: action.payload,
      };
    case FOLLOW_USER:
      return {
        ...state,
        following: [action.payload.idToFollow, ...state.following],
      };
    case UNFOLLOW_USER:
      // Ici on retourne un tableau d'id moins l'id correspondant à idToUnfollow si il existe.
      return {
        ...state,
        following: state.following.filter(
          (id) => id !== action.payload.idToUnfollow
        ),
      };
    default:
      return state;
  }
}
