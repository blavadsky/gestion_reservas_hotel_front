export interface ReservaDTO {
    id?: number,
    hotelId?: string;
    fechaInicio?: Date;
    fechaFin?: Date;
    capacidadHotel?: number;
    usuario?: string;
}