import axios from 'axios';

let baseURL;
process.env.NODE_ENV === 'production'
  ? (baseURL = 'here should be your production endpoint')
  : (baseURL = 'http://localhost:3000');

const service = axios.create({withCredentials: true, baseURL});

const MY_SERVICE = {
  test: async () => {
    return await service.get('/');
  },
  signup: async user => {
    return await service.post('/signup', user);
  },
  login: async user => {
    return await service.post('/login', user);
  },
  logOut: async () => {
    window.localStorage.removeItem('user');
    await service.get('/logout');
  },

  edit: async updateUser => {
    return await service.put('/edit', updateUser);
  },
  logUser: loggedUser => {
    window.localStorage.setItem('user', JSON.stringify(loggedUser));
  },
  loggedUser: () => {
    return JSON.parse(window.localStorage.getItem('user'));
  },
  findUsersByName: async (text, skip, limit) => {
    let url = `/user?username=${text}&name=${text}&lastName=${text}`;
    if (skip) {
      url += `skip=${skip}`;
    }
    if (limit) {
      url += `limit=${limit}`;
    }
    return await service.get(url);
  }
};

export default MY_SERVICE;
