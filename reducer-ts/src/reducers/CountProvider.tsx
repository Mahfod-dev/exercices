import { FC, PropsWithChildren, useReducer } from 'react';
import { NameContext } from './NameContext';
import { NameReducer } from './NameReducer';


export interface NameState {
Property: boolean;
}

const Name_INITIAL_STATE: NameState = {
Property: false,
};
export const NameProvider: FC<PropsWithChildren> = ({ children }) => {
const [state, dispatch] = useReducer(uiReducer, Name_INITIAL_STATE);

return (
<NameContext.Provider
value={{
...state
}}>
{children}
</NameContext.Provider>
);
};