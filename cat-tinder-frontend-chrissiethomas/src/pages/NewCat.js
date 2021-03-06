//useState hook must be imported from react.
import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

const NewCat = () => {
    const [success, setSuccess] = useState(false)
    const [cats, setCats] = useState([])
    const [form, setForm] = useState({
      name: '',
      age: '',
      enjoy: ''
    })

    const handleChange = e => {
      //function to set has to be same name as on line 7, it is NOT an inbuilt function.
      setForm({
          //take all the existing form data and,...
          ...form,
          //...add new data to the end as it is typed
          [e.target.name]: e.target.value
      })
    }

    const handleSubmit = e => {
      //prevent page refresh
      e.preventDefault()
      console.log(form)
      setCats(cats => [...cats,form])
      pushCats(form).then(response => setSuccess(true))
    }

    const pushCats = (freshCat) =>  {
      return fetch("http://localhost:3000/cats", {
        body: JSON.stringify(freshCat),
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST"
      })
    }

    return(
      <div>
        <h1 id="new-cat-header">Add New Pet</h1>
        <Form id = "form">
          <FormGroup>
            <Label htmlFor="name" id="name">Name</Label>
            <Input
              type="text"
              name="name"
              onChange={ handleChange }
              value={ form.name }
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="age" id="age">Age</Label>
            <Input
              type="number"
              name="age"
              onChange={ handleChange }
              value={ form.age }
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="enjoy" id="enjoy">Enjoys</Label>
            <Input
              type="text"
              name="enjoy"
              onChange={ handleChange }
              value={ form.enjoy }
            />
          </FormGroup>
        </Form>
        <button id="submit" onClick={ handleSubmit } >Add New Pet</button>
      </div>
    )
}
export default NewCat;
