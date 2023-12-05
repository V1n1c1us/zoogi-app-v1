export type PetShopType = {
  id: string;
  name: string;
  email: string;
  password: string;
  cnpj: string;
  complement: string;
  address: string;
  number: string;
  city: string;
  uf: string;
  phone: string;
  avatar: string;
  latitude: number;
  longitude: number;
  descprition: string;
  ratign: number;
  createdAt: string;
  updatedAt: string;
};

export const PETSHOPS = [
  {
    id: "2ac7f57e-6b3d-4ae6-9716-884e0cf8ae6e",
    name: "Miau 1",
    email: "mia1@gmail.com",
    password: "",
    cnpj: "62303459000112",
    complement: "",
    address: "",
    number: "",
    city: "",
    uf: "",
    phone: "",
    avatar: "",
    latitude: -27.586167,
    longitude: -48.523536,
    descprition: "",
    ratign: 4,
    createdAt: "2023-10-17T12:07:27.000Z",
    updatedAt: "2023-10-17T12:07:27.000Z",
  },
  {
    id: "3ac7f57e-6b3d-4ae6-9716-884e0cf8ae6e",
    name: "Petshop Miau 1",
    email: "mia1@gmail.com",
    password: "",
    cnpj: "62303459000112",
    complement: "",
    address: "Rua Lauro Linhares",
    number: "",
    city: "",
    uf: "",
    phone: "",
    avatar:
      "https://marketplace.canva.com/EAFobYQvZZM/1/0/1600w/canva-post-instagram-pet-shop-banho-azul-XhIi6Z46Drc.jpg",
    latitude: -27.584293382311724,
    longitude: -48.523296702155996,
    descprition: "",
    ratign: 0,
    createdAt: "2023-10-17T12:07:27.000Z",
    updatedAt: "2023-10-17T12:07:27.000Z",
  },
  {
    id: "4ac7f57e-6b3d-4ae6-9716-884e0cf8ae6e",
    name: "Chocolate do PET",
    email: "mia1@gmail.com",
    password: "",
    cnpj: "62303459000112",
    complement: "",
    address: "",
    number: "",
    city: "",
    uf: "",
    phone: "",
    avatar:
      "https://marketplace.canva.com/EAFobYQvZZM/1/0/1600w/canva-post-instagram-pet-shop-banho-azul-XhIi6Z46Drc.jpg",
    latitude: -27.585911659437915,
    longitude: -48.52482804355045,
    descprition: "",
    ratign: 0,
    createdAt: "2023-10-17T12:07:27.000Z",
    updatedAt: "2023-10-17T12:07:27.000Z",
  },
];

export const colors = {
  blue: "blue",
  black: "black",
  primaryGreen: "#1ca75d",
  secondaryGreen: "rgb(61,179,106)",
  darkMint: "rgb(72,189,126)",
  white: "white",
  shadowColor: "rgb(35,35,35)",
  transparent: "transparent",
  semitransparentBlack: "rgba(0,0,0,0.6)",
  purplishBlue: "rgb(78, 15, 255)",
  purpleishBlue: "rgb(89,80,249)",
  paleGrey: "rgb(246,245,248)",
  greyishBrown: "rgb(71,71,71)",
  coralPink: "rgb(255,94,107)",
  jade: "rgb(29,167,93)",
  backBlue: "#2488FF",
  detailsBlue: "#3479F6",
  activeOrange: "#FFC106",
};

export const yodaScreenTestIDs = Object.freeze({
  headerBarBackButton: "YodaHeaderBarBackButtonTestID",
  headerBarText: "YodaHeaderBarTextTestID",
  headerTitle: "YodaHeaderTitleTestID",
  tabBiography: "YodaTabBiographyTestID",
  contentBiography: "YodaContentBiographyTestID",
  tabPowers: "YodaTabPowersTestID",
  contentPowers: "YodaContentPowersTestID",
  tabAppearances: "YodaTabAppearancesTestID",
  contentAppearances: "YodaContentAppearancesTestID",
});
