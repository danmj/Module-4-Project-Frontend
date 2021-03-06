import React, { Component } from 'react'
import ListingCard from '../Components/ListingCard.js';
import BookingDetails from '../Components/BookingDetails.js';

class BookingContainer extends Component {
  render() {
    return(
      <div className="booking-bg">
      <ListingCard listing={this.props.listing} display={this.props.display} />
      <BookingDetails listing={this.props.listing} searchObj={this.props.searchObj} confirmBooking={this.props.confirmBooking}
      />
      </div>
    )
  }
}

export default BookingContainer

// add in listingCard component
