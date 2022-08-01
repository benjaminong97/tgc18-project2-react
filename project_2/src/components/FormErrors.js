import React from 'react';
import { Container } from 'react-bootstrap';

export const FormErrors = ({formErrors}) =>
  <Container className='formErrors'>
    {Object.keys(formErrors).map((fieldName, i) => {
      if(formErrors[fieldName].length > 0){
        return (
          <p key={i}>{fieldName.slice(3)} {formErrors[fieldName]}</p>
        )        
      } else {
        return '';
      }
    })}
  </Container>