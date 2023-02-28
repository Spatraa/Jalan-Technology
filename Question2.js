class CarServiceStation {
    servicePrices = new Map([
        ['BS01', { name: 'Basic Servicing', hatchback: 2000, sedan: 4000, suv: 5000 }],
        ['EF01', { name: 'Engine Fixing', hatchback: 5000, sedan: 8000, suv: 10000 }],
        ['CF01', { name: 'Clutch Fixing', hatchback: 2000, sedan: 4000, suv: 6000 }],
        ['BF01', { name: 'Brake Fixing', hatchback: 1000, sedan: 1500, suv: 2500 }],
        ['GF01', { name: 'Gear Fixing', hatchback: 3000, sedan: 6000, suv: 8000 }],
    ]);

    generateBill(type, serviceCodes) {
        let total = 0;
        let services = '';
        for (const code of serviceCodes) {
            const service = this.servicePrices.get(code);
            const price = service[type];
            total += price;
            services += `${service.name} - ₹ ${price}\n`;
        }
        if (total > 10000) {
            services += 'Complimentary Cleaning\n';
        }
        return `Type of Car - ${type}\n${services}Total Bill - ₹ ${total}`;
    }
}

const station = new CarServiceStation();

console.log(station.generateBill('hatchback', ['BS01', 'EF01']));
