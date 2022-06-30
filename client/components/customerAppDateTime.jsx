import React, {useState} from 'react';
import DateTimePicker from 'react-datetime-picker';
// import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle';
const CustomerAppDateTime = (props) => {
  // const [value, onChange] = useState(new Date());
  const [value, onChange] = useState(new Date());

  // const { appointmentDate, appointmentTime } = this.props;

  return (
    <div className='container border border-3 rounded-3 mt-2 p-2 border-info shadow'>
      <div>
      Select Appointment:  <DateTimePicker onChange={onChange} value={value} />
      </div>
    </div>
  );
};

export default CustomerAppDateTime;
