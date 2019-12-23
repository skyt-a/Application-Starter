import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
const Page: NextPage = props => {
  const [users, setUsers] = useState([]);
  useEffect(() =>{
  const uri = `http://172.23.129.62:3000/graphql`;
  const client = new ApolloClient({ uri });
  const query = gql`{
    users {
      edges {
        node {
          id
          name
        }
      }
    }
  }`;
 client
  .query({
    query
  })
  .then(result => {
    setUsers(result.data.users.edges.map(edge => edge.node));
  });
})
return <>
  {users.map(user => <div key={user.id}>{user.name}</div>)}
</>;
}

export default Page;