import React from "react";
import Ticket from "./Ticket.jsx"

function TicketList(props){
    return (
        <Ticket
        location='MC5'
        names="Thato and Haley"
        issue="Firebase won't save record"
        />
    )
}

export default TicketList;