export class  Telefono {
    private tipo:string
    private numero:number
   
    constructor (a:string, b:number){
        this.tipo=a
        this.numero=b
    }
    public gettipoTelefono():string{
        return this.tipo;
    }
    public settipoTelefono(value:string){
        this.tipo=value;
    }
    public getnumeroTelefono():number{
        return this.numero;
    }
    public setnumeroTelefono(value:number){
        this.numero=value;
    }
}
