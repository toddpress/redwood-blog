import { UserInputError } from "@redwoodjs/api"
import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

const validate = (input) => {
  if (input.email && !input.email.match(/[^@]+@[^.]+\..+/)) {
    throw new UserInputError("Can't create new contact", {
      messages: {
        email: ['is not formatted like an email address'],
      },
    })
  }
}

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const contacts = () => {
  return db.contact.findMany()
}

export const createContact = ({ input: data }) => {
  validate(data);
  return db.contact.create({ data })
}