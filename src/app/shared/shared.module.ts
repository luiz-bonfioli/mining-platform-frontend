import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ContextService } from '../core/context/context.service';
import { MenuComponent } from '../core/action-menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ MenuComponent],
  imports: [
    CommonModule,    
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatDialogModule,
    MatButtonModule, 
    MatSelectModule, 
    MatCheckboxModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatChipsModule,
    MatPaginatorModule
  ],
  exports: [    
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatDialogModule,
    MatButtonModule, 
    MatSelectModule,
    MatCheckboxModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatChipsModule,
    MatPaginatorModule,

    MenuComponent
    
  ],
  providers: [ HttpClient, ContextService ]
})
export class SharedModule { }
