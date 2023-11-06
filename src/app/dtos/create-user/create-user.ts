export class CreateUser {
  login: string | undefined
  password: string | undefined
  confirmPassword: string | undefined
  name: string | undefined
  lastname: string | undefined

  constructor(login?: string, password?: string,confirmPassword?:string, name?: string, lastname?: string) {
    this.login = login;
    this.name = name;
    this.lastname = lastname;
    this.password = password;
    this.confirmPassword = confirmPassword;
  }
}
