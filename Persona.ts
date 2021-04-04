import {Direccion} from './Dirección'
import {Mail} from './Mail'
import {Telefono} from './Teléfono'

export class Persona{
    private nombre:string;
    private apellidos:string;
    private edad:number;
    private dni:string;
    private cumpleanos:string;
    private colorFavorito:string;
    private sexo:string;
    private direccion:Direccion[]=[];
    private emails:Mail[]=[];
    private telefonos:Telefono[]=[];
    private notas:string;
    constructor (a:string,b:string,c:number,d:string,e:string,f:string,g:string, h:Array<Direccion>, i:Array<Mail>, j:Array<Telefono>, k?:string){
        this.nombre=a
        this.apellidos=b
        this.edad=c
        this.dni=d
        this.cumpleanos=e
        this.colorFavorito=f
        this.sexo=g
        this.direccion=h
        this.emails=i
        this.telefonos=j
        this.notas=k
    }
    public getName():string{
        return this.nombre;
    }
    public setName(value:string){
        this.nombre=value;
    }
    public getSurname():string{
        return this.apellidos;
    }
    public setSurname(value:string){
        this.apellidos=value;
    }
    public getAge():number{
        return this.edad;
    }
    public setAge(value:number){
        this.edad=value;
    }
    public getDni():string{
        return this.dni;
    }
    public setDni(value:string){
        this.dni=value;
    }
    public getBirthday():string{
        return this.cumpleanos;
    }
    public setBirthday(value:string){
        this.cumpleanos=value;
    }
    public getFavoriteColor():string{
        return this.colorFavorito;
    }
    public setFavoriteColor(value:string){
        this.colorFavorito=value;
    }
    public getGender():string{
        return this.sexo;
    }
    public setGender(value:string){
        this.sexo=value;
    }
    public getDirection():Array<Direccion>{
        return this.direccion;
    }
    public setDirection(value:Array<Direccion>){
        this.direccion=value;
    }
    public getMail():Array<Mail>{
        return this.emails;
    }
    public setMail(value:Array<Mail>){
        this.emails=value;
    }
    public getTelephone():Array<Telefono>{
        return this.telefonos;
    }
    public setTelephone(value:Array<Telefono>){
        this.telefonos=value;
    }

    public imprimir():string {
        return JSON.stringify(this)
      }
}











