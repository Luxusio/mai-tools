import {removeScrollControl} from '../common/net-helpers';
import {analyzeRatingInNewTab} from "./analyze-rating-in-newtab";
import {scoreDownload} from "./score-download";
import {scoreSort} from "./score-sort";
import {albumDownloadHelper} from "./album-download-helper";
import {analyzeFriendRatingInNewTab} from "./analyze-friend-rating-in-new-tab";
import {songDetailHelper} from "./song-detail-helper";
import {scoreConverter} from "./score-converter";
import {recentPlayDownloader} from "./recent-play-downloader";

(function (d) {

  if (["maimaidx-eng.com", "maimaidx.jp"].indexOf(d.location.host) < 0) {
    // TODO: tell user to open maimai net
    return;
  }


  const path = d.location.pathname;
  if (path === "/maimai-mobile/record/") {
    recentPlayDownloader(d);
  } else if (path.indexOf("/maimai-mobile/record/playlogDetail/") >= 0) {
    scoreConverter(d);
  } else if (path.indexOf("/maimai-mobile/record/musicDetail/") >= 0) {
    removeScrollControl(d);
    songDetailHelper(d);
  } else if (path.indexOf("/maimai-mobile/record/music") >= 0) {
    scoreSort(d);
  } else if (path.indexOf("/maimai-mobile/friend/") >= 0) {
    analyzeRatingInNewTab();
    analyzeFriendRatingInNewTab(d);
    if (
      path.indexOf("/maimai-mobile/friend/friendGenreVs/battleStart/") >= 0 ||
      path.indexOf("/maimai-mobile/friend/friendLevelVs/battleStart/") >= 0
    ) {
      scoreSort(d);
    }
  } else if (
    path.indexOf("/maimai-mobile/home/") >= 0 ||
    path.indexOf("/maimai-mobile/playerData/") >= 0
  ) {
    removeScrollControl(d);
    scoreDownload();
    analyzeRatingInNewTab();
  } else if (path.indexOf("/maimai-mobile/photo/") >= 0) {
    albumDownloadHelper(d);
  }
})(document);
