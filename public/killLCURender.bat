@echo off

:: 检查是否以管理员权限运行
>nul 2>&1 net session
    :: 获取当前脚本所在路径
    set "scriptDir=%~dp0"
if %errorLevel% == 0 (
    echo 当前已以管理员权限运行
) else (
    echo 请求管理员权限...
    :: 使用 mshta 执行 VBScript 请求管理员权限
    mshta "javascript:var shell = new ActiveXObject('shell.application'); shell.ShellExecute('%~nx0', '', '', 'runas', 1);close();"
    exit /b
)

:: 在这里放置您需要以管理员权限运行的脚本命令
taskkill /F /IM LeagueClientUxRender.exe

