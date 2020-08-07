import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { EmployeeService } from './employee.service'

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
import { CustomHerosPipe } from './custom-heros.pipe';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

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
    CustomPipesComponent,
    CustomHerosPipe,
    EmployeeListComponent,
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
