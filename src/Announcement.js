import React, {Component} from 'react';
import './Announcement.css'

export default class Announcement extends Component {
    render() {
        return (
            <div className={this.props.winner ? "visibleAnnouncement" : "hidden"}>
                <h2>Game Over</h2>
            </div>
        )
    }
}