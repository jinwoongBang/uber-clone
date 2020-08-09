import { SayHelloQueryArgs, SayHelloResponse } from 'src/types/graph';

const resolvers = {
  Query: {
    sayHello: (args: SayHelloQueryArgs): SayHelloResponse => {
      console.log({ args });
      return {
        error: false,
        text: `Hello ${args.name}`,
      };
    },
  },
};

export default resolvers;
