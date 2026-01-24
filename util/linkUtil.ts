  export const getHref = (anchor: string, isHomePage: boolean) => {
    return isHomePage ? anchor : `/${anchor}`;
  };