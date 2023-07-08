import React, { FC, ReactNode, useEffect } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { DataProps, data } from './data';
import { useMenuContext } from './contexts';

const App: FC = () => {
  const { pageContent, selectedPage, setSelectedPage, setPageContent } =
    useMenuContext();
  const renderChild = (d: DataProps[]): ReactNode => {
    for (const item of d) {
      if (item.children && item.children.length > 0) {
        return (
          <SubMenu
            label={item.label}
            onClick={() => setSelectedPage(item.value)}>
            {renderChild(item.children)}
          </SubMenu>
        );
      } else {
        return (
          <MenuItem onClick={() => setSelectedPage(item.value)}>
            {item.label}
          </MenuItem>
        );
      }
    }
  };

  const findByKey = (data: DataProps[], key: string): any => {
    for (const item of data) {
      if (item.value === key) {
        return item;
      }
      if (item.children?.length) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const innerResult = findByKey(item.children, key);
        if (innerResult) {
          return innerResult;
        }
      }
    }
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const currentPageContent: DataProps = findByKey(data, selectedPage);
    if (currentPageContent?.files) {
      setPageContent(currentPageContent.files);
    }
  }, [data, selectedPage]);

  return (
    <div
      style={{
        padding: '30px',
      }}>
      <div
        style={{
          margin: '100px',
          border: '1px solid gray',
          display: 'flex',
          flexDirection: 'row',
        }}>
        <Sidebar>
          <Menu>
            {data.map((d, i) => {
              if (d.children && d.children?.length > 0) {
                return (
                  <SubMenu
                    key={i}
                    label={d.label}
                    onClick={() => setSelectedPage(d.value)}>
                    {renderChild(d.children)}
                  </SubMenu>
                );
              } else {
                return (
                  <MenuItem
                    key={i}
                    onClick={() => setSelectedPage(d.value)}>
                    {d.label}
                  </MenuItem>
                );
              }
            })}
          </Menu>
        </Sidebar>
        <div
          style={{
            minWidth: '500px',
            minHeight: '500px',
            borderLeft: '1px solid gray',
            padding: '10px',
          }}>
          {pageContent?.map((d, i) => {
            return <div key={i}>{d.fileName}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
