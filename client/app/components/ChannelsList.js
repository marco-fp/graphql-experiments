import React from 'react';
import {
  gql,
  graphql
} from 'react-apollo';

const channelsListQuery = gql`
   query ChannelsListQuery {
     channels {
       id
       name
     }
   }
 `;

 const ChannelsList = ({ data: { loading, error, channels }}) => {
    if (loading) {
      return <p>Loading ...</p>;
    }
    if (error) {
      return <p>{error.message}</p>;
    }
    return <ul>
      { channels.map( ch => <li key={ch.id}>{ch.name}</li> ) }
    </ul>;
  };

const ChannelsListWithData = graphql(channelsListQuery)(ChannelsList);
export default ChannelsListWithData;
