
const HotelReservations = require('./hotelReservations');

describe('HotelReservations', () => {
  let reservations;

  beforeEach(() => {
    reservations = new HotelReservations();
    // Establece la fecha actual para las pruebas
    jest.useFakeTimers('modern').setSystemTime(new Date('2023-01-01'));
  });

  afterEach(() => {
    // Restablece los timers después de cada prueba
    jest.useRealTimers();
  });

  it('should allow adding a valid reservation', () => {
    const reservation = { startDate: '2024-01-01', endDate: '2024-01-05', guestName: 'John Doe' };
    expect(reservations.addReservation(reservation)).toBe(true);
  });

  it('should not allow adding a reservation with an end date before the start date', () => {
    const reservation = { startDate: '2024-01-10', endDate: '2024-01-05', guestName: 'Jane Smith' };
    expect(reservations.addReservation(reservation)).toBe(false);
  });

  it('should not allow adding a reservation that overlaps with an existing reservation', () => {
    const reservation1 = { startDate: '2024-02-01', endDate: '2024-02-05', guestName: 'Alice Brown' };
    const reservation2 = { startDate: '2024-02-04', endDate: '2024-02-07', guestName: 'Bob Jones' };
    reservations.addReservation(reservation1);
    expect(reservations.addReservation(reservation2)).toBe(false);
  });

  it('should not allow adding a reservation that starts in the past', () => {
    const reservation = { startDate: '2022-12-31', endDate: '2023-01-05', guestName: 'Carl King' };
    expect(reservations.addReservation(reservation)).toBe(false);
  });

  it('should allow adding multiple non-overlapping reservations', () => {
    const reservation1 = { startDate: '2024-03-01', endDate: '2024-03-05', guestName: 'Diana Queen' };
    const reservation2 = { startDate: '2024-03-06', endDate: '2024-03-10', guestName: 'Evan Prince' };
    expect(reservations.addReservation(reservation1)).toBe(true);
    expect(reservations.addReservation(reservation2)).toBe(true);
    expect(reservations.reservations).toHaveLength(2);
  });

  it('should reject a reservation that starts before and ends during an existing reservation', () => {
    const existingReservation = { startDate: '2024-04-10', endDate: '2024-04-15', guestName: 'Fiona Castle' };
    const newReservation = { startDate: '2024-04-05', endDate: '2024-04-12', guestName: 'George Knight' };
    reservations.addReservation(existingReservation);
    expect(reservations.addReservation(newReservation)).toBe(false);
  });

  it('should reject a reservation that starts during and ends after an existing reservation', () => {
    const existingReservation = { startDate: '2024-05-10', endDate: '2024-05-15', guestName: 'Helen Squire' };
    const newReservation = { startDate: '2024-05-12', endDate: '2024-05-20', guestName: 'Ian Archer' };
    reservations.addReservation(existingReservation);
    expect(reservations.addReservation(newReservation)).toBe(false);
  });

  it('should reject a reservation that completely overlaps an existing reservation', () => {
    const existingReservation = { startDate: '2024-06-10', endDate: '2024-06-15', guestName: 'Jane Ranger' };
    const newReservation = { startDate: '2024-06-08', endDate: '2024-06-18', guestName: 'Kyle Explorer' };
    reservations.addReservation(existingReservation);
    expect(reservations.addReservation(newReservation)).toBe(false);
  });

});
