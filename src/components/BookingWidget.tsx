import './BookingWidget.css';
import { Calendar, Users } from 'lucide-react';

export default function BookingWidget() {
  return (
    <div className="booking-widget-wrapper">
      <div className="booking-widget glass">
        <div className="booking-field">
          <label>Select Date</label>
          <div className="booking-input-group">
            <input type="date" className="booking-input" />
            <Calendar className="booking-icon" size={18} />
          </div>
        </div>
        
        <div className="booking-divider"></div>
        
        <div className="booking-field">
          <label>Group Size</label>
          <div className="booking-input-group">
            <select className="booking-input">
              <option>1-2 People</option>
              <option>3-5 People</option>
              <option>6+ People</option>
            </select>
            <Users className="booking-icon" size={18} />
          </div>
        </div>
        
        <div className="booking-action">
          <button className="btn btn-primary booking-btn">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
