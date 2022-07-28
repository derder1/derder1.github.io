addEventListener("DOMContentLoaded", function () {
    let models = [
      {
        left: "0px",
        bottom: "0px",
        basePath:
          "https://fastly.jsdelivr.net/gh/alg-wiki/AzurLaneL2DViewer@gh-pages/assets",
        role: "bisimai_2",
        background: "",
        opacity: 1,
        mobile: false,
      },
      {
        right: "-200px",
        bottom: "-200px",
        basePath:
          "https://fastly.jsdelivr.net/gh/alg-wiki/AzurLaneL2DViewer@gh-pages/assets",
        role: "bisimai_2",
        background: "",
        opacity: 1,
        mobile: false,
      },
    ];
    new Live2dLoader(models);
  });