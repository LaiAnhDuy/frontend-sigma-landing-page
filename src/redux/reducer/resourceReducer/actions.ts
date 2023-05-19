import { ACTION2,ACTION1 } from './../../constants/constants';
  // action interfaces
  interface Action1 {
    type: typeof ACTION1;
    payload: {
      // payload của action 1
    };
  }
  
  interface Action2 {
    type: typeof ACTION2;
    payload: {
      // payload của action 2
    };
  }
  
  // action creators
  export const action1 = (payload: Action1['payload']): Action1 => ({
    type: ACTION1,
    payload,
  });
  
  export const action2 = (payload: Action2['payload']): Action2 => ({
    type: ACTION2,
    payload,
  });
  
  // export all action types
  export type Action = Action1 | Action2;
  