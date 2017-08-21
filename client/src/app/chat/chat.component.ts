import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  	message = '';
    conversation = [];
    socket = null;
 
    constructor(){}

    ngOnInit() {
        
        this.socket = io('http://192.168.1.7:5000');
        this.socket.on('message', function(data) {
        	console.log(this.conversation);
            this.conversation.push(data);
        }.bind(this));
    }
 
    send() {
        this.socket.emit('add-message', {
            'text': this.message
        });
        this.message = '';
    }
 
    keypressHandler(event) {
        if (event.keyCode === 13){
            this.send();
        }
    } 
 
    isNewUserAlert(data){
        return data.userName === '';
    }

}
