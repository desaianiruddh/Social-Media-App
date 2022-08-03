import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { gql, useMutation } from '@apollo/client';
import { FETCH_POSTS_QUERY } from '../util/graphql';

const DeleteButton = ({ postId }) => {
  const [deletePost, { error }] = useMutation(DELETE_POST_MUTATION, {
    variables: { postId },
    update(proxy, result) {
      alert(result.data.deletePost);
      const data = proxy.readQuery({
        query: FETCH_POSTS_QUERY,
      });
      console.log('>>', data);
      proxy.writeQuery({
        query: FETCH_POSTS_QUERY,
        data: {
          getPosts: data.getPosts.filter((post) => post.id !== postId),
        },
      });
    },
  });
  if (error) {
    alert(error.graphQLErrors[0].message);
  }
  return (
    <Button as="div" labelPosition="right" floated="right" onClick={deletePost}>
      <Button color="red" style={{ margin: 0 }} basic>
        <Icon name="trash" />
      </Button>
    </Button>
  );
};

const DELETE_POST_MUTATION = gql`
  mutation DeletePost($postId: ID!) {
    deletePost(postId: $postId)
  }
`;

export default DeleteButton;
