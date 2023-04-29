import { Airport } from "./airport/Airport";
import { Flight } from "./flight/Flight";
import { Booking } from "./flight/booking/Booking";
import { Passenger } from "./passenger/Passengers";
import { Meal } from "./flight/booking/Booking";
import { Attendant } from "./human/Attendant";
import { Gender } from "./Employee/Employee";
import { Pilot } from "./human/Pilot";

let airport = new Airport("Phnom Penh International Airport", "Phnom Penh");


// add customer into booking
let phin = new Passenger("phin", "lek", "pp", "0183242");
let fligh1 = new Flight("Angkor-Air", 1 ,700,"Phnom Penh International Airport","17,05,2023", "2:00 PM", "3:00 AM");
let fligh2 = new Flight("Lanmei Airlines", 2 ,500,"Phnom Penh International Airport","17,05,2023", "7:00 PM", "10:00 AM");
// add meal into booking
let meal1 = new Meal("Pizza","20$");
let meal2 = new Meal("Humberger","10$");
//
let employee1 = new Attendant("Soriya","Ho",700,Gender.Female,"attendant","02/10/2001");
let employee2 = new Attendant("Dariya","Thorn",800,Gender.Female,"attendant","03/12/2002");
let pilot1 = new Pilot("Nong","Phloeut",1000,Gender.Male,"pilot","17/10/2002");
let pilot2 = new Pilot("Syla","Loub",9000,Gender.Male,"pilot","17/7/2003");



let booking1 = new Booking(phin, 1);
booking1.addMeal(meal1);
booking1.addMeal(meal2);
booking1.addPassenger(phin);

airport.addBooking(booking1);

fligh1.addAttendant(employee1);
fligh1.addAttendant(employee2);
fligh1.addPilot(pilot1);
fligh1.addPilot(pilot2);

fligh2.addAttendant(employee1);
fligh2.addAttendant(employee2);
fligh2.addPilot(pilot1);
fligh2.addPilot(pilot2);

airport.addFlight(fligh1);
airport.addFlight(fligh2);




console.log(airport);
console.log(booking1.getMeal());
console.log(fligh1.getSalaryOfAllemployees());



