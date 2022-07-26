import React from 'react';
import { Button, Icon, Label } from 'semantic-ui-react';

const LikeButton = ({ post: { id, likeCount, likes } }) => {
  return (
    <Button as="div" labelPosition="right">
      <Button color="red" basic>
        <Icon name="heart" />
      </Button>
      <Label basic color="red" pointing="left">
        {likeCount}
      </Label>
    </Button>
  );
};

export default LikeButton;
