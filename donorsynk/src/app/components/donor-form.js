

export default function DonorAppointmentForm() {

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="donor-form bg-white p-4 w-6/12">
      <h1>Medical Appointment Request Form</h1>
      <form>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          required
        /><br /><br />

        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          required
        /><br /><br />

        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          name="time"
          required
        /><br /><br />

        <label htmlFor="bloodtype">Blood Type:</label>
        <input
          type="text"
          id="bloodtype"
          name="bloodtype"
          required
        /><br /><br />

        <label htmlFor="fullname">Full Name:</label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          required
        /><br /><br />

        <label htmlFor="governmentid">Government ID:</label>
        <input
          type="text"
          id="governmentid"
          name="governmentid"
          required
        /><br /><br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
        /><br /><br />

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          required
        /><br /><br />

        <label htmlFor="weight">Weight (kg):</label>
        <input
          type="number"
          id="weight"
          name="weight"
          required
        /><br /><br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
