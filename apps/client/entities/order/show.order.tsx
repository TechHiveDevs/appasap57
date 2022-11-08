
import { 
  Show,
  SimpleShowLayout,
  
NumberField,
DateField,
TextField,
ReferenceField,
} from "react-admin";

// ------------------------------------------------

export default function ShowOrder(props: any) {
return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
<TextField source="address" />
<NumberField source="price" />
<ReferenceField source="userid" reference="user" />
<DateField source="createdAt" />

      </SimpleShowLayout>
    </Show>
  );
}