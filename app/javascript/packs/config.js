const readApiUrl = () => {
  switch (process.env.NODE_ENV) {
    case 'development':
      return 'http://localhost:3000';
    case 'staging':
      return 'http://localhost:3000';
    case 'production':
      return 'http://localhost:3000';
    case 'test':
      return 'http://localhost:3000';
    default:
      return 'http://localhost:3000';
  }
};

const config = {
  apiurl: readApiUrl()
};

export default config;
