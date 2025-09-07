module.exports = {
  Components: {},
  schemas: {
    //User model
    User: {
      type: Object,
      properties: {
        id: {
          type: "string",
          description: "User's ID",
          example: "TODO",
        },
        nom: {
          type: "string",
          description: "User's First name",
          example: "John",
        },
        prenom: {
          type: "string",
          description: "User's Last name",
          example: "Doe",
        },
        email: {
          type: "string",
          description: "User's email",
          example: "JohnDoe@example.com",
        },
        telephone: {
          type: "string",
          description: "User's phone number",
          example: "5145555655",
        },
        mot_de_passe: {
          type: "string",
          description: "User's password",
          example: "password",
        },
        role: {
          type: "enum",
          description: "User's role",
          example: "TODO",
        },
        date_creation: {
          type: "date",
          description: "User's ...",
          example: "TODO",
        },
      },
    },
    Restaurants: {
      type: Object,
      properties: {
        id: {
          type: "string",
          description: "Restaurant's ID",
          example: "TODO",
        },
        nom: {
          type: "string",
          description: "Restaurant name",
          example: "Pizza Pizza",
        },
        adresse: {
          type: "string",
          description: "Restaurant address",
          example: "1111 Rue Jean",
        },
        ville: {
          type: "string",
          description: "Restaurant city",
          example: "Montreal",
        },
        code_postal: {
          type: "string",
          description: "Restaurant postal code",
          example: "J1J1J1",
        },
        pays: {
          type: "string",
          description: "Restaurant country",
          example: "Canada",
        },
        telephone: {
          type: "string",
          description: "Restaurant phone number",
          example: "5145555655",
        },
        email_contact: {
          type: "string",
          description: "Restaurant email",
          example: "JohnDoe@example.com",
        },
        description: {
          type: "string",
          description: "Restaurant description",
          example: "TODO",
        },
        cote: {
          type: "integer",
          description: "Restaurant note",
          example: "TODO",
        },
        cuisine_type: {
          type: "string",
          description: "Restaurant type of dishes",
          example: "TODO",
        },
        capacite_totale: {
          type: "integer",
          description: "Restaurant max capacity",
          example: "TODO",
        },
        proprietaire_id: {
          type: "string",
          description: "Restaurant owners ID",
          example: "TODO",
        },
        date_creation: {
          type: "date",
          description: "Restaurant ...",
          example: "TODO",
        },
      },
    },
    Reservations: {
      type: Object,
      properties: {
        id: {
          type: "string",
          description: "Resrvation's ID",
          example: "TODO",
        },
        user_id: {
          type: "string",
          description: "User's ID",
          example: "Pizza Pizza",
        },
        Restaurant_ID: {
          type: "string",
          description: "Restaurant ID",
          example: "1111 Rue Jean",
        },
        table_ID: {
          type: "string",
          description: "Table's ID",
          example: "Montreal",
        },
        Date_Reservation: {
          type: "date",
          description: "TODO",
          example: "TODO",
        },
        Heure_reservation: {
          type: "time",
          description: "TODO",
          example: "Canada",
        },
        nombre_personnes: {
          type: "integer",
          description: "TODO",
          example: "5145555655",
        },
        statut: {
          type: "todo",
          description: "TODO",
          example: "JohnDoe@example.com",
        },
        date_creation: {
          type: "date",
          description: "...",
          example: "TODO",
        },
      },
    },
    Reviews: {
      type: Object,
      properties: {
        id: {
          type: "string",
          description: "Restaurant's ID",
          example: "TODO",
        },
        Reservation_ID: {
          type: "string",
          description: "TODO",
          example: "TODO",
        },
        user_id: {
          type: "string",
          description: "Restaurant address",
          example: "1111 Rue Jean",
        },
        Restaurant_ID: {
          type: "string",
          description: "Restaurant ID",
          example: "TODO",
        },
        note: {
          type: "integer",
          description: "TODO",
          example: "TODO",
        },
        commentaire: {
          type: "string",
          description: "Comments",
          example: "Canada",
        },
        date_creation: {
          type: "date",
          description: "Restaurant ...",
          example: "TODO",
        },
      },
    },
  },
};
