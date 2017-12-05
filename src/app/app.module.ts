import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

// Import the Animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import the ButtonsModule
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LoginCompComponent } from './login-comp/login-comp.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginCompComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,

        // Register the modules
        BrowserAnimationsModule,
        ButtonsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
