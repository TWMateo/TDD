

class HotelReservations {
	constructor() {
	  this.reservations = [];
	}
  
	addReservation(reservation) {
	  if (this.isReservationValid(reservation)) {
		this.reservations.push(reservation);
		return true;
	  }
	  return false;
	}
  
	isReservationValid(newReservation) {
	  
	  for (const existingReservation of this.reservations) {
		if (this.doesOverlap(existingReservation, newReservation)) {
		  return false;
		}
	  }
	  
	  return this.isDateRangeValid(newReservation.startDate, newReservation.endDate);
	}
  
	doesOverlap(res1, res2) {
	  const start1 = new Date(res1.startDate);
	  const end1 = new Date(res1.endDate);
	  const start2 = new Date(res2.startDate);
	  const end2 = new Date(res2.endDate);
	  return (start1 < end2) && (start2 < end1);
	}
  
	isDateRangeValid(startDate, endDate) {
	  const start = new Date(startDate);
	  const end = new Date(endDate);
	  const now = new Date();
	  return start < end && start >= now;
	}
  }
  
  module.exports = HotelReservations;
  