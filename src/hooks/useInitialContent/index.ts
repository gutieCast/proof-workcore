import { useState, useEffect } from "react";

//Login component that setting isAuth
//Hook hardcoded to get 'a' 'e' & 'ub'
import { useAuth } from '../useAuth'

// Custom hook to call api for routes
import { useEmpresa } from "../useEmpresa";
import { usePortada } from "../usePortada";

//Import special types
import { PhotoLanding } from "../../models/portada";

//Custom hook
const useInitialContent = () => {
    //Destructuring query params
    const { a, e, ub } = useAuth();

    //Destructuring calls API from custom hooks
    const { getBusinessData } = useEmpresa();
    const { getPhotosLanding } = usePortada();

    //States to set with GET calls
    //Empresa
    const [logoBusiness, setLogoBusiness] = useState<string>('');
    const [nameBusiness, setNameBusiness] = useState<string>('');
    const [descriptionBusiness, setDescriptionBusiness] = useState<string>('');
    const [infoBusiness, setInfoBusiness] = useState<string[]>([]);
    const [latitud, setLatitud] = useState<string>('');
    const [longitud, setLongitud] = useState<string>('');
    const [locationBusiness, setLocationBusiness] = useState<{ latitud: string, longitud: string }>({ latitud, longitud });
    const [facebook, setFacebook] = useState<string>('');
    const [google, setGoogle] = useState<string>('');
    const [instagram, setInstagram] = useState<string>('');
    const [linkedin, setLinkedin] = useState<string>('');
    const [twitter, setTwitter] = useState<string>('');
    const [youtube, setYoutube] = useState<string>('');
    const [telegram, setTelegram] = useState<string>('');
    const [socialLinks, setSocialLinks] = useState<{
        facebook: string,
        google: string,
        instagram: string,
        linkedin: string,
        twitter: string,
        youtube: string,
        telegram: string
    }>({
        facebook,
        google,
        instagram,
        linkedin,
        twitter,
        youtube,
        telegram
    });
    //Portada
    const [photosCarousel, setPhotosHero] = useState<PhotoLanding[]>([]);


    //Trigger with data in once render
    useEffect(() => {
        const allPromises = async () => {
            try {
                const allPromises = Promise.all([
                    getBusinessData(a, e, ub),
                    getPhotosLanding(a, e, ub)
                ]);
                const [
                    businessData,
                    photosLanding
                ] = await allPromises;


                //Empresa
                setLogoBusiness(businessData.logo);
                setNameBusiness(businessData.nombre);
                setDescriptionBusiness(businessData.descripcion)
                setInfoBusiness([
                    businessData.url,
                    businessData.domicilio,
                    businessData.email,
                    businessData.telefono,
                    businessData.moneda_simbolo,
                    businessData.decimales,
                    businessData.mostrar_precioventa
                ]);
                setFacebook(businessData.facebook);
                setGoogle(businessData.google);
                setInstagram(businessData.instagram);
                setLinkedin(businessData.linkedin);
                setTwitter(businessData.twitter);
                setYoutube(businessData.youtube);
                setTelegram(businessData.telegram)
                setSocialLinks({
                    facebook,
                    google,
                    instagram,
                    linkedin,
                    twitter,
                    youtube,
                    telegram
                });
                setLatitud(businessData.latitud);
                setLongitud(businessData.longitud);
                setLocationBusiness({ latitud, longitud });

                //Portada
                setPhotosHero(photosLanding);


            } catch (error: any) {
                console.error(error.message)
            };
        }
        allPromises();
    }, []);
    return {
        logoBusiness,
        nameBusiness,
        photosCarousel,
        descriptionBusiness,
        infoBusiness,
        locationBusiness,
        socialLinks
    }
}

export { useInitialContent }