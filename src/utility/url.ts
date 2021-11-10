// url to public folder

export const url = (link: string) => {
  if (link === "/") return "/";
  return import.meta.env.BASE_URL + link;
};
