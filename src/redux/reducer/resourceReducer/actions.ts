// action types
export enum ActionTypes {
    ACTION_1 = 'ACTION_1',
    ACTION_2 = 'ACTION_2',
  }
  
  // action interfaces
  interface Action1 {
    type: ActionTypes.ACTION_1;
    payload: {
      // payload của action 1
    };
  }
  
  interface Action2 {
    type: ActionTypes.ACTION_2;
    payload: {
      // payload của action 2
    };
  }
  
  // action creators
  export const action1 = (payload: Action1['payload']): Action1 => ({
    type: ActionTypes.ACTION_1,
    payload,
  });
  
  export const action2 = (payload: Action2['payload']): Action2 => ({
    type: ActionTypes.ACTION_2,
    payload,
  });
  
  // export all action types
  export type Action = Action1 | Action2;
  