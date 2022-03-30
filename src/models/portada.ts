export interface PhotoLanding {
    ID_FOTO: string;
    URL: string;
    DESCRIPCION: string;
}

export interface PhotoLandingAPI {
    records: PhotoLanding[];
}