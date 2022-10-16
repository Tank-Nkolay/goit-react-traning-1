import { Formik, Form, Field } from 'formik';
import styled from '@emotion/styled';

// для стилизации элементов ФОРМИК
// т потом делаем замену
const Input = styled(Field)`
  font-size: 36px;
`;

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
              <Input name="title" type="text" />
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
