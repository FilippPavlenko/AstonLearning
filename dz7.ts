class Vehicle {
    public brand: string;
    public model: string;
    public year: number;
    protected speed: number; 

    constructor(brand: string, model: string, year: number, speed: number = 0) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.speed = speed;
    }

    accelerate(amount: number): void {
        this.speed += amount;
        console.log(`Speed increased to ${this.speed}`);
    }

    brake(amount: number): void {
        this.speed -= amount;
        if (this.speed < 0) this.speed = 0; 
        console.log(`Speed decreased to ${this.speed}`);
    }

    info(): void {
        console.log(`Vehicle Info: Brand - ${this.brand}, Model - ${this.model}, Year - ${this.year}, Speed - ${this.speed}`);
    }
}

class Car extends Vehicle {
    public fuelType: string;

    constructor(brand: string, model: string, year: number, speed: number, fuelType: string) {
        super(brand, model, year, speed);
        this.fuelType = fuelType;
    }

    refuel(): void {
        console.log(`Refueling with ${this.fuelType}`);
    }
}

class ElectricCar extends Car {
    private batteryLevel: number;

    constructor(brand: string, model: string, year: number, speed: number, fuelType: string, batteryLevel: number) {
        super(brand, model, year, speed, fuelType);
        this.batteryLevel = batteryLevel;
    }

    get getBatteryLevel(): number {
        return this.batteryLevel;
    }

    set setBatteryLevel(level: number) {
        if (level >= 0 && level <= 100) {
            this.batteryLevel = level;
        } else {
            console.log("Battery level must be between 0 and 100.");
        }
    }

    charge(amount: number): void {
        this.batteryLevel += amount;
        if (this.batteryLevel > 100) this.batteryLevel = 100; 
        console.log(`Battery charged to ${this.batteryLevel}%`);
    }

    refuel(): void {
        console.log(`Charging the electric car. Battery level: ${this.batteryLevel}%`);
    }
}