import React, { FC, useState } from 'react';
import { Nav, Page } from './components';
import { useMenuContext } from './contexts';

const App: FC = () => {
  const { selectedPage, pageContent } = useMenuContext();
  const [open, setOpen] = useState<boolean>(false);

  console.log(pageContent);

  return (
    <div
      style={{
        padding: '30px',
      }}>
      <button onClick={() => setOpen(!open)}>메뉴열기</button>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          border: '1px solid gray',
          marginTop: '20px',
        }}>
        <Nav open={open} />
        <Page>
          {pageContent.length === 0 ? (
            <div>컨텐츠가 없습니다</div>
          ) : (
            <div>
              {pageContent.map((v, i) => {
                return <div key={i}>{`파일이름:${v.fileName}`}</div>;
              })}
            </div>
          )}
          <div>test</div>
        </Page>
      </div>
    </div>
  );
};

export default App;
