import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { FirebaseApp } from 'angularfire2';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { config } from '../Shared/profile.config';
import { ProfileService } from '../Shared/profile.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [AuthService, ProfileService]
})
export class ProfileComponent implements OnInit {

  profiles;

  constructor(private db: AngularFirestore, private profileService: ProfileService, public auth: AuthService) {
    db.firestore.settings({ timestampsInSnapshots: true });
  }

  ngOnInit() {
    let self = this;
    firebase.auth().onAuthStateChanged(function (user) {
      self.profiles = self.profileService.getProfile(user.uid).valueChanges();
    });
  }

}
