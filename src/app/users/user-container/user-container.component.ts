import { Component, OnInit } from '@angular/core';
import {UserInfo, UserModel} from '../../models/users.model';
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit{

  public users: UserModel[];
   currentUser: UserModel ;
  constructor() {

    this.currentUser;
  }

  updateUser(username: string, email: string,jobName:string){
    this.currentUser.email = email;
    this.currentUser.username = username;
    this.currentUser.info.jobTitle=jobName;
  }

  ngOnInit() {
    console.log('User Container Init');
    // this.currentUser = new UserModel(0, 'johndoe', 'johndoe@gmail.com',
    //   new UserInfo('John', 'Doe', 'Clerk', 'http://authenticgoods.co/wrapbootstrap/themes/sparks/img/team/avatar-male.png'));

      this.users =  [
        new UserModel(0, 'johndoe', 'johndoe@gmail.com',
          new UserInfo('John', 'Doe', 'Clerk', 'http://authenticgoods.co/wrapbootstrap/themes/sparks/img/team/avatar-male.png')
        ),
        new UserModel(1, 'janedoe', 'janedoe@gmail.com',
          new UserInfo('Jane', 'Doe', 'Developer', 'http://brandonmathis.com/projects/fancy-avatars/demo/images/avatar_female_dark_on_clear_200x200.png')
        ),
        new UserModel(2, 'johnsmith', 'johnsmith@gmail.com',
          new UserInfo('John', 'Smith', 'Sales', 'http://authenticgoods.co/wrapbootstrap/themes/sparks/img/team/avatar-male.png')
        ),
        new UserModel(3, 'janesmith', 'janesmith@gmail.com',
          new UserInfo('Jane', 'DBA', 'Developer', 'http://brandonmathis.com/projects/fancy-avatars/demo/images/avatar_female_dark_on_clear_200x200.png')
        ),
  
  
      ]
  }
}
