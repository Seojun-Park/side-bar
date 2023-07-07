import { FC, useState } from 'react';
import { Breadcrumb, Cascader } from 'antd';
import { SingleValueType } from 'rc-cascader/lib/Cascader';
import { PageContentProps, useMenuContext } from '../contexts';

interface OptionProps {
  value: string;
  label: string;
  files?: PageContentProps[];
  children?: OptionProps[];
}

interface MenuItemProps {
  label: string;
  key: string;
}

interface NavProps {
  open: boolean;
}

const options: OptionProps[] = [
  {
    value: 'korea',
    label: 'Korea',
    files: [
      {
        fileName: 'korea.pdf',
        url: 'url1',
      },
    ],
    children: [
      {
        value: 'seoul',
        label: 'Seoul',
        files: [
          {
            fileName: 'seoul.pdf',
            url: 'url2',
          },
          {
            fileName: 'seoul1.pdf',
            url: 'url2',
          },
        ],
        children: [
          {
            value: 'iteawon',
            label: 'iteawon',
            files: [
              {
                fileName: 'kyungri.pdf',
                url: 'url3',
              },
              {
                fileName: 'townhall.pdf',
                url: 'url3',
              },
            ],
          },
        ],
      },
      {
        value: 'busan',
        label: 'Busan',
        files: [
          {
            fileName: 'port.pdf',
            url: 'url4',
          },
        ],
      },
    ],
  },
  {
    value: 'france',
    label: 'France',
    children: [
      {
        value: 'paris',
        label: 'Paris',
        children: [
          {
            value: '15e',
            label: '15e Arrondisment',
          },
        ],
      },
    ],
  },
];

export const Nav: FC<NavProps> = ({
  open,
}) => {
  const [value, setValue] = useState<MenuItemProps[]>([
    {
      label: options[0].label,
      key: options[0].value,
    },
  ]);
  const { setSelectedPage, setPageContent } = useMenuContext();

  // esint-disable-next-line @typescript-eslint/no-explicit-any
  const findByKey = (data: OptionProps[], key: string): any => {
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

  const handleChange = (value: SingleValueType) => {
    if (value) {
      setSelectedPage(value[value.length - 1] as string);
    }
    const route = `/${value.join('/')}`;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const pageContent: OptionProps = findByKey(
      options,
      value[value.length - 1] as string
    );
    if (pageContent.files) {
      setPageContent(pageContent.files);
    }
    const items: MenuItemProps[] = value.map((v) => ({
      label: v.toString(),
      key: v.toString(),
    }));
    setValue(items);
  };

  return (
    <div
      style={{
        minHeight: '500px',
        minWidth: '240px',
        borderRight: '1px solid black'
      }}>
      <Breadcrumb
        items={value.map((v) => ({
          title: v.label,
        }))}
      />
      <Cascader
        open={open}
        options={options}
        onChange={(v) => handleChange(v)}
        changeOnSelect
        dropdownRender={(menu) => {
          return (
            <div
              style={{
                minHeight: '50vh',
              }}>
              {menu}
            </div>
          );
        }}>
        <div />
      </Cascader>
    </div>
  );
};

export default null;
