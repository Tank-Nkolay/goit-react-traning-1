import { Formik, Form, Field } from 'formik';

const MaterialEditorForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };
  // console.log(onSubmit);
  return (
    <Formik initialValues={{ title: '', link: '' }} onSubmit={handleSubmit}>
      <Form>
        <label>
          Описание
          <Field name="title" type="text" />
        </label>
        <label>
          Ссылка
          <Field type="text" name="link" />
        </label>
        <button type="submit">Добавить материал</button>
      </Form>
    </Formik>
  );
};

export default MaterialEditorForm;
