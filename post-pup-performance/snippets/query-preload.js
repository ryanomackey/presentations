import React, { Component } from 'react';
import gql from 'graphql-tag';
import { withApollo } from 'react-apollo';

const GET_RESOURCE_GROUPS = gql`
  query getResourceGroups($accountId: String!) {
    getResourceGroups(accountId: $accountId) {
      resources {
        id
        name
        created_at
      }
    }
  }
`;

const Global = () => {
  const { children, client, accountId } = this.props;

  client.query({ query: GET_RESOURCE_GROUPS, variables: { accountId } });

  return children;
}

export default withApollo(Global);