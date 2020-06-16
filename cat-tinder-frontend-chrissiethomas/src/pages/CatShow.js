import React, { Component } from 'react'
import { ListGroup } from 'reactstrap'

class CatShow extends Component{
    render(){ 
        let obj = this.props.cats.find(o => o.id === 3 )
        return(
        <React.Fragment>
                <ListGroup>
                  <h4>{ obj.name }</h4>
                  <small>{ obj.age } - { obj.enjoys }</small>
                 </ListGroup>
        </React.Fragment>
        )
    }
}
export default CatShow;