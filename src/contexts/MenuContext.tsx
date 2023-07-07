import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';

export interface PageContentProps {
  fileName: string;
  url: string;
}

interface MenuContextProps {
  selectedPage: string;
  setSelectedPage: Dispatch<SetStateAction<string>>;
  pageContent: PageContentProps[];
  setPageContent: Dispatch<SetStateAction<PageContentProps[]>>;
}

interface MenuContextProvierProps {
  children: ReactNode;
}

export const MenuContext = createContext<MenuContextProps | undefined>(
  undefined
);

export const MenuContextProvider: FC<MenuContextProvierProps> = ({
  children,
}) => {
  const [selectedPage, setSelectedPage] = useState<string>('');
  const [pageContent, setPageContent] = useState<PageContentProps[]>([]);

  const contextValue = useMemo(
    () => ({
      selectedPage,
      setSelectedPage,
      pageContent,
      setPageContent,
    }),
    [selectedPage, pageContent, setPageContent, setSelectedPage]
  );

  return (
    <MenuContext.Provider value={contextValue}>{children}</MenuContext.Provider>
  );
};

export const useMenuContext = () => {
  const appContext = useContext(MenuContext);

  if (!appContext) {
    throw new Error('MenuContext is not initialized');
  }

  return appContext;
};

export default null;
