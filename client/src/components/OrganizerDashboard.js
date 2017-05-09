import React, { PropTypes } from 'react';
import { PENDING, APPROVED } from '../constants/eventAttendingStatus';
import EventVolunteerRow from '../components/EventVolunteerRow';
import EventRow from '../components/EventRow';

const OrganizerDashboard = ({ data, approveEventMusician, rejectEventMusician }) => {
  const eventVolunteers = data.reduce((prev, curr) => prev.concat(curr.eventvolunteers), []);
  const pendingEventVolunteers = eventVolunteers
    .filter(eventVolunteer => eventVolunteer.status === PENDING)
    .map(eventVolunteer => <EventVolunteerRow
      eventVolunteer={eventVolunteer}
      isCurrentlyPending
      key={eventVolunteer.id}
      approveEventMusician={approveEventMusician}
      rejectEventMusician={rejectEventMusician}
    />);
  const approvedEventVolunteers = eventVolunteers
    .filter(eventVolunteer => eventVolunteer.status === APPROVED)
    .map(eventVolunteer => <EventVolunteerRow eventVolunteer={eventVolunteer}
      key={eventVolunteer.id}
    />);
  const eventsWithoutVolunteers = data
    .filter(event => event.eventvolunteers.length === 0)
    .map(event => <EventRow
      event={event}
      key={event.id}
    />);

  return (
    <div className="row">
      <div className="small-10">
        <h3>Dashboard</h3>
        <br />
        <div className="card">
          <div className="card-divider">
            <h5>Pending Request</h5>
          </div>
          <div className="card-section">
            <table>
              <tbody>
                {pendingEventVolunteers}
              </tbody>
            </table>
          </div>
        </div>
        <div className="card">
          <div className="card-divider">
            <h5>Upcoming Performances</h5>
          </div>
          <div className="card-section">
            <table>
              <tbody>
                {approvedEventVolunteers}
              </tbody>
            </table>
          </div>
        </div>
        <div className="card">
          <div className="card-divider">
            <h5>Events Without Volunteers</h5>
          </div>
          <div className="card-section">
            <table>
              <tbody>
                {eventsWithoutVolunteers}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

OrganizerDashboard.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    eventVolunteers: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired
    }))
  })).isRequired,
  approveEventMusician: PropTypes.func.isRequired,
  rejectEventMusician: PropTypes.func.isRequired
};

OrganizerDashboard.defaultProps = {
  data: []
};


export default OrganizerDashboard;
