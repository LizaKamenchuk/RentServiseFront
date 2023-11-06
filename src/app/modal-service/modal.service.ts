import {Component, Injectable, Injector} from '@angular/core';
import {Overlay, ComponentType} from '@angular/cdk/overlay'
import {ComponentPortal} from '@angular/cdk/portal'
import {DialogRef} from "../dialog-ref";
import {Car} from "../entitys/car/car";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private overlay: Overlay,private injector: Injector) { }

  open<T>(component: ComponentType<T>, car: Car): DialogRef{
      const positionStrategy = this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically();


      const overlayRef = this.overlay.create({
        positionStrategy,
        hasBackdrop: true,
        backdropClass: 'overlay-backdrop',
        panelClass: 'overlay-panel'
      });

    const dialogRef = new DialogRef(overlayRef);
    const injector = Injector.create({
      parent: this.injector,
      providers: [{ provide: DialogRef, useValue: dialogRef },
        {provide: Car, useValue: car}]
    });
      console.log(injector);
    // Attach component portal to the overlay
    const portal = new ComponentPortal(component, null, injector);
    overlayRef.attach(portal);
    return dialogRef;
  }
}
