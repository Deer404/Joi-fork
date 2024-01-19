import * as lcuRequestModule from "../lcu/lcuRequest";
import { restartUX } from "../lcu/lcuRequest";
import { ipcMain } from "electron";
import logger from "../lib/logger";
import { getLeagueWebSocket } from "../lcu/connector";
import { Handle } from "../const/const";
import { setting } from "../config";
import child_process from "child_process";
import { checkProcessExistByName } from "../util/processChecker";

export function setupHandleLCU() {
	// 遍历并注册handle导入的函数
	for (const key in lcuRequestModule) {
		//logger.info("register handler", key, typeof lcuRequestModule[key]);
		if (typeof lcuRequestModule[key] === "function") {
			ipcMain.handle("lcu:" + key, (event, ...args) => {
				return lcuRequestModule[key](...args);
			});
		}
	}

	//处理查询连接状态请求
	ipcMain.handle(Handle.queryConnectStatus, (event, args) => {
		try {
			return !!getLeagueWebSocket();
		} catch (e) {
			return false;
		}
	});

	//处理restartUX进程请求
	ipcMain.handle(Handle.killRender, (event, args) => {
		return restartUX();
	});

	//处理启动英雄联盟客户端请求
	ipcMain.handle(Handle.startLoLClient, (event, args) => {
		return startLoLClient();
	});

	if (setting.model.autoStartLOLClient && setting.model.lolClientPath) {
		checkProcessExistByName("LeagueClient.exe").then((res) => {
			if (!res) {
				startLoLClient();
			}
		});
	}
}

function startLoLClient() {
	if (setting.model.lolClientPath) {
		child_process.exec('"' + setting.model.lolClientPath + '"', (error, stdout, stderr) => {
			if (error) {
				logger.error("启动lol客户端失败", error);
				return;
			}
		});
	} else {
    throw new Error("lol客户端路径未设置, 启动一次游戏后自动设置");
	}
}
