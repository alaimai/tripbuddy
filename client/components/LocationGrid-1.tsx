import { useState } from 'react'
import AddToTripModal from './AddTripModal'
import { FormattedAttraction, TripAttraction } from '../../models/attraction'
import useTrips from '../hooks/useTrip'
import { useAuth0 } from '@auth0/auth0-react'

const LocationGrid = ({ data }) => {
  const [showModal, setShowModal] = useState(false)
  const [selectedAttraction, setSelectedAttraction] = useState<
    FormattedAttraction | TripAttraction | null
  >(null)

  const { user, getAccessTokenSilently } = useAuth0()

  const auth0Id = user?.sub

  const {
    data: trips,
    refetch,
    add,
    addAttraction: create,
    delAttraction,
  } = useTrips(getAccessTokenSilently)

  const handleRandonClick = (
    attraction: FormattedAttraction | TripAttraction,
  ) => {
    setSelectedAttraction(attraction)
    setShowModal(true)
  }
  const handleUserClick = (id: number) => {
    delAttraction.mutate(id)
  }
  const handleSelect = (tripData: { trip_id: number; trip_name: string }) => {
    if (tripData.trip_id === -2) {
      //console.log('in location grip tripData',tripData)
      add.mutate(
        { trip_name: tripData.trip_name, auth0Id },
        {
          onSuccess: (newTrip) => {
            //console.log('in location grip newTrip',newTrip)
            create.mutate({
              trip_id: newTrip.id,
              attraction: selectedAttraction!,
            })
            refetch()
          },
        },
      )
    } else {
      create.mutate({
        trip_id: tripData.trip_id,
        attraction: selectedAttraction!,
      })
      console.log('in location grip add in existing trip', {
        trip_id: tripData.trip_id,
        attraction: selectedAttraction!,
      })
      refetch()
    }
    setShowModal(false)
  }

  return (
    <div className="location-grid">
      {data?.map((attraction) => (
        <div
          key={attraction.id}
          className="location-card"
          onClick={() => {
            if (!attraction.trip_id) {
              handleRandonClick(attraction)
            }
          }}
        >
          <img
            src={attraction.imageUrl}
            alt={attraction.name}
            className="location-image"
          />
          <div className="location-overlay">
            <div className="location-info">
              <h3>{attraction.name}</h3>
              <p>{attraction.userRating}</p>
              {attraction.trip_id && (
                <button onClick={() => handleUserClick(attraction.id)}>
                  ❌
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
      {showModal && selectedAttraction && auth0Id && (
        <AddToTripModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onSelect={handleSelect}
          trips={trips.listOfTrips}
        />
      )}
    </div>
  )
}

export default LocationGrid
