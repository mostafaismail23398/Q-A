import React, { useState } from 'react'
import { Row , Form , Button, Col } from 'react-bootstrap'
import { question }  from '../components/data'

const FormInput = ({onAdd , notify}) => {
  const [qu, setQu] = useState("")
  const [an, setAn] = useState("")
    const addNewItem = () => {
      if ( qu === "" || an ===""){
        notify("من فضل اكمل البيانات" , "Error");
        return;
      }
          question.push({ id: Math.random() , q : qu , a : an});
          setQu('');
          setAn('');
          onAdd();
          
       console.log(question);
    }
  return (
    <Row className='my-3'>
        <Col sm="5">
        <Form.Control value={qu} onChange={(e) => setQu(e.target.value)} type="text" placeholder="ادخل السؤال" />
        
        </Col>

      <Col sm="5">
        <Form.Control  value={an} onChange={(e) => setAn(e.target.value)} type="text" placeholder="ادخل الجواب" />
        </Col>
      <Col sm="2">
      <button onClick={addNewItem} className='btn-color w-100 ' type="submit">
       اضافة
      </button>
      </Col>
    </Row>
  )
}

export default FormInput