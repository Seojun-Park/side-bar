export interface DataProps {
  label: string;
  value: string;
  files?: {
    fileName: string;
    url: string;
  }[];
  children?: DataProps[];
}

export const data: DataProps[] = [
  {
    label: 'firstPage',
    value: 'firstPage',
    files: [
      { fileName: '1-1 file.pdf', url: '1-1 file url' },
      { fileName: '1-2 file.pdf', url: '1-2 file url' },
    ],
    children: [
      {
        label: 'first page child',
        value: 'first page child',
        files: [
          { fileName: '1-1-1 file.pdf', url: '1-1-3 file url' },
          { fileName: '1-1-2 file.pdf', url: '1-1-2 file url' },
          { fileName: '1-1-3 file.pdf', url: '1-1-1 file url' },
        ],
        children: [
          {
            label: 'first-1 page child',
            value: 'first-1 page child',
            files: [
              { fileName: '1-1-1-1 file.pdf', url: '1-1-1-3 file url' },
              { fileName: '1-1-1-2 file.pdf', url: '1-1-1-2 file url' },
              { fileName: '1-1-1-3 file.pdf', url: '1-1-1-1 file url' },
            ], 
          }
        ]
      },
    ],
  },
  {
    label: 'secondPage',
    value: 'secondPage',
    files: [
      { fileName: '2-1 file', url: '2-2 file.url' },
      { fileName: '2-2 file', url: '2-1 file.url' },
    ],
    children: [
      {
        label: 'second page child',
        value: 'second page child',
        files: [
          { fileName: '2-1-1 file', url: '2-1-3 file url' },
          { fileName: '2-1-2 file', url: '2-1-2 file url' },
          { fileName: '2-1-3 file', url: '2-1-1 file url' },
        ],
        children: [
          {
            label: 'second-1 child page',
            value: 'second-1 child page',
            files: [
              { fileName: '2-2-1 file', url: '2-2-1 file url' },
              { fileName: '2-2-2 file', url: '2-2-2 file url' },
              { fileName: '2-2-3 file', url: '2-2-3 file url' },
            ],
          },
          {
            label: 'second-2 child page',
            value: 'second-2 child page',
            files: [
              { fileName: '2-3-1 file', url: '2-3-1 file url' },
              { fileName: '2-3-2 file', url: '2-3-2 file url' },
              { fileName: '2-3-3 file', url: '2-3-3 file url' },
            ],
          },
          {
            label: 'second-3 child page',
            value: 'second-3 child page',
            files: [
              { fileName: '2-4-1 file', url: '2-3-1 file url' },
              { fileName: '2-4-2 file', url: '2-3-2 file url' },
              { fileName: '2-4-3 file', url: '2-3-3 file url' },
            ],
            children: [
              {
                label: 'second 1-child of child page',
                value: 'second 1-child of child page',
                files: [
                  { fileName: '2-2-1-1 file', url: '2-2-1-1 file url' },
                  { fileName: '2-2-1-2 file', url: '2-2-1-2 file url' },
                  { fileName: '2-2-1-3 file', url: '2-2-1-3 file url' },
                ],
              },
              {
                label: 'second 2-child of child page',
                value: 'second 2-child of child page',
                files: [
                  { fileName: '2-2-2-1 file', url: '2-2-2-1 file url' },
                  { fileName: '2-2-2-2 file', url: '2-2-2-2 file url' },
                  { fileName: '2-2-2-3 file', url: '2-2-2-3 file url' },
                ],
              },
              {
                label: 'second 3-child of child page',
                value: 'second 3-child of child page',
                files: [
                  { fileName: '2-2-3-1 file', url: '2-2-3-1 file url' },
                  { fileName: '2-2-3-2 file', url: '2-2-3-2 file url' },
                  { fileName: '2-2-3-3 file', url: '2-2-3-3 file url' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'thirdPage',
    value: 'thirdPage',
    files: [
      { fileName: '3-1 file', url: '3-2 file url' },
      { fileName: '3-2 file', url: '3-1 file url' },
    ],
    children: [
      {
        label: 'third page child',
        value: 'third page child',
        files: [
          { fileName: '3-1-1 file', url: '3-1-1 file url' },
          { fileName: '3-1-2 file', url: '3-1-2 file url' },
          { fileName: '3-1-3 file', url: '3-1-3 file url' },
        ],
        children: [
          {
            label: 'third 1-child of child page',
            value: 'third 1-child of child page',
            files: [
              { fileName: '3-2-1 file', url: '3-2-3 file url' },
              { fileName: '3-2-2 file', url: '3-2-2 file url' },
              { fileName: '3-2-3 file', url: '3-2-1 file url' },
            ],
          },
          {
            label: 'third 2-child of child page',
            value: 'third 2-child of child page',
            files: [
              { fileName: '3-3-1 file', url: '3-3-3 file url' },
              { fileName: '3-3-2 file', url: '3-3-2 file url' },
              { fileName: '3-3-3 file', url: '3-3-1 file url' },
            ],
          },
        ],
      },
    ],
  },
];
