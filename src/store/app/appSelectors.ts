import { AppState } from '../store';

export const getCounter = (state: AppState) => state.app.counter;
