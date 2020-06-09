import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  jwt: any;
  email: any;
  role: string;
  public host:string="http://localhost:8000/";
  public host1:string="http://localhost:8000/reset_password/";
  public host2:string="http://localhost:8000/core-users/clear_token/";
  public authenticated: boolean;
  public authenticatedUser;
  private users=[
    {username:"admin", password:"1234",roles:['USER','ADMIN']},
    {username:"user1", password:"1234",roles:['USER']},
    {username:"user2", password:"1234",roles:['USER']}
  ]

  constructor(private http: HttpClient) {
  }

  login(username:string,password:string){
    let user;
    this.users.forEach(u=>{
      if(u.username===username && u.password===password){
        user=u;
      }
    })
    if(user){
      this.authenticated=true;
      this.authenticatedUser=user;
      localStorage.setItem("authenticatedUser",JSON.stringify(this.authenticatedUser));
    }
    else{
      this.authenticated=false;
    }
  }

  loadUser(){
    let user=localStorage.getItem('authenticatedUser');
    if(user){
      this.authenticatedUser=JSON.parse(user);
      this.authenticated=true;
    }
  }



  isAuthenticated(){
    return this.authenticated;
  }
  isAuthenticated1(){
    console.log(this.role);
    return this.jwt;
  }
  logout(){
    this.authenticated=false;
    this.authenticatedUser=undefined;
    localStorage.removeItem('authenticatedUser');
  }
  login1(data){
    console.log(data);
    return this.http.post(this.host+"my_login" , data , { observe : 'response'});
  }
  logout1(id: any){
    console.log(this.host2+id);
    return this.http.get(this.host2+id);
  }
  resetpassword(data){

    return this.http.post(this.host+"reset_password" , data);
  }
  createregister(data){
    console.log(data);
    return this.http.post(this.host+"my_register" , data );
  }
  createregisteradmin(data){
    console.log(data);
    return this.http.post(this.host+"my_registerAdmin" , data );
  }
  forgetservice(data){
    return this.http.post(this.host+"forgotten_password" , data );

  }
  login2(){
    return this.http.get(this.host);
  }
  saveToken(jwt){
    localStorage.setItem('token' , jwt);
    this.jwt=jwt;


  }
  saveRole(role){
    localStorage.setItem('role' , role);
    let my_role =localStorage.getItem(role);


  }
  saveId(id){
    localStorage.setItem('id' , id);
    let my_id =localStorage.getItem(id);
    console.log(my_id)


  }

  isAdmin(role){
    return role == 'ROLE_USER';
  }
  isUser(role){
    console.log(role);
    return role == 'ROLE_USER';
  }
  isAdmin1(){
    if(this.authenticatedUser){
      return this.authenticatedUser.roles.indexOf("ADMIN")>-1;
    }
    else return false;
  }
}

