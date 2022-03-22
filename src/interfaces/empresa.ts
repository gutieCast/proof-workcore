export interface BussinessDataAPI {
    id_empresa: string,
    nombre: string,
    domicilio: string,
    telefono: string,
    email: string,
    url: string,
    facebook: string,
    google: string,
    instagram: string,
    linkedin: string,
    twitter: string,
    youtube: string,
    telegram: string,
    latitud: string,
    longitud: string,
    logo: string,
    descripcion: string,
    moneda_simbolo: string,
    decimales: string,
    mostrar_precioventa: string
}

export interface ResponseBusinessDataAPI {
    records: BussinessDataAPI;
}