export class Mail{
    private tipo:string
    private direccion:string
    constructor (a:string, b:string){
        this.tipo=a
        this.direccion=b
    }

    public getTipoEmail():string{
        return this.tipo;
    }
    public setTipoEmail(value:string){
        this.tipo=value;
    }
    public getDireccionEmail():string{
        return this.direccion;
    }
    public setDireccionEmail(value:string){
        this.direccion=value;
    }
}
