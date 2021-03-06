import {
  StartPhoneVerificationMutationArgs,
  StartPhoneVerificationResponse,
} from 'src/types/graph';
// import { sendVerificationSMS } from 'src/utils/sendSMS';
// import Verification from '../../../entities/Verification';
import { Resolvers } from '../../../types/resolvers';

const resolvers: Resolvers = {
  Mutation: {
    StartPhoneVerification: async (
      _,
      args: StartPhoneVerificationMutationArgs,
    ): Promise<StartPhoneVerificationResponse> => {
      console.log('start');
      const { phoneNumber } = args;
      try {
        // const existingVerification = await Verification.findOne({ payload: phoneNumber });
        // if (existingVerification) {
        //   existingVerification.remove();
        // }
        // const newVerification = await Verification.create({
        //   payload: phoneNumber,
        //   target: 'PHONE',
        // }).save();
        // console.log(newVerification);
        // await sendVerificationSMS(newVerification.payload, newVerification.key);
        console.log(`phone number : ${phoneNumber}`);
        return {
          ok: true,
          error: null,
        };
      } catch (error) {
        return {
          ok: false,
          error: error.message,
        };
      }
    },
  },
};

export default resolvers;
