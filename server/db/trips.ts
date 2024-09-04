import connection from './connection'
import { Trip } from '../../models/trip'

// Fetch all trips
export async function getAllTrips(): Promise<Trip[]> {
  const tripData = await connection('trips').select('*')
  return tripData as Trip[]
}

// Fetch trip by ID
export async function getTripById(id: number): Promise<Trip | undefined> {
  const tripData = await connection('trips').where({ id }).first()
  return tripData as Trip | undefined
}

// Fetch trips by user ID (through users_trips join)
export async function getTripsByUserId(userId: number): Promise<Trip[]> {
  const trips = await connection('users_trips')
    .join('trips', 'users_trips.trip_id', 'trips.id')
    .select('trips.*')
    .where('users_trips.user_id', userId)
  return trips as Trip[]
}

// Add a new trip
export async function addTrip(newTrip: Trip): Promise<Trip> {
  const [trip] = await connection('trips').insert(newTrip).returning('*')
  return trip as Trip
}

// Delete a trip by ID
export async function deleteTripById(id: number): Promise<number> {
  return connection('trips').where({ id }).del()
}

// Update a trip by ID
export async function updateTripById(id: number, updates: Partial<Trip>): Promise<Trip | undefined> {
  const [trip] = await connection('trips').where({ id }).update(updates).returning('*')
  return trip as Trip | undefined
}