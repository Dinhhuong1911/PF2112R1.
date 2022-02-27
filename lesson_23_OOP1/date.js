class Date {
    day;
    month;
    year;
    constructor(d, m, y) {
        this.day = d;
        this.month = m;
        this.year = y;
    }
    getDay() {
        return this.day;
    }
    getMonth() {
        return this.month;
    }
    getYear() {
        return this.year;
    }
    setDay(set_d) {
        this.day = set_d;
    }
    setMonth(set_m) {
        this.day = set_m;
    }
    setYear(set_y) {
        this.day = set_y;
    }
    setDate(d, m, y) {
        this.day = d;
        this.month = m;
        this.year = y;
    }

    toString() {
        return this.day + "/" + this.month + "/" + this.year;
    }

}

let date1 = new Date(12, 3, 1990);
let date2 = new Date(01, 01, 2022);

console.log(date1.getDay());
date1.setDay(5);
date2.setDate(12, 12, 2022);
date2.getDay();
date2.getMonth();
date2.getYear();
document.write(date2.toString());