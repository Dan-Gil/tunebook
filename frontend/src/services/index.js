import axios from 'axios';

let baseURL;
process.env.NODE_ENV === 'production'
  ? (baseURL = 'https://tune-book.herokuapp.com')
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
  edit: async form => {
    return await service.put('/user', form);
  },
  logOut: async () => {
    window.localStorage.removeItem('user');
    await service.get('/logout');
  },
  logUser: loggedUser => {
    if (loggedUser) {
      window.localStorage.setItem('user', JSON.stringify(loggedUser));
    }
  },
  loggedUser: () => {
    return JSON.parse(window.localStorage.getItem('user'));
  },
  findUsersByName: async (text, skip, limit) => {
    let url = `/user?username=${text}&name=${text}&lastName=${text}`;
    url = addSkipLimit(url, skip, limit);
    return await service.get(url);
  },
  getUser: async id => {
    return await service.get(`/user/${id}`);
  },
  getInstruments: async () => {
    return await service.get('/instrument');
  },
  getGenres: async () => {
    return await service.get('/genre');
  },
  getMessages: async (unread, skip, limit) => {
    return await service.get(addSkipLimit(`/message${unread ? '?unread=1' : ''}`, skip, limit));
  },
  deleteMessages: async id => {
    return await service.delete(`/message/${id}`);
  },
  sendMessage: async (to, message) => {
    const data = {
      message,
      to,
      from: MY_SERVICE.loggedUser()._id
    };
    return await service.post('/message', data);
  },
  markMessagesRead: async () => {
    return await service.put('/message/read', {});
  },
  getProfile: async () => {
    return await service.get('/profile');
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
