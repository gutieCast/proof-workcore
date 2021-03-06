//EMPRESA





//ACERCA DE




//PRODUCTOS

export interface Product {
    ID_PRODUCTO: string;
    TIPO_PRODUCTO: string;
    NOMBRE: string;
    CLICK: string;
    CONTENIDO: string;
    CATEGORIA: string;
    MARCA: string;
    STOCK: string;
    UNIDAD_MEDIDA: string;
    PRECIO_VENTA: string;
    FOTO: string;
    COMENTARIOS: string[];
    ADJUNTOS: any[];
    FOTOS: string[];
}

export interface CategoryProduct {
    CATEGORIA: string;
    CANTIDAD: string;
}

export interface BrandProduct {
    MARCA: string;
    CANTIDAD: string;
}

export interface ProductTracking {
    ID_PRODUCTO: string;
    NOMBRE: string;
    CLICK?: string;
}

export interface ResponseProducts {
    records: Product[];
    otras: string[];
    categorias: CategoryProduct[];
    marcas: BrandProduct[];
    ultimas: ProductTracking[];
    masleidas: ProductTracking[];
}

//SERVICIOS

export interface ResponseServices {
    records: any[];
    otras: string[];
    categorias: string[];
    ultimas: string[];
    masleidas: string[];
    adjuntos?: string[]
}

//NOVEDADES

export interface ResponseNovelty {
    records: any[];
    otras: string[];
    categorias: string[];
    ultimas: string[];
    masleidas: string[];
}

//FOTOGALERÍA

export interface PhotoGallery {
    ID_FOTO: string;
    URL: string;
    DESCRIPCION: string;
}

export interface PhotoGalleryCategory {
    CATEGORIA: string;
    CANTIDAD: string;
}

export interface ResponsePhotoGallery {
    records: PhotoGallery[];
    categorias: PhotoGalleryCategory[];
}

//PORTADA



//CONTACTO FORM

export interface Contact {
    NOMBRE: string,
    EMAIL: string,
    TELEFONO: string,
    MENSAJE: string
}

//COMENTARIOS PARA POST

export interface Comment {
    NOMBRE: string,
    EMAIL: string,
    TELEFONO: string,
    MENSAJE: string,
    TIPO_CABEZA: string,
    ID_CABEZA: string,
}

//ADJUNTOS

export interface ResponseAttacheds {
    records: any[]
}

// FOTOS

export interface Photo {
    ID_FOTO: string;
    URL: string;
    DESCRIPCION: string;
}

export interface PhotoCategory {
    CATEGORIA: string;
    CANTIDAD: string;
}

export interface ResponsePhoto {
    records: Photo[];
    categorias: Photo[];
}
