export class User {
    id: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    token?: string;

    constructor(username: string, password: string, email: string,
                firstName: string, lastName: string) {
      this.username = username;
      this.password = password;
      this.email = email;
      this.firstName = firstName;
      this.lastName = lastName;  
    }
}