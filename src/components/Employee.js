function Employee(props) {
   return (
      <>
         <h3>Employee {props.name? props.name : 'Nameless'}</h3>
         <p>{props.role ? props.role : 'No role'}</p>
      </>
   );
}

export default Employee;
