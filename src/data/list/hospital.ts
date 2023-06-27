export interface HospitalItemDataType {
  id: number;
  title: string;
  imgUrl: string;
  starOfnumber: number;
  evaluationOfnumber: number;
  eventOfnumber: number;
  reviewOfnumber: number;
}

export const HOSPITAL_LIST_DATA: HospitalItemDataType[] = [
  {
    id: 0,
    imgUrl:
      "https://image2.gnsister.com/images/direct/1623241053627_10cd574570f5485d86b0e538ca3b05a2.jpg?originalImageWidth=600&originalImageHeight=240",
    title: "프리티성형외과의원",
    starOfnumber: 9.7,
    evaluationOfnumber: 812,
    eventOfnumber: 20,
    reviewOfnumber: 2620,
  },
  {
    id: 1,
    imgUrl:
      "https://image2.gnsister.com/images/direct/1608275676095_2ada60e3030f4c9abbcbb23976b0ca4b.jpg?originalImageWidth=600&originalImageHeight=240",
    title: "티에스성형외과",
    starOfnumber: 8.7,
    evaluationOfnumber: 631,
    eventOfnumber: 14,
    reviewOfnumber: 1420,
  },
  {
    id: 2,
    imgUrl:
      "https://image2.gnsister.com/images/direct/1675927844676_5a2039338e1541f8b092f7a3075cf1cc.jpg?originalImageWidth=600&originalImageHeight=240",
    title: "앤드성형외과",
    starOfnumber: 8.1,
    evaluationOfnumber: 391,
    eventOfnumber: 12,
    reviewOfnumber: 1120,
  },
];
