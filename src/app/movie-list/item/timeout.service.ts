import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TimeoutService {
  private timer: ReturnType<typeof setTimeout>;

  constructor() {}

  setTimer(countDown: number, cb: Function) {
    this.timer = setTimeout(() => {
      cb();
    }, countDown);
  }

  clearTimer() {
    clearTimeout(this.timer);
  }
}
