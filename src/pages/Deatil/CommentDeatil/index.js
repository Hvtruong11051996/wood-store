import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import moment from 'moment';
import React from 'react';
import { EditOutlined } from '@ant-design/icons';
import './comment.css';
import { connect } from 'react-redux';

const { TextArea } = Input;

const CommentList = ({ comments, author }) => (
  <List
    author={author}
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary">
        Add Comment
      </Button>
    </Form.Item>
  </>
);

class CommentDeatil extends React.Component {
  state = {
    author: '',
    comments: [],
    submitting: false,
    value: '',
  };

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        comments: [
          ...this.state.comments,
          {
            author: <p>{this.state.author}</p>,
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow(),
          },
        ],
      });
    }, 1000);
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  showUser = (user) => {
    console.log(user);
    this.setState({
      author: user.nickname
    });
  }

  render() {
    const { comments, submitting, value } = this.state;
    const { login, register } = this.props;

    const userCmt = register.find(x => x.email === login.email)

    return (
      <div className="container comment-deatil">
        <div className="comment-deatil__header">
          <h3><EditOutlined />Product Reviews</h3>
        </div>
        {comments.length > 0 && <CommentList author={userCmt} comments={comments} />}
        <Comment
          avatar={
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="Han Solo"
            />
          }
          content={
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}

            />
          }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.user,
    register: state.register
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentDeatil);


