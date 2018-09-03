import React, { PureComponent } from 'react';

class Detail extends PureComponent {
  constructor(props) {
    super(props);
    this.topic = props.location.state.data;
  } 
  render() {
    let topic=this.topic;
    return (
      <div style={{"padding":"12px","backgroundColor":"#f0f0f0"}}>
        <h2 style={{"color":"#cc0","marginBottom":"10px"}}>{topic.title}</h2>
        <div style={{"fontSize":"14px","color":"#888","marginBottom":"12px"}}>{topic.author.loginname} 发表于 {topic.create_at} </div>

        <div dangerouslySetInnerHTML={{ __html: topic.content }} />
      </div>
    )
  }
}

export default Detail;