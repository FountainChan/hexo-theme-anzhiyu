hexo.extend.helper.register("catalog_list", function (type) {
  let html = ``;
  hexo.locals.get(type).filter(function (item) {
    // 只显示顶级分类（parent 为空），子分类由分类页自己渲染
    return !item.parent
  }).map(function (item) {
    html += `
    <div class="catalog-list-item" id="/${item.path}">
      <a href="/${item.path}">
        ${item.name}
      </a>
    </div>
    `;
  });
  return html;
});
