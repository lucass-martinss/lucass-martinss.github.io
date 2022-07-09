import * as React from 'react';
import PropTypes from 'prop-types';
import { IMaskInput } from 'react-imask';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import "./inputs.css"

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="00000-000"
        
       
        onAccept={(value) => onChange({ target: { name: props.name, value } })}
        
      />
    );
  });
  
  TextMaskCustom.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };
  
  
  
  

export default function CepTextField(props) {
    
    return(
        
     <FormControl >
     
        <OutlinedInput
          className='CepText'
          placeholder='00000-000'
          help
          name="textmask"
          id="formatted-text-mask-input"
          inputComponent={TextMaskCustom}
          {...props}
        />
     </FormControl>
      

    )
}