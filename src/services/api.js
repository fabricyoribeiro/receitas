import axios from "axios";

/*
rodar com json-server --watch -d 180 --host 192.168.1.114 db.json

*/ 

const api = axios.create({
  baseURL: 'http://192.168.1.114:3000/'
})

export default api