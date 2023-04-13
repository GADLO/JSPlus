(() => {
  const init = () => {
    createDomList();
  };
  const createDomList = () => {
    const oList = document.querySelector("#J_list");
    const oFragment = document.createDocumentFragment();
    for (let i = 0; i < 3; i++) {
      const oLi = document.createElement("li");
      oLi.textContent = "item: =>" + i;
      oFragment.appendChild(oLi);
    }
    oList.appendChild(oFragment);
  };
  init();
})();
