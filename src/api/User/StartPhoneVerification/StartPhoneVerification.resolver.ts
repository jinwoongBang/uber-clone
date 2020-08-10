import {
  StartPhoneVerificationMutationArgs,
  StartPhoneVerificationResponse,
} from 'src/types/graph';
import { Resolvers } from '../../../types/resolvers';
import Verification from '../../../entities/Verification';

const resolvers: Resolvers = {
  Mutation: {
    StartPhoneVerification: async (
      _,
      args: StartPhoneVerificationMutationArgs,
    ): Promise<StartPhoneVerificationResponse> => {
      const { phoneNumber } = args;
      try {
        const existingVerification = await Verification.findOne({ payload: phoneNumber });
        if (existingVerification) {
          existingVerification.remove();
        }

        // const newVerification = await Verification.create({
        //   payload: phoneNumber,
        //   target: 'PHONE',
        // });
        const newVerification = await Verification.create({
          payload: phoneNumber,
          target: 'PHONE',
        }).save();

        // to do: send sms
      } catch (error) {
        return {
          ok: false,
          error: error.message,
        };
      }
    },
  },
};
