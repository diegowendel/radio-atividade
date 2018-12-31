import React from 'react';

import { ControlLabel, FormControl, FormGroup, HelpBlock } from 'react-bootstrap';

const FormItem = ({ id, label, help, ...props }) => {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props}>
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormControl>
    </FormGroup>
  );
};

export default FormItem;
