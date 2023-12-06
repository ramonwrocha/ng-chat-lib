import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { NgChatLibComponent } from './ng-chat-lib.component';
import { NgChatFriendsListComponent } from './components/ng-chat-friends-list/ng-chat-friends-list.component';
import { NgChatOptionsComponent } from './components/ng-chat-options/ng-chat-options.component';
import { NgChatWindowComponent } from './components/ng-chat-window/ng-chat-window.component';
import { CommonModule } from '@angular/common';
import { EmojifyPipe } from './pipes/emojify.pipe';
import { LinkfyPipe } from './pipes/linkfy.pipe';
import { SanitizePipe } from './pipes/sanitize.pipe';
import { GroupMessageDisplayNamePipe } from './pipes/group-message-display-name.pipe';

@NgModule({
  declarations: [
    NgChatLibComponent,
    NgChatFriendsListComponent,
    NgChatOptionsComponent,
    NgChatWindowComponent,
    GroupMessageDisplayNamePipe,
    EmojifyPipe,
    LinkfyPipe,
    SanitizePipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgChatLibComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class NgChatLibModule { }
