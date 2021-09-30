
export const GQL_QUERY = `
  type Query {
    hello: String
    user(id: Int): User
    users: [User]    
    userValid(email: String!, password: String!): User
    task(id: Int): Task
    tasks: [Task]    
    note(id: Int): Note
    notes: [Note]
  }
`;