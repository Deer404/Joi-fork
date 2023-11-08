import {createHttp1Request, createHttp2Request, createHttpSession, EventResponse,} from "../lib/league-connect";
import {getCredentials, getLeagueWebSocket} from "./handleLCU";
import {ClientHttp2Session} from "http2";
import {champDict} from "../const/lolDataConfig";
import {
  ChampSelectPhaseSession,
  GameDetail,
  GameSessionData,
  MatchHistoryQueryResult,
  PageRange,
  SummonerInfo,
  TeamMember,
} from "./interface";
import logger from "../lib/logger";
import {RuneConfig} from "../config/type";
import {getChampData, getNoneRankRunes, getRankRunes} from "./opgg";
import runesDB from "../db/runes";
import {GameMode} from "./opgg_rank_type";

//获取当前召唤师信息
export async function getCurrentSummoner() {
  return (
    await createHttp1Request(
      {
        method: "GET",
        url: "/lol-summoner/v1/current-summoner",
      },
      getCredentials(),
    )
  ).json() as SummonerInfo;
}

//通过昵称召唤师信息
export async function getSummonerByName(nickname: string) {
  return (
    await createHttp1Request(
      {
        method: "GET",
        url: `/lol-summoner/v1/summoners/?name=${encodeURI(nickname)}`,
      },
      getCredentials(),
    )
  ).json() as SummonerInfo;
}

//通过puuid查询召唤师信息
export async function getSummonerByPuuid(puuid: string) {
  return (
    await createHttp1Request(
      {
        method: "GET",
        url: `/lol-summoner/v2/summoners/puuid/${puuid}`,
      },
      getCredentials(),
    )
  ).json() as SummonerInfo;
}

//监听选择的英雄
export function listenChampSelect(callback?: Function): Function {
  const ws = getLeagueWebSocket();
  ws.subscribe(
    "/lol-champ-select/v1/session",
    async (
      data: ChampSelectPhaseSession,
      event: EventResponse<ChampSelectPhaseSession>,
    ) => {
      const currentChampId = await getCurrentChampId();
      callback && callback(currentChampId);
      logger.debug("currentChampId", currentChampId);
      logger.debug("champ-select-session", JSON.stringify(data));
    },
  );
  return () => ws.unsubscribe("/lol-champ-select/v1/session");
}

// 获取当前选择的英雄
export async function getCurrentChampId() {
  let credentials = getCredentials();
  const session = await createHttpSession(credentials);
  const currentChamp = await createHttp2Request(
    {
      method: "GET",
      url: "/lol-champ-select/v1/current-champion",
    },
    session,
    credentials,
  );
  session.close();
  return currentChamp.json() as number;
}

//todo 类型确认
// 获取召唤师的英雄
const getSelectChamp = (playerChampionSelections) => {
  let champDict = {};
  for (const summonerSelect of playerChampionSelections) {
    champDict[summonerSelect.summonerInternalName] = summonerSelect.championId;
  }
  return champDict;
};

// 查询对局游戏信息(召唤师ID,昵称,英雄)
export async function getGameInfo() {
  const summoner = await getCurrentSummoner();
  const matchSession = (
    await createHttp1Request(
      {
        method: "GET",
        url: `/lol-gameflow/v1/session`,
      },
      getCredentials(),
    )
  ).json() as GameSessionData;

  logger.debug("matchSession", JSON.stringify(matchSession));

  let friendInfoList = [];
  let enemyInfoList = [];
  const playerChampionSelections = getSelectChamp(
    matchSession.gameData.playerChampionSelections,
  );

  let enemyInfo: TeamMember[];
  let friendInfo: TeamMember[];
  if (
    matchSession.gameData.teamOne.find(
      (i) => i.summonerId === summoner.summonerId,
    )
  ) {
    enemyInfo = matchSession.gameData.teamTwo;
    friendInfo = matchSession.gameData.teamOne;
  } else {
    enemyInfo = matchSession.gameData.teamOne;
    friendInfo = matchSession.gameData.teamTwo;
  }

  for (let i = 0; i < friendInfo.length; i++) {
    try {
      friendInfoList.push({
        name: friendInfo[i].summonerName,
        summonerId: friendInfo[i].summonerId,
        selectChamp:
          "https://game.gtimg.cn/images/lol/act/img/champion/" +
          champDict[
            `${playerChampionSelections[friendInfo[i].summonerInternalName]}`
          ].alias +
          ".png",
        index: getPosition(friendInfo[i].selectedPosition),
      });
    } catch (e) {
      break;
    }
  }
  for (let i = 0; i < enemyInfo.length; i++) {
    try {
      enemyInfoList.push({
        name: enemyInfo[i].summonerName,
        summonerId: enemyInfo[i].summonerId,
        selectChamp:
          "https://game.gtimg.cn/images/lol/act/img/champion/" +
          champDict[
            `${playerChampionSelections[enemyInfo[i].summonerInternalName]}`
          ].alias +
          ".png",
        index: getPosition(enemyInfo[i].selectedPosition),
      });
    } catch (e) {
      break;
    }
  }

  friendInfoList.sort((x, y) => {
    return x.index - y.index;
  });
  enemyInfoList.sort((x, y) => {
    return x.index - y.index;
  });

  return [friendInfoList, enemyInfoList];
}

