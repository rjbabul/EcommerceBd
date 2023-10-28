import { Product } from "./product.model";

export class GetAllProductApiResponseModel {
    public statusCode?:number;
    public message?: string ;
    public data? :Product[];
    public common?:number;
}
