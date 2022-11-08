
import { 
  Edit,
  SimpleForm,
  
TextInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// -------------------------------------------------------------

export default function EditProduct(props: any) {
return (
    <Edit>
      <SimpleForm redirect="list">
        <TextInput source="name" variant="outlined"   />
<ReferenceInput label="order" source="orderid" reference="order">
        <AutocompleteInput variant="outlined" /* optionText="order"   */ />
      </ReferenceInput>
    

      </SimpleForm>
    </Edit>
  );
}