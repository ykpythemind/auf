const readApiUrl = () => {
  let url = '';
  switch (process.env.NODE_ENV) {
    case 'development':
      url = 'http://localhost:3000';
      break;
    case 'staging':
      url = 'http://localhost:3000';
      break;
    case 'production':
      url = 'http://localhost:3000';
      break;
    case 'test':
      url = 'http://localhost:3000';
      break;
    default:
      url = 'http://localhost:3000';
  }
  return url;
};

const config = {
  apiurl: readApiUrl()
};

export default config;
