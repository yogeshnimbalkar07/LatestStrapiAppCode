module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf', // or 'mongoose' for MongoDB
      settings: {
        client: 'postgres',  // Change this to 'mysql', 'sqlite', etc., based on your database
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi'),
        username: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi_password'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {
        ssl: env.bool('DATABASE_SSL', false), // You might need to adjust SSL settings based on your database setup
      },
    },
  },
});
