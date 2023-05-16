// actions2.ts

// Action types for reducer 2
export enum ActionTypes2 {
    ACTION_3 = 'ACTION_3',
    ACTION_4 = 'ACTION_4',
  }
  
  // Action interfaces for reducer 2
  interface Action3 {
    type: ActionTypes2.ACTION_3;
    payload: {
      // Payload của action 3
    };
  }
  
  interface Action4 {
    type: ActionTypes2.ACTION_4;
    payload: {
      // Payload của action 4
    };
  }
  
  // Action creators for reducer 2
  export const action3 = (payload: Action3['payload']): Action3 => ({
    type: ActionTypes2.ACTION_3,
    payload,
  });
  
  export const action4 = (payload: Action4['payload']): Action4 => ({
    type: ActionTypes2.ACTION_4,
    payload,
  });
  
  // Export type union of all actions for reducer 2
  export type Action2 = Action3 | Action4;
  