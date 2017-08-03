import React from 'react';
import { gql, graphql } from 'react-apollo';

 const MessageList = ({messages}) => {
    return (
      <div>
        <ul>
          { messages.map( msg => <li key={msg.id}>{msg.text}</li> ) }
        </ul>
      </div>
    );
  };

export const channelDetailsQuery = gql`
    query ChannelDetailsQuery($channelId: ID!) {
        channel(id: $channelId) {
            id
            name
            messages {
                id
                text
            }
        }
    }
`;

const ChannelDetails = ({ data: {loading, error, channel }, channelId}) => {
    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error.message}</p>;
    }

    if (channel === null) {
        return <p>Channel not found</p>;
    }

    return (
        <div>
            <div>
                Name: {channel.name}
            </div>
            <MessageList messages={channel.messages} />
        </div>
    );
};

export default (graphql(channelDetailsQuery, {
  options: (props) => ({
    variables: { channelId: props.channelId },
  }),
})(ChannelDetails));