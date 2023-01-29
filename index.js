class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  describe() {
    return '${this.make} offers ${this.model}.';
  }
}

class Brand {
  constructor(make) {
    this.make = make;
    this.vehicles = [];
  }

  addPlayer(vehicle) {
    if (vehicle instanceof vehicle) {
      this.vehicles.push(vehicle);
    } else {
      throw new Error('You can only add an instance of Player. Argument is not a player: ${player}');
    }
  }

  describe() {
    return '${this.make} has ${this.vehicles.length} vehicles.';
  }
}

class Menu {
    constructor() {
       this.brands = [];
       this.selectedBrand = null;
    }

    start() {
      let selection = this.showMainMenuOptions();
       while (selection != 0) {
        switch (selection) {
          case '1':
            this.createBrand();
            break;
          case '2':
            this.viewBrand();
            break;
          case '3':
            this.deleteBrand();
            break;
          case '4': 
            this.displayBrand(); 
            break;
          default:
              selection = 0;
       }
       selection = this.showMainMenuOptions();
    }

    alert('Goodbye!);')
}

  showMainMenuOptions() {
    return prompt(`
      0) exit
      1) create new this.brands
      2) view brand
      3) delete brand
      4) display all brands
    `);
  }

  showBrandMenuOptions(brandinfo) {
    return prompt(`
      0) back
      1) create vehicle
      2) delete vehicle
      -----------------------
      ${brandinfo}
    `);

  }

  displayBrands() {
    let makeString = '';
    for (let i = 0; i < this.brands.length; i++) {
      brandString += i + ') ' + this.Brands[i].make + '\n';
    }
    alert(brandString);
  }
  
  createBrand() {
    let make = prompt('Enter make for new brand:');
    this.brands.push(new Brand(make));
  }

  view Brand() {
    let index = prompt('Enter the index of the brand you wish to view:');
    if (index > -1 && index < this.brands.length) {
      this.selectedBrand = this.brands[index];
      let description = 'Brand make: ' + this.selectedBrand.make + '\n';

      for (let i = 0; i < this.selectedBrand.vehicles.length; i++) {
        description += i + ') ' + this.selectedBrand.vehicles[i].make
          + ' - ' + this.selectedBrand.vehicles[i].model + '\,';
      }

      let selection = this.showBrandMenuOptions(description);
      switch (selection) {
        case '1':
          this.createVehicle();
          break;
        case '2' :
          this.deleteVehicle();
      }
    }
  }
}

let menu = new menu();
menu.start();


