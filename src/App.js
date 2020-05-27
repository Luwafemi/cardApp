/* eslint-disable jsx-a11y/img-redundant-alt */
//  eslint-disable jsx-a11y/img-redundant-alt
import React from "react";
import axios from "axios";
// import "./App.css";

const testData = [
 
];


function CardList(props) {
  return (
    <>
      {props.profiles.map((foo) => (
        <Card key={foo.id} {...foo} />
      ))}
    </>
  );
}

class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <>
        <div className='cards'  style={{color:'whitesmoke', marginTop: 10,marginLeft:10, display:'block'}}>
          <div style={{ border: "1px solid white", display: "inline-block" }}>
            <img
              style={{ height: 100, width: 100 }}
              src={profile.avatar_url}
              alt="image"
            />
          </div>
          <div style={{ display: "inline-block", marginLeft: 9 }}>
            <div style={{ font: "20px " }}>{profile.name} </div>
            <div  style={{ font: "10px bold" }}>{profile.company}</div>
          </div>
        </div>
      </>
    );
  }
}

class Form extends React.Component {
  state = { userName: "" };
  handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await axios.get(
      `https://api.github.com/users/${this.state.userName}`
    );
    this.props.onSubmit(resp.data);
    this.setState({ userName: "" });
  };

  render() {
    return (
      <div style={{ marginBottom: 30,width:'90%' }}>
        <div className="row">
          <div className="col-9 col-sm-7 col-md-6 col-lg-6 col-xl-5">
            <form
              onSubmit={this.handleSubmit}
              action=""
              style={{ marginTop: 20 }}
            >
              <div className="form-group">
                <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder="GitHub username"
                  style={{ marginLeft: 10, marginBottom: 10 }}
                  required
                  value={this.state.userName}
                  onChange={(event) =>
                    this.setState({ userName: event.target.value })
                  }
                />
                <button
                  style={{ marginLeft: 10, marginBottom: 0 }}
                  className="btn btn-success btn-sm"
                >
                  Add card
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    profiles: testData,
  };
  addNewProfile = (profileData) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };
  render() {
    return (
      <>
        <div
          // class="container"
          style={{color:'white', marginLeft: "2rem", marginTop: 10, fontSize: 20,fontWeight:900 }}
        >
          GitHub Cards App
        </div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </>
    );
  }
}

export default App;