const getPosition = (selectedPosition) => {
  switch (selectedPosition) {
    case "BOTTOM":
      return 4;
    case "JUNGLE":
      return 2;
    case "TOP":
      return 1;
    case "MIDDLE":
      return 3;
    case "UTILITY":
      return 5;
    case "NONE":
      return 0;
  }
};

//应用符文
export async function applyRune(data: RuneConfig) {
  let credentials = getCredentials();
  // 获取符文页信息
  const currentRuneList = (
    await createHttp1Request(
      {
        method: "GET",
        url: "lol-perks/v1/pages",
      },
      credentials,
    )
  ).json();
  logger.debug("currentRuneList", currentRuneList);
  //@ts-ignore
  const current = currentRuneList.find((i) => i.current && i.isDeletable);
  if (current != undefined) {
    // 删除当前符文页
    await createHttp1Request(
      {
        method: "DELETE",
        url: `lol-perks/v1/pages/${current.id}`,
      },
      credentials,
    );
  }
  // 写入新的符文页
  await createHttp1Request(
    {
      method: "POST",
      url: "lol-perks/v1/pages",
      body: data,
    },
    credentials,
  );
  return true;
}

// 根据召唤师ID 游标查询战绩
export const cursorQueryMatchHistory = async (
  session: ClientHttp2Session,
  puuid: string,
  begIndex: number,
  endIndex: number,
) => {
  return (
    await createHttp2Request(
      {
        method: "GET",
        url: `/lol-match-history/v1/products/lol/${puuid}/matches?begIndex=${begIndex}&endIndex=${endIndex}`,
      },
      session,
      getCredentials(),
    )
  ).json() as MatchHistoryQueryResult;
};

// 根据召唤师ID查询战绩
export const queryMatchHistory = async (puuid: string, page: PageRange = 1) => {
  let specialDict: MatchHistoryQueryResult[] = [];
  const session = await createHttpSession(getCredentials());
  for (let i = 0; i < page; i++) {
    const matchHistory = await cursorQueryMatchHistory(
      session,
      puuid,
      20 * i,
      20 * (i + 1) - 1,
    );
    specialDict.push(matchHistory);
  }
  session.close();
  return specialDict;
};

//获取一局游戏的详细数据
export const queryGameDetails = async (gameId: number) => {
  let res = (
    await createHttp1Request(
      {
        method: "GET",
        url: `/lol-match-history/v1/games/${gameId}`,
      },
      getCredentials(),
    )
  ).json() as GameDetail;
  //logger.debug("queryGameDetails gameId:", gameId);
  return res;
};

// async def get_current_queue(self):
// """
// 获取当前游戏模式
// """
// res = await (await self._wllp.request("GET", '/lol-gameflow/v1/session')).json()
// return 430 if res['gameData']['queue']['id'] < 0 else res['gameData']['queue']['id']

//获取游戏模式
function getGameModeByQueue(queue: number): GameMode {
  if ([420, 430, 440].includes(queue)) {
    return "rank";
  } else if (queue === 450) {
    return "aram";
  } else if ([900, 1010, 1900].includes(queue)) {
    return "urf";
  }
}

export const getCurrentQueue = async () => {
  let res = (
    await createHttp1Request(
      {
        method: "GET",
        url: `/lol-gameflow/v1/session`,
      },
      getCredentials(),
    )
  ).json() as GameSessionData;
  return res?.gameData?.queue?.id || 430;
};

//获取本地符文库getGameModeByQueue
export const getCustomRunes = async (champId: number) => {
  //todo 后面改成缓存
  const championData = await getChampData(champId);
  const gameMode = getGameModeByQueue(await getCurrentQueue()) || "RANK";
  const roles = championData?.roles.flatMap((r) => r.name.split("|")) || [];
  const position = championData?.positions.map((p) => p.name) || [];
  return runesDB.queryPageRunes({
    start: 0,
    size: 10,
    mode: [gameMode],
    role: roles,
    position: position,
  }).data;
};

export const getOPGGRunes = async (champId: number) => {
  const championData = await getChampData(champId);
  const gameMode = getGameModeByQueue(await getCurrentQueue()) || "rank";
  const position = championData?.positions.map((p) => p.name)[0] || "mid";
  if (gameMode === "rank") {
    return await getRankRunes(champId, position);
  } else {
    return await getNoneRankRunes(champId, gameMode);
  }
};
