export interface BusinessContent {
    ID_CONTENIDO: string,
    TIPO_CONTENIDO: string,
    CATEGORIA: string,
    TITULO: string,
    CLICK: string,
    CONTENIDO: string,
    FECHA_ALTA: string,
    COMENTARIOS: string[],
    ADJUNTOS: string[]
}

export interface Categories {
    CATEGORIA: string,
    CANTIDAD: string,
}

export interface ClickBusinessContent {
    ID_CONTENIDO: string,
    TITULO: string,
    CLICK?: string,
}

export interface BusinessContentAPI {
    records: BusinessContent | BusinessContent[],
    otras: string[];
    categorias: Categories[];
    ultimas: ClickBusinessContent[];
    masleidas: ClickBusinessContent[];
}