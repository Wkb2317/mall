import { request } from "./request";

export function getCateGroyData() {
  return request({
    url: "/category"
  });
}

export function getSubCateGory(maitKey) {
  return request({
    url: "/subcategory",
    params: {
      maitKey
    }
  });
}

export function getSubCategoryDetail(miniWallkey, type) {
  return request({
    url: "/subcategory/detail",
    params: {
      miniWallkey,
      type
    }
  });
}
