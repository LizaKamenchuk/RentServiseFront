export class User {
  id: number | undefined
  login: string | undefined
  password: string | undefined
  name: string | undefined
  lastname: string | undefined

  constructor(id?: number,login?: string, password?: string, name?: string, lastname?: string) {
    this.id = id;
    this.login = login;
    this.name = name;
    this.lastname = lastname;
    this.password = password;
  }
}
