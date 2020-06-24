import React, { useState, useEffect } from 'react'
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Button } from 'reactstrap'
import cats from '../cats'

const CatIndex = (props) => {
    useEffect(() => { grabCats() }, [])
    
    async function grabCats () {
        try {
          let response = await fetch("http://localhost:3000/cats")
          let data = await response.json();
          if(response.status === 200) {
            console.log("data", data)
            setCats(data)
        } 
      } catch (err){
        console.log(err)
      }
    }
    const [allCats, setCats] = useState(cats)
        return(
        <React.Fragment>
            <ListGroup>
                { allCats && allCats.map((cat, index) => {
                    return(
                    <ListGroupItem key= { index }>
                    <ListGroupItemHeading>{ cat.name }</ListGroupItemHeading>
                    <ListGroupItemText>Age: { cat.age }</ListGroupItemText>
                    <ListGroupItemText>Enjoy: {cat.enjoy} </ListGroupItemText>
                     </ListGroupItem>
                    )
                })}
            </ListGroup>
        <Button className="btn btn-info mb-2 float-left" href="/newcat">Add A Pet</Button>
        </React.Fragment>
        )
}

export default CatIndex;