import './App.css'
import Header from './components/Header';

function App() {

  const handleAddUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const user = {name, email, phone};

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId){
        alert("Users Added Successfully")
      }
    })
    form.reset()
  };

  return (
    <>
    <Header />
      <h2>Add Users</h2>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder='type your name' /><br />
        <input type="email" name="email" placeholder='type your email' /><br />
        <input type="number" name="phone" placeholder='type your phone number' /><br />
        <input type="submit" value="Add User" />
      </form>
    </>
  )
}

export default App
