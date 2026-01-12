import { getCharacters } from "./services/APIServices";

export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    characters: [],
    locations: [],
    favorites: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    // case 'add_task':

    //   const { id,  color } = action.payload

    //   return {
    //     ...store,
    //     todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
    //   };
    case 'set_characters':
      return {
        ...store,
        characters: action.payload
      }

    case 'set_locations':
      return {
        ...store,
        locations: action.payload
      }
    case 'set_favorites':
      return {
        ...store,
        favorites: action.payload
      }
    case 'add_favorites':
      const { item, itemType } = action.payload;
      const favoriteItem = { ...item, type: itemType };

      //Comprobación de si existe en favoritos
      const exists = store.favorites.some(
        favorite => favorite.id === item.id && favorite.type === item.type
      );
      if (exists) {
        return store;
      }
      //Añadido a favoritos
      return {
        ...store,
        favorites: [...store.favorites, favoriteItem]
      }
    case 'remove_favorites':
      return {
        ...store,
        favorites: store.favorites.filter(
          favorite => !(favorite.id === action.payload.id && favorite.type === action.payload.type)
        )
      }

    default:
      throw Error('Unknown action.');
  }
}
