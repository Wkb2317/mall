export default {
  addCart(context, payload) {
    return new Promise((reslove, reject) => {
      let oldproduct = context.state.cartList.find(item => {
        return item.iid === payload.iid;
      });
      if (oldproduct) {
        // 对象的指向，可以直接修改原数据
        context.commit("addCounter", oldproduct);
        reslove("商品数量加一");
      } else {
        context.commit("addToCart", payload);
        reslove("已加入购物车");
      }
    });
  }
};
