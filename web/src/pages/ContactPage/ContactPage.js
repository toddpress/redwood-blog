import {
  FieldError,
  Form,
  Label,
  Submit,
  TextAreaField,
  TextField,
} from '@redwoodjs/forms'

const ContactPage = () => {
  const onSubmit = (data) => {
    console.log('Form Data: %o', data)
  }
  return (
    <Form onSubmit={onSubmit} validation={{ mode: 'onBlur' }}>
      <Label name="name" errorClassName="error">Name</Label>
      <TextField
        name="name"
        errorClassName="error"
        validation={{
          required: true,
        }}
      />
      <FieldError className="error" name="name" />

      <label name="email" errorClassName="error">Email</label>
      <TextField
        name="email"
        errorClassName="error"
        validation={{
          required: true,
          pattern: {
            value: /[^@]+@[^.]+\..+/,
            message: "Please enter a valid email"
          }
        }}
      />
      <FieldError className="error" name="email" />

      <label name="message" errorClassName="error">Message</label>
      <TextAreaField
        name="message"
        errorClassName="error"
        validation={{
          required: true,
        }}
      />
      <FieldError className="error" name="message" />
      <Submit>Save</Submit>
    </Form>
  )
}

export default ContactPage
