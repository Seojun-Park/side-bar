import { FC, PropsWithChildren } from 'react';

export const Page: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      style={{
        minHeight: '500px',
        minWidth: '500px',
        marginLeft: '50px'
      }}>
      {children}
    </div>
  );
};

export default null;
