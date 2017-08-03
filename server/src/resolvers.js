const channels = [{
    id: 1, 
    name: 'soccer'
}, {
    id: 2,
    name: 'baseball'
}];

let nextId = 3;

export const resolvers = {
    Query: {
        channels: () => {
            return channels;
        },
        channel: (root, {id}) => {
            return channels.find(ch => ch.id === id);
        }
    },
    Mutation: {
        addChannel: (root, args) => {
            const newChannel = { id: nextId++, name: args.name };
            channels.push(newChannel);
            return newChannel;
        },
        addMessage: (root, {msg}) => {
            const channel = channels.find(ch => ch.id === msg.channelId);
            if (!channel) {
                throw new Error("Channel does not exist");
            }
            const newMsg = { id: String(nextMsgId++), text: msg.text };
            channel.messages.push(newMsg);
            return newMsg;
        }
    }
};