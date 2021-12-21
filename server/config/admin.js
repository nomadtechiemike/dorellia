module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '628a77d7db343db86bd12bcbd530f62f'),
  },
});
