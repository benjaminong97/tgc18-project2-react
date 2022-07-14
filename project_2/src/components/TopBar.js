import React from 'react';
import moiraiLogo from "../images/moirai.png"

export default class TopBar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <img src={moiraiLogo} width="40px" />
                </div>
            </React.Fragment>
        )
    }
}