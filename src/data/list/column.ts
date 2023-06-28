export interface ColumnListType {
  id: number;
  imgSrc: string;
  tag: string;
  title: string;
  hospital?: string;
  date?: string;
}

export const COLUMN_LIST: ColumnListType[] = [
  {
    id: 0,
    imgSrc:
      "https://static.blog.gangnamunni.com/files/e8/e8e3eae8-168f-49ec-b869-9d767b8f385b.png",
    tag: "#필러 #쥬비덤 #뉴라미스",
    title: "[필러] 쥬비덤? 뉴라미스? 필러 종류 및 필러 유지기간, 시술 주기",
    hospital: "LUHO성형외과",
    date: "2023.5.21",
  },
  {
    id: 1,
    imgSrc:
      "https://static.blog.gangnamunni.com/files/08/08b7003a-db3c-4d39-99de-ece0294c5bfb.png",
    tag: "#물광주사 #백옥주사 #135",
    title:
      "[미용주사] 건조한 겨울 도와줘! 백옥주사, 물광주사, 135부스터 총 집합",
    hospital: "강남언니",
    date: "2023.3.13",
  },
  {
    id: 2,
    imgSrc:
      "https://static.blog.gangnamunni.com/files/df/dfbaa960-576f-4555-9861-77565bc90e70.png",
    tag: "#남성모공 #모공 #피뷰요철",
    title: "[모공] 남성 모공 해결법 5가지",
    hospital: "강남언니",
    date: "2023.3.14",
  },
  {
    id: 3,
    imgSrc:
      "https://static.blog.gangnamunni.com/files/63/63b82476-4214-40fc-9e1f-ee6fd456a44d.png",
    tag: "#점 #사마귀 #CO2레이저",
    title: "[점, 사마귀제거] 점과 사마귀를 제거하는 4가지 방법 ",
    hospital: "강남언니",
    date: "2023.3.11",
  },
];
