import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { StructuralComponent } from './structural/structural.component';
import { ChildComponent } from './child/child.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    EventBindingComponent,
    StructuralComponent,
    ChildComponent,
    PipesDemoComponent,
    CustomPipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
