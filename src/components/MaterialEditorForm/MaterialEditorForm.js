import { Formik, Form, Field } from 'formik';

const MaterialEditorForm = () => {
  return (
    <Formik
      initialValue={{ title: '', link: '' }}
      onSubmit={xxx => console.log(xxx)}
    >
      <Form>
        <label>
          Описание
          <Field name="title" />
        </label>
        <label>
          Ссылка
          <Field name="link" />
        </label>

        <button type="submit">Добавить материал</button>
      </Form>
    </Formik>
  );
};

export default MaterialEditorForm;
