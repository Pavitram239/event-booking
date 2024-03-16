import axios from 'axios';

const customFetch = axios.create({
  '/api': {
    target: 'http://localhost:5100/api',
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/api/, ''),
  },
});

export default customFetch;
