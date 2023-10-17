import React from 'react'
import MainScreen from '../../components/MainScreen'
import { Accordion, Badge, Button, Card,  } from 'react-bootstrap'
import {Link} from "react-router-dom";
import notes from '../../data/notes';
const MyNotes = () => {
  
  const deleteHandler =(id)=>{
    if(window.confirm(`Are you sure?`));
  }
  return (
    <MainScreen title="Welcome Back..">
      <Link to="createnote"><Button variant="primary" className='ms-4 mb-2'>Create Note</Button></Link>
        {
          notes.map((note)=>(
            <Accordion>
<Card className='m-4'>
        <Card.Header className='d-flex'>
          <span style={{
            color:'black',
            textDecoration:"none",
            flex:1,
            cursor:'pointer',
            alignSelf:"center",
            fontSize:18,
          }}>
            <Accordion.Toggle as={Card.Text} variant="link" eventKey='0'>
              {note.title}
              </Accordion.Toggle>
              </span>
          <div><Button variant="warning" href={`/note/${note._id}`}>Edit</Button><Button variant='danger' className='mx-2' onClick={()=>deleteHandler(note.id)}>Delete</Button></div>
        </Card.Header>
        <Accordion.Collapse eventKey='0'>
        <Card.Body>
          <h4>Category = <Badge>{note.category}</Badge></h4>
        <blockquote className="blockquote mb-0">
          <p>
           {note.content}
          </p>
          <footer className="blockquote-footer">
          Created on - date
          </footer>
        </blockquote>
        </Card.Body>
        </Accordion.Collapse>
      </Card>
          </Accordion>
          ))
        }

      
    </MainScreen>
  )
}

export default MyNotes