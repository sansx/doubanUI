import { InMemoryDbService } from "angular-in-memory-web-api";
import { Injectable } from "@angular/core";
import { Movie } from "./movie-list/movie"

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes:Movie[] = [
      { id: 11, name: "Dr Nice" },
      { id: 12, name: "Narco" },
      { id: 13, name: "Bombasto" },
      { id: 14, name: "Celeritas" },
      { id: 15, name: "Magneta" },
      { id: 16, name: "RubberMan" },
      { id: 17, name: "Dynama" },
      { id: 18, name: "Dr IQ" },
      { id: 19, name: "Magma" },
      { id: 20, name: "Tornado" }
    ];
    heroes.map(
      e =>
        (e.url = `https://images.weserv.nl/?url=http://img1.doubanio.com/view/photo/s_ratio_poster/public/p2574172427.jpg`)
    );
    return { movie: heroes };
  }

  constructor() {}
  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  getHero(heroes): number {
    return heroes.length > 0
      ? Math.max(...heroes.map(hero => hero.id)) + 1
      : 11;
  }
}
