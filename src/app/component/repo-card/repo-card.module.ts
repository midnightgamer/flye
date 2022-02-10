import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RepoCardComponent} from "./repo-card.component";
import {TopicModule} from "../topic/topic.module";


@NgModule({
  declarations: [RepoCardComponent],
  imports: [
    CommonModule,
    TopicModule
  ],
  exports: [RepoCardComponent]
})
export class RepoCardModule {
}
