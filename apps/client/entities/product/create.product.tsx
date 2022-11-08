
import { 
  Create,
  SimpleForm,
  
TextInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// ------------------------------------------------

export default function CreateProduct(props: any) {
    return (
      <Create>
        <SimpleForm redirect="list">
          <TextInput source="name" variant="outlined"   />
<ReferenceInput label="order" source="orderid" reference="order">
        <AutocompleteInput variant="outlined" /* optionText="order"   */ />
      </ReferenceInput>
    

        </SimpleForm>
      </Create>
    );
  }
