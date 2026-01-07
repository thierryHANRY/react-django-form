import Button from '@mui/material/Button';

export default function MyButField(props) {

    const {label} = props;

  // This component renders a basic Material-UI button
  // You can customize the button by passing props like 'variant', 'color', etc.
  // Example: <BasicButtons variant="contained" color="primary">Click Me</BasicButtons>

  return (
      <Button 
      variant="contained" 
      className={"myform"}
      >{label}</Button>
  );
}
