import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { Exercise1Component } from './exercise1/exercise1.component';
import { HeaderComponent } from './exercise1/header/header.component';
import { ContentComponent } from './exercise1/content/content.component';
import { SidebarComponent } from './exercise1/sidebar/sidebar.component';
import { FooterComponent } from './exercise1/footer/footer.component';
import { Exercise2Component } from './exercise2/exercise2.component';
import { HeaderEx2Component } from './exercise2/header-ex2/header-ex2.component';
import { FooterEx2Component } from './exercise2/footer-ex2/footer-ex2.component';
import { CarouselComponent } from './exercise2/carousel/carousel.component';
import { ProductsComponent } from './exercise2/products/products.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { DirectiveComponent } from './directive/directive.component';
import { StructuralComponent } from './directive/structural/structural.component';
import { AttributeComponent } from './directive/attribute/attribute.component';
import { HightlightDirective } from './my-directive/hightlight.directive';
import { ButtonHoverDirective } from './my-directive/button-hover.directive';
import { InteractionComponent } from './interaction/interaction.component';
import { ChildComponent } from './interaction/child/child.component';
import { MovieListComponent } from './interaction/movie-list/movie-list.component';
import { MovieItemComponent } from './interaction/movie-item/movie-item.component';

// Decorator
@NgModule({
  declarations: [
    // Nơi khai báo các component, directive, pipe được quản lý bởi module này
    AppComponent,
    HelloComponent,
    Exercise1Component,
    HeaderComponent,
    ContentComponent,
    SidebarComponent,
    FooterComponent,
    Exercise2Component,
    HeaderEx2Component,
    FooterEx2Component,
    CarouselComponent,
    ProductsComponent,
    DataBindingComponent,
    DirectiveComponent,
    StructuralComponent,
    AttributeComponent,
    HightlightDirective,
    ButtonHoverDirective,
    InteractionComponent,
    ChildComponent,
    MovieListComponent,
    MovieItemComponent,
  ],
  imports: [
    // Nơi khai báo các module khác được sử dụng trong module này
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [], // Nơi khai báo các service cần dùng cho module này
  bootstrap: [AppComponent], // Nơi khai báo component chạy đầu tiên của module này
})
export class AppModule {}
