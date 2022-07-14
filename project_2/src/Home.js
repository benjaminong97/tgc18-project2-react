import React from "react";

export default class Home extends React.Component {
    state = {
        'active': 'listings'
    }

    renderContent() {
        if (this.state.active === "listings") {
          return (
            <React.Fragment>
              <Listing />
            </React.Fragment>
          );
        } else if (this.state.active === "create") {
          return (
            <React.Fragment>
              <AddNew />
            </React.Fragment>
          );
        }
      }


    render() {
        return <React.Fragment>
            <div className="container">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <button className="nav-link active" aria-current="page">
                            Home
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link">Create</button>
                    </li>
                </ul>
                {this.renderContent()}
            </div>
        </React.Fragment>
    }
}