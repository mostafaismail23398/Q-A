import {Col, Container, Row} from 'react-bootstrap';
import React, { useState } from 'react';
import FormInput from './components/FormInput';
import QAList from './components/QAList';
import {question} from './components/data';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [data, setData] = useState(question)
  const addItem = () => {
      localStorage.setItem("items" , JSON.stringify([...question]))
      setData([...question])
      notify("تم الاضافة بنجاح" , "Success")
  }

  const deleteAllItems = () => {
    localStorage.removeItem("items")
    question.splice(0 , question.length);
    setData([]);
    notify("تم حذف الكل بنجاح" , "Success")
  }
  const deleteOneItem = (items) => {
    localStorage.setItem("items" , JSON.stringify([...items]))
     setData([...items])
     notify("تم السوال بنجاح" , "Success")
      if(items.length <= 0)
      {
        deleteAllItems(); 
      }

  }

  const notify = (message , type) => {
    if(type==="Error")
    toast.error(message)
    else if(type==="Success")
    toast.success(message)
  };
  return (
    <div className="font text-center color-body" >
      <Container className='p-5'>
        <Row className='justify-conent-center'>
          <Col sm="4">
            <div className='fs-3 text-center py-2'>اسئلة وجواب شائعة </div>
          </Col>
          <Col sm="8">
            <FormInput onAdd={addItem} notify={notify}/>
            <QAList data={data} deleteOneItem={deleteOneItem} />
           {
            localStorage.getItem("items") != null ?  ( <button onClick={deleteAllItems} className='btn-color w-100 py-3 my-2'>مسح الكل</button>) : null
           }
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </div>
  );
}

export default App;
