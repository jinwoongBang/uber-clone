import { SayHelloResponse, SayHelloQueryArgs } from 'src/types/graph';

const resolvers = {
  Query: {
    sayHello: (args: SayHelloQueryArgs): SayHelloResponse => {
      return {
        error: false,
        text: `Hello ${args.name}`,
      };
    },
  },
};

export default resolvers;
