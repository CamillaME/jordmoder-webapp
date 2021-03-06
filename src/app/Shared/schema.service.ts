import { Injectable } from '@angular/core';
import { Schema } from '../Models/schema.model';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, snapshotChanges } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';

@Injectable()
export class SchemaService {

    constructor(private db: AngularFirestore){}


}