
import { 
  Show,
  SimpleShowLayout,
  
NumberField,
DateField,
TextField,
ReferenceField,
} from "react-admin";

// ------------------------------------------------

export default function ShowProduct(props: any) {
return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
<TextField source="name" />
<ReferenceField source="orderid" reference="order" />
<DateField source="createdAt" />

      </SimpleShowLayout>
    </Show>
  );
}