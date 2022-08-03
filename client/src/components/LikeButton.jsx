import React, { useEffect, useState } from 'react';
import { Button, Icon, Label } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';

const LikeButton = ({ post: { id, likeCount, likes } }) => {
  const user = useSelector((state) => state.userData.user);
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    if (user && likes.find((like) => like.userName === user.userName)) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, [likes, user]);
  const [likePost] = useMutation(LIKE_POST_MUTATION, {
    variables: { postId: id }
  });
  const likeButton = user ? (
    liked ? (
      <Button color="teal">
        <Icon name="heart" />
      </Button>
    ) : (
      <Button color="teal" basic>
        <Icon name="heart" />
      </Button>
    )
  ) : (
    <Button color="teal" basic as={Link} to="/login">
      <Icon name="heart" />
    </Button>
  );
  return (
    <Button as="div" labelPosition="right" onClick={likePost}>
      {likeButton}
      <Label basic color="teal" pointing="left">
        {likeCount}
      </Label>
    </Button>
  );
};

const LIKE_POST_MUTATION = gql`
  mutation LikePost($postId: ID!) {
    likePost(postId: $postId) {
      id
      likes {
        id
        userName
      }
      likeCount
    }
  }
`;
export default LikeButton;
