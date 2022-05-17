class Tv {
  brand: string;
  size: number;
  resoluction: string;
  connections: string;

  constructor(b: string, s: number, r: string, c: string) {
    console.log(`Creating TV ${b} ${s}`)
    this.brand = b;
    this.size = s;
    this.resoluction = r;
    this.connections = c;
  }

  turnOn() {
    console.log(`
    brand: ${this.brand}
    size: ${this.size}
    resoluction: ${this.resoluction}
    connections: ${this.connections}
    `);
  }
}

const tv1 = new Tv('Semp Toshiba', 50, 'Full HD', 'HDMI');
const tv2 = new Tv('Sony', 29, '720p', 'HDMI/VHS');
console.log(tv1.brand, tv1.size, tv1.resoluction);
console.log(tv2.brand, tv2.size, tv2.resoluction);
tv1.turnOn();
tv2.turnOn();