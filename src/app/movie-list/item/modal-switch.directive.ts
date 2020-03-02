import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { TimeoutService } from "./timeout.service";

@Directive({
  selector: "[appModalSwitch]"
})
export class ModalSwitchDirective {
  @Output() showModal = new EventEmitter<boolean>();

  constructor(private el: ElementRef, private tm: TimeoutService) {}

  @HostListener("mouseenter") onMouseEnter() {
    this.tm.setTimer(1000, () => this.showModal.emit(true));
  }

  @HostListener("mouseout") onMouseOut() {
    this.tm.clearTimer()
  }
}
