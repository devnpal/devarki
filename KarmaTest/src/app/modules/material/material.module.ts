import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

import { MatIconModule } from '@angular/material/icon';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';


const materialmodule = [MatSidenavModule, MatIconModule, MatToolbarModule, MatSelectModule, MatButtonModule
]

@NgModule({
 
  imports: [
    materialmodule
  ],
  exports: [
    materialmodule
  ]
})
export class MaterialModule { }
