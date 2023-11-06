import {Injectable, Injector} from '@angular/core';
import {ComponentType, Overlay} from "@angular/cdk/overlay";
import {Car} from "../../entitys/car/car";
import {DialogRef} from "../../dialog-ref";
import {ComponentPortal} from "@angular/cdk/portal";
import {ErrorResponse} from "../../dtos/response/errorResponse";

@Injectable({
  providedIn: 'root'
})
export class DialogErrorService {

  constructor(private overlay: Overlay,private injector: Injector) { }

  open<T>(component: ComponentType<T>, response: ErrorResponse): DialogRef{
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
        {provide: ErrorResponse, useValue: response}]
    });
    console.log(injector);
    // Attach component portal to the overlay
    const portal = new ComponentPortal(component, null, injector);
    overlayRef.attach(portal);
    return dialogRef;
  }
}
