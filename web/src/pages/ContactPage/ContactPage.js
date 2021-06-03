import {
  FieldError,
  Form,
  Label,
  Submit,
  TextAreaField,
  TextField,
} from '@redwoodjs/forms'
import { Toaster, toast } from 'react-hot-toast'

import { useForm } from 'react-hook-form'
import { useMutation } from '@redwoodjs/web'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`
const ContactPage = () => {
  const formMethods = useForm();
  const onSubmit = (data) => {
    create({ variables: { input: data }})

    console.log('Form Data: %o', data)
  }
  const [create, {loading, error}] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      formMethods.reset();
      toast.success('Thanks for the contact, buck-o!')
    }
  })

  return (
    <>
      <Toaster />
      <Form
        formMethods={formMethods}
        onSubmit={onSubmit}
        validation={{ mode: 'onBlur' }}
        error={error}
      >
        <FormError
          error={error}
          wrapperStyle={{ color: 'red', backgroundColor: 'lavenderblush' }}
        />

        <Label name="name" errorClassName="error">
          Name
        </Label>
        <TextField
          name="name"
          errorClassName="error"
          validation={{
            required: true,
          }}
        />
        <FieldError className="error" name="name" />

        <Label name="email" errorClassName="error">
          Email
        </Label>
        <TextField
          name="email"
          errorClassName="error"
          validation={{
            required: true,
            pattern: {
              value: /[^@]+@[^.]+\..+/,
              message: 'Please enter a valid email',
            },
          }}
        />
        <FieldError className="error" name="email" />

        <Label name="message" errorClassName="error">
          Message
        </Label>
        <TextAreaField
          name="message"
          errorClassName="error"
          validation={{
            required: true,
          }}
        />
        <FieldError className="error" name="message" />
        <Submit disabled={loading}>Save</Submit>
      </Form>
    </>
  )
}

export default ContactPage
