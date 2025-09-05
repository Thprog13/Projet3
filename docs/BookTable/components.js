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
  },
};
