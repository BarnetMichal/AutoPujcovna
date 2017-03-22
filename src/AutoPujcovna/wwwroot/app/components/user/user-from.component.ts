import { Component, OnInit, Injectable } from '@angular/core';
import { UserService } from '../../core/services/userService/user.service';
import { User } from './user';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Column } from '../../core/common/Column';


@Component({
  selector: 'user-from',
  templateUrl: './app/components/user/user-from.component.html',
  providers: [UserService]
})
@Injectable()
export class UserFormComponent implements OnInit {
  private userService: UserService = null;

  private users: Array<User> = null;
  public user: FormGroup;
  public columns: Array<Column> = [];
  private fb: FormBuilder = null;

  constructor(private _userService: UserService, fb: FormBuilder) {
    this.userService = _userService;

    this.columns.push(new Column('FirstName', 'first name'));
    this.columns.push(new Column('LastName', 'last name'));

    this.user = fb.group({
      ID: 0,
      FirstName: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      LastName: [null, Validators.compose([Validators.required])]
    });
  }



  ngOnInit() {
    this.getusers();

    

  }

  private onSubmit(user: User) {
    this.userService.saveUser(user);
    this.getusers();
  }

  private getusers() {
    this.userService.getUsers((data) => {
      this.users = data;
    });
  }


}