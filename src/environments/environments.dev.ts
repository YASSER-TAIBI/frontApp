export const environment = {
    production: false,
    BASE_URL: 'http://localhost:3000',
    CONTRAT_BASE_URL: 'http://localhost:3000/contrat/',
    USERS_BASE_URL: 'http://localhost:3000/users/',
    CONGE_BASE_URL: 'http://localhost:3000/conge/',

    USERS: {
      GET_ALL_USERS: 'list',
      GET_USERS: 'view',
      UPDATE_USERS: 'update/',
      DELETE_USERS: 'delete',
      SEARCH_USERS: 'search',
},

    CONTRAT: {
        GET_ALL_CONTRAT: 'list',
        GET_CONTRAT: 'view',
        ADD_CONTRAT: 'add',
        UPDATE_CONTRAT: 'update/',
        DELETE_CONTRAT: 'delete',
        SEARCH_CONTRAT: 'search',
  },

    CONGE: {
        GET_ALL_CONGE: 'list',
        GET_CONGE: 'view',
        ADD_CONGE: 'add',
        UPDATE_CONGE: 'update/',
        DELETE_CONGE: 'delete',
        SEARCH_CONGE: 'search',
}


}