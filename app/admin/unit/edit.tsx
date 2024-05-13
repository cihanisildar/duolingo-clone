import {
  SimpleForm,
  Edit,
  TextInput,
  required,
  NumberInput,
  ReferenceInput,
} from "react-admin";

export const UnitEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <NumberInput source="id" validate={[required()]} label="id" />
        <TextInput source="title" validate={[required()]} label="title" />
        <TextInput
          source="description"
          validate={[required()]}
          label="description"
        />
        <ReferenceInput source="courseId" reference="courses" />
      </SimpleForm>
    </Edit>
  );
};
