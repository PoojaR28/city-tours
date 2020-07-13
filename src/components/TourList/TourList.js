import React, { Component } from 'react';
import Tour from "../Tour";
import "./tourlist.scss";
import {tourData} from "../../tourData";

export default class TourList extends Component {
    state={
        tours:tourData
    };


removeTour=(id)=>{
    const {tours}=this.state;
    const sortedTour=tours.filter(tour=>true.id!==id);
    this.setState({
        tours:sortedTour
    });
    
}

    render() {
       // console.log(this.state.tours);
       const {tours}=this.state;
        
        return (
            <div className="tourList">
                {tours.map(tour=>(<Tour key={tour.id} tour={tour} removeTour={this.removeTour}></Tour>))}
                
            </div>
        )
    }
}
