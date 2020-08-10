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
      } catch (error) {
        return {
          ok: false,
          error: error.message,
        };
      }
    },
  },
};
