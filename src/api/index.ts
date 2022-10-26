import { dfGetax } from "@/request/ax";
import { doubanPacking, imdbPacking } from "./dataPacking";
import axios from "axios";

//?获取豆瓣api接口信息
export async function getDoubanItems() {
  const res = doubanPacking(
    await dfGetax(
      "https://api.wmdb.tv/api/v1/top?type=Imdb&skip=0&limit=20&lang=Cn"
    )
  );
  return res;
}

//?获取IMDBapi接口信息
export async function getImdbItems() {
  const res = imdbPacking(
    await dfGetax("https://imdb-api.com/en/API/Top250Movies/k_8c3oj86h")
  );
  return res;
}

//?获取后端爬取的iqy链接
export async function getIqy(name: String) {
  const url = "/api/toto";
  const res = await axios.get(url, {
    params: {
      name: name,
    },
  });
  return res;
}

//?对指定链接进行解析
export async function urlAnalysis(url: String) {
  console.log(url);
  const res = await axios.get("api/qianmeng", {
    params: {
      url: url,
    },
  });
  // console.log(res);
  return res;
}
