import {
  Container,
  DivButton,
  Header,
  ImageInput,
  Info,
  TweetBox,
  TweetButton,
  TweetInput,
} from './styles';
import Feed from '../Feed';
import { Avatar, Button } from '@mui/material';
import { useState } from 'react';

const Post = () => {
  const [posts, setPosts] = useState([
    { id: 1, postText: 'eu sou uma batata' },
    { id: 2, postText: 'ao infinito e além' },
  ]);

  const [currentPost, setCurrentPost] = useState('');

  let tweetBox = (e: any) => {
    setCurrentPost(e.target.value);
  };

  console.log(currentPost);

  const addPost = () => {
    let novoPost = { id: 3, postText: currentPost };
    let arr = posts.concat(novoPost);
    setPosts(arr);
    setCurrentPost('');
  };

  return (
    <Container>
      <Header>
        <Info>
          <strong>Página Inicial</strong>
        </Info>
      </Header>

      <TweetBox>
        <TweetInput>
          <Avatar />
          <input
            onChange={tweetBox}
            value={currentPost}
            placeholder="O que está acontecendo?"
            type="text"
          />
        </TweetInput>
        <DivButton>
          <TweetButton onClick={addPost}>Tweetar</TweetButton>
        </DivButton>
      </TweetBox>

      {posts.map((post) => (
        <div>
          <p key={post.id}>{post.postText}</p>
        </div>
      ))}
    </Container>
  );
};

export default Post;