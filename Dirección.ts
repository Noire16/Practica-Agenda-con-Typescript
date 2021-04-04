export class Direccion{
    private calle:string;
    private numero:number;
    private piso:number;
    private letra:string;
    private cp:number;
    private poblacion:string;
    private provincia:string;
    constructor(a:string, b:number, c:number, d:string, e:number, f:string, g:string){
        this.calle=a 
        this.numero=b
        this.piso=c
        this.letra=d
        this.cp=e
        this.poblacion=f
        this.provincia=g
    }
    public getStreet():string{
        return this.calle;
    }
    public setStreet(value:string){
        this.calle=value;
    }
    public getNumber():number{
        return this.numero;
    }
    public setNumber(value:number){
        this.numero=value;
    }
    public getFloor():number{
        return this.piso;
    }
    public setFloor(value:number){
        this.piso=value;
    }
    public getLetter():string{
        return this.letra;
    }
    public setLetter(value:string){
        this.letra=value;
    }
    public getCP():number{
        return this.cp;
    }
    public setCP(value:number){
        this.cp=value;
    }
    public getCity():string{
        return this.poblacion;
    }
    public setCity(value:string){
        this.poblacion=value;
    }
    public getProvince():string{
        return this.provincia;
    }
    public setProvince(value:string){
        this.provincia=value;
    }
}

