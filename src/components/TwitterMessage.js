import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars: this.props.maxChars,
      tweetContent: "",
      remainingChars: 280
    };
  }

  saveTweet = (e) => {
    this.setState({
      tweetContent: e.target.value,
      remainingChars: this.state.maxChars - e.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <p>Characters Remaining: {this.state.remainingChars}</p>
        <input type="text" name="message" id="message" onChange={e => this.saveTweet(e)} value={this.state.tweetContent}/>
      </div>
    );
  }
}

export default TwitterMessage;
