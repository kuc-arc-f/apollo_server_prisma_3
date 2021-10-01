
export const GQL_MUTATION = `
type Mutation {
  addTask(title: String!): Task
  updateTask(id: Int!, title: String!): Task
  deleteTask(id: Int!): Task
  addUser(name: String!, email: String!, password: String!): User
  noteAdd(title: String!, content: String!): Note
  noteUpdate(id: Int!, title: String!, content: String!): Note
  noteTagAdd(noteId: Int!, name: String!): NoteTag
  noteDelete(id: Int!): Note
  categoryAdd(noteId: Int!, name: String!): Category
}
`;
