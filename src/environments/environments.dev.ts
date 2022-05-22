export const environment = {
    production: false,
    BASE_URL: 'http://localhost:3000',
    CONTRAT_BASE_URL: 'http://localhost:3000/contrat/',
    ACTIVITE_BASE_URL: 'http://localhost:3000/activite/',

    ACTIVITE: {
      GET_ALL_ACTIVITE: 'list',
      GET_ACTIVITE: 'view',
      ADD_ACTIVITE: 'add',
      UPDATE_ACTIVITE: 'update/',
      DELETE_ACTIVITE: 'delete',
      SEARCH_ACTIVITE: 'search',
},

    CONTRAT: {
        GET_ALL_CONTRAT: 'list',
        GET_CONTRAT: 'view',
        ADD_CONTRAT: 'add',
        UPDATE_CONTRAT: 'update/',
        DELETE_CONTRAT: 'delete',
        SEARCH_CONTRAT: 'search',
  }
}