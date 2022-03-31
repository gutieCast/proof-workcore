import { PhotoLanding as IPhotoLanding } from "../models/portada";

export interface ILocation { latitud: string, longitud: string }

export interface ISocialLinks {
    facebook: string,
    google: string,
    instagram: string,
    linkedin: string,
    twitter: string,
    youtube: string,
    telegram: string
}

export interface IHomeProps {
    logoBusiness: string;
    nameBusiness: string;
    descriptionBusiness: string;
    photosCarousel: IPhotoLanding[];
    infoBusiness: string[];
    location: ILocation;
    socialLinks: ISocialLinks;
}
