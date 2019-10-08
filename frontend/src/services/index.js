import axios from 'axios';

let baseURL;
process.env.NODE_ENV === 'production'
  ? (baseURL = 'here should be your production endpoint')
  : (baseURL = 'http://localhost:3000');

const service = axios.create({withCredentials: true, baseURL});
const addSkipLimit = (url, skip, limit) => {
  let result = url;
  if (skip) {
    result += `&skip=${skip}`;
  }
  if (limit) {
    result += `&limit=${limit}`;
  }
  return result;
};

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
  edit: async user => {
    return await service.put('/edit', user);
  },

  logOut: async () => {
    window.localStorage.removeItem('user');
    await service.get('/logout');
  },
  logUser: loggedUser => {
    window.localStorage.setItem('user', JSON.stringify(loggedUser));
  },
  loggedUser: () => {
    return JSON.parse(window.localStorage.getItem('user'));
  },
  findUsersByName: async (text, skip, limit) => {
    let url = `/user?username=${text}&name=${text}&lastName=${text}`;
    url = addSkipLimit(url, skip, limit);
    return await service.get(url);
  },
  getMessages: async (unread, skip, limit) => {
    return await service.get(addSkipLimit(`/message${unread ? '?unread' : ''}`, skip, limit));
  },

  uploadFile: async data => {
    return await service({
      method: 'post',
      url: '/file',
      data,
      config: {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    });
  }
};

export default MY_SERVICE;
