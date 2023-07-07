interface DataProps {
  pageName: string;
  files: string[];
  children?: {
    pageName: string;
    files: string[];
    children?: {
      pageName: string;
      files: string[];
      children?: {
        pageName: string;
        files: string[];
      }[];
    }[];
  }[];
}

export const data: DataProps[] = [
  {
    pageName: 'firstPage',
    files: ['1-1 file', '1-2 file'],
    children: [
      {
        pageName: 'first page child',
        files: ['1-1-1 file', '1-1-2 file', '1-1-3 file'],
      },
    ],
  },
  {
    pageName: 'secondPage',
    files: ['2-1 file', '2-2 file'],
    children: [
      {
        pageName: 'second page child',
        files: ['2-1-1 file', '2-1-2 file', '2-1-3 file'],
        children: [
          {
            pageName: 'second-1 child page',
            files: ['2-2-1 file', '2-2-2 file', '2-2-3 file'],
          },
          {
            pageName: 'second-2 child page',
            files: ['2-3-1 file', '2-3-2 file', '2-3-3 file'],
          },
          {
            pageName: 'second-3 child page',
            files: ['2-4-1 file', '2-4-2 file', '2-4-3 file'],
            children: [
              {
                pageName: 'second 1-child of child page',
                files: ['2-2-1-1 file', '2-2-1-2 file', '2-2-1-3 file'],
              },
              {
                pageName: 'second 2-child of child page',
                files: ['2-2-2-1 file', '2-2-2-2 file', '2-2-2-3 file'],
              },
              {
                pageName: 'second 3-child of child page',
                files: ['2-2-3-1 file', '2-2-3-2 file', '2-2-3-3 file'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    pageName: 'thirdPage',
    files: ['3-1 file', '3-2 file'],
    children: [
      {
        pageName: 'third page child',
        files: ['3-1-1 file', '3-1-2 file', '3-1-3 file'],
        children: [
          {
            pageName: 'third 1-child of child page',
            files: ['3-2-1 file', '3-2-2 file', '3-2-3 file'],
          },
          {
            pageName: 'third 2-child of child page',
            files: ['3-3-1 file', '3-3-2 file', '3-3-3 file'],
          },
        ],
      },
    ],
  },
];
