let baseURL = 'https://greendash-core.onrender.com/api/v1';

if (import.meta.env.MODE === 'development') {
  console.log('Running in development mode');
  baseURL = 'http://localhost:3000/api/v1';
} else if (import.meta.env.MODE === 'production') {
  baseURL = 'https://greendash-core.onrender.com/api/v1';
  console.log('Running in production mode');
}

export default baseURL;
