import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TotemComponent } from './totem/totem.component';
import { BodyComponent } from './body/body.component';
import { LoginComponent } from './login/login.component';
import { CompteComponent } from './compte/compte.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TotemComponent,
    BodyComponent,
    LoginComponent,
    CompteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
