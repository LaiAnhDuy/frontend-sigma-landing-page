// actions2.ts

import { ResourceTypes } from 'src/types/Resource';

// Action types for product reducer 2
export enum ResourceActionTypes {
  REMOVE_RESOURCE = 'REMOVE_RESOURCE',
  ADD_RESOURCE = 'ADD_RESOURCE',
}

// Action interfaces for reducer 2
export interface RemoveResourceProps {
  type: ResourceActionTypes.REMOVE_RESOURCE;
  payload: ResourceTypes;
}
export interface AddResourceProps {
  type: ResourceActionTypes.ADD_RESOURCE;
  payload: ResourceTypes;
}

// Action creators for reducer 2
export const removeResource = (
  payload: ResourceTypes,
): RemoveResourceProps => ({
  type: ResourceActionTypes.REMOVE_RESOURCE,
  payload,
});

export const addResource = (payload: ResourceTypes): AddResourceProps => ({
  type: ResourceActionTypes.ADD_RESOURCE,
  payload,
});
