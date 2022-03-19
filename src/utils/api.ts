import axios from "axios";

interface ParamsAPI {
  p: string;
  a: string;
  e: string;
  ub: string
}

let p = '';
let a = '';
let e = '';
let ub = '';

const api = axios.create({
  baseURL: 'workcore.net/apiv2/web/',
});

//Hardcorded proof

a = '124';
e = '28';
ub = 'http://workcore.net'

const getDataBusiness = () => {
  p = 'empresa';
  api.get(`${p}/?a=${a}&e=${e}&ub=${ub}`)
    .then((response => {
      const { apellido, email, nombre } = response.data;
      // setUser({
      //   apellido: apellido,
      //   email: email,
      //   nombre: nombre,
      // })
    }))
}


export { api };