import { Formik, Form, Field } from 'formik';

const MaterialEditorForm = ({ onSubmit }) => {
  const handleSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };
  // console.log(onSubmit);
  return (
    <Formik initialValues={{ title: '', link: '' }} onSubmit={handleSubmit}>
      {props => {
        // посмотреть все ПРОПС ФОРМИКА
        // console.log(props);
        return (
          <Form>
            <label>
              Описание
              <Field name="title" type="text" />
            </label>
            <label>
              Ссылка
              <Field type="text" name="link" />
            </label>
            {/* кнопка не активна при поиске */}
            <button type="submit" disabled={props.isSubmitting}>
              Добавить материал
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default MaterialEditorForm;
