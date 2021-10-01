const {gql} = require('apollo-server-express');
import {GQL_QUERY} from './query'
import {GQL_MUTATION} from './mutation'

const scheme = {
  getTypeDefs : function(){
    return gql`
    type User {
      id: Int!
      name: String
      email: String
      password: String
    }
    type NoteTag {
      id: Int!
      name: String
    }
    type Category {
      id: Int!
      name: String
    }    
    type Note {
      id: Int!
      title: String
      content: String
      userId: Int! 
      category: Category
      noteTag: [NoteTag]
    }
    type Task {
      id: Int!
      title: String
    }
    ${GQL_QUERY}
    ${GQL_MUTATION}
  `;
  }
}
export default scheme;
