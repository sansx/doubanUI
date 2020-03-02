import { Component, OnInit } from "@angular/core";
import { ListService } from "./list.service";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.styl"],
  providers: [ListService]
})
export class MovieListComponent implements OnInit {
  list: any[];
  show: boolean = true
  constructor(private listS: ListService) {}

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void {
    this.listS.getHero().subscribe((e: any[]) => {
      console.log(e);
      this.list = e;
    });
  }

  showModal(bol:boolean) {
    console.log("get bool:", bol);
    this.show = bol
  }
}
