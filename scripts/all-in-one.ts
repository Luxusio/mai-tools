(function (d) {
  const SCRIPT_HOST = "https://myjian.github.io/mai-tools/scripts/";
  // const SCRIPT_HOST = "http://localhost:8080/scripts/";
  if (["maimaidx-eng.com", "maimaidx.jp"].indexOf(d.location.host) < 0) {
    // TODO: tell user to open maimai net
    return;
  }

  function appendScript(filename: string) {
    const s = d.createElement("script");
    s.src = SCRIPT_HOST + filename + "?t=" + Math.floor(Date.now() / 60000);
    d.body.append(s);
  }

  const path = d.location.pathname;
  if (path === "/maimai-mobile/record/") {
    appendScript("recent-play-downloader.js");
  } else if (path.indexOf("/maimai-mobile/record/playlogDetail/") >= 0) {
    appendScript("score-converter.js");
  } else if (
    path.indexOf("/maimai-mobile/record/music") >= 0 ||
    path.indexOf("/maimai-mobile/friend/friendGenreVs/battleStart/") >= 0 ||
    path.indexOf("/maimai-mobile/friend/friendLevelVs/battleStart/") >= 0
  ) {
    appendScript("score-sort.js");
  } else if (path.indexOf("/maimai-mobile/friend/") >= 0) {
    appendScript("analyze-friend-rating-in-new-tab.js");
  } else if (
    path.indexOf("/maimai-mobile/home/") >= 0 ||
    path.indexOf("/maimai-mobile/playerData/") >= 0
  ) {
    appendScript("analyze-rating-in-newtab.js");
  } else if (path.indexOf("/maimai-mobile/photo/") >= 0) {
    appendScript("album-download-helper.js");
  }
})(document);