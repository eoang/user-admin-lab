export class UserModel {

    constructor(
      public id: number=0,
      public username: string= '',
      public email: string= '',
      public info: UserInfo= undefined
    ){}
  };
  
  export class UserInfo{
  
    constructor(
      public firstName: string= '',
      public lastName: string= '',
      public jobTitle: string= '',
      public avatar: string= '',
      public phoneNumber: string= ''
    ){}
  };