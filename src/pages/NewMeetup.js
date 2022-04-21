import NewMeetupForm from '../components/meetups/NewMeetupForm';
 function NewMeetup() {  
  async function addMeetupHandler(meetupData) {
    try {
    await fetch(
      'https://tourism-15e28-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    }catch(err) {
      console.log(err)
    }
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
  }
  
  export default NewMeetup;