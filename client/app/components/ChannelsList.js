import React from 'react';
import AddChannel from './AddChannel';
import { gql, graphql } from 'react-apollo';

export const channelsListQuery = gql`
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
    return (
      <div>
        <AddChannel />
        <ul>
          { channels.map( ch => <li key={ch.id}>{ch.name}</li> ) }
        </ul>
      </div>
    );
  };

const ChannelsListWithData = graphql(channelsListQuery)(ChannelsList);
export default ChannelsListWithData;
