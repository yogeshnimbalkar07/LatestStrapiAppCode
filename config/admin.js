module.exports = ({ env }) => ({
  auth: {
    secret: env('qy9gtpSIOn6l5A2GE0rwRPejzySWXrjGHW1D+t81Iz4='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
